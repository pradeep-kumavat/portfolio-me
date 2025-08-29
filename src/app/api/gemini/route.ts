import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';
import fs from 'fs';
import path from 'path';

interface GeminiRequestBody {
  prompt?: string;
  contents?: string | Array<{ role?: string; parts?: Array<{ text?: string }> }>;
  model?: string;
}

interface PortfolioData {
  bio?: {
    name?: string;
    role?: string;
    summary?: string;
    location?: string;
    email?: string;
    linkedin?: string;
    github?: string;
  };
  personality?: {
    tone?: string;
    communicationStyle?: string;
    behavior?: string;
    strengths?: string[];
    interests?: string[];
    quirks?: string[];
  };
  education?: Array<{
    institution?: string;
    degree?: string;
    startDate?: string;
    endDate?: string;
    location?: string;
  }>;
  experience?: Array<{
    organization?: string;
    role?: string;
    startDate?: string;
    endDate?: string;
    description?: string;
  }>;
  skills?: Array<{
    name?: string;
    skills?: Array<{ name?: string; icon?: string } | string>;
  }>;
  projects?: Array<{
    title?: string;
    description?: string;
    image?: string;
    liveLink?: string;
    githubLink?: string;
    technologies?: string[];
  }>;
}

interface SkillItem {
  name?: string;
  icon?: string;
}

const DEFAULT_MODEL = 'gemini-2.5-flash';

function getClient() {
  const apiKey = process.env.GOOGLE_GENAI_API_KEY || process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
  if (!apiKey) {
    throw new Error('Missing Google Gemini API key. Set GOOGLE_GENAI_API_KEY or GEMINI_API_KEY.');
  }
  return new GoogleGenAI({ apiKey });
}

function sanitizeMessageText(raw: unknown): string {
  const value = typeof raw === 'function' ? (raw as () => string)() : String(raw ?? '');
  let text = value.trim();

  const pairs: Array<[string, string]> = [["\"", "\""], ["\u201C", "\u201D"], ["'", "'"]];
  for (const [open, close] of pairs) {
    if (text.startsWith(open) && text.endsWith(close) && text.length >= open.length + close.length + 1) {
      text = text.slice(open.length, -close.length).trim();
      break;
    }
  }

  // Normalize internal curly quotes to straight quotes
  text = text
    .replace(/[""]/g, '"')
    .replace(/['']/g, "'")
    .replace(/"/g, ''); // Remove any remaining double quotes

  // Collapse excessive whitespace while preserving line breaks
  text = text
    .replace(/[\t\r]+/g, ' ')
    .replace(/\u00A0/g, ' ') // non-breaking space
    .replace(/ +/g, ' ')
    .replace(/ *\n */g, '\n')
    .trim();

  return text;
}

export async function POST(request: NextRequest) {
  try {
    const body: GeminiRequestBody = await request.json();
    const { prompt, contents, model } = body || {};

    const input = contents ?? prompt;
    if (!input || (typeof input === 'string' && input.trim().length === 0)) {
      return NextResponse.json({ error: 'Provide "prompt" or "contents"' }, { status: 400 });
    }

    // Load portfolio.json to provide rich context
    let portfolioContext = '';
    let personaStyle = '';
    try {
      const portfolioPath = path.join(process.cwd(), 'src', 'constants', 'portfolio.json');
      if (fs.existsSync(portfolioPath)) {
        const raw = fs.readFileSync(portfolioPath, 'utf8');
        const data: PortfolioData = JSON.parse(raw);
        const bio = data?.bio || {};
        const personality = data?.personality || {};
        const education = Array.isArray(data?.education) ? data.education : [];
        const experience = Array.isArray(data?.experience) ? data.experience : [];
        const skills = Array.isArray(data?.skills) ? data.skills : [];
        const projects = Array.isArray(data?.projects) ? data.projects : [];

        const educationList = education
          .map((e) => `- ${e.degree || ''} at ${e.institution || ''} (${e.startDate || ''} - ${e.endDate || ''})`)
          .join('\n');
        const experienceList = experience
          .map((x) => `- ${x.role || ''} at ${x.organization || ''} (${x.startDate || ''} - ${x.endDate || ''}): ${x.description || ''}`)
          .join('\n');
        const skillsList = skills
          .map((s) => `- ${s.name || ''}: ${(Array.isArray(s.skills) ? s.skills.map((k: SkillItem | string) => typeof k === 'string' ? k : k.name || '').join(', ') : '')}`)
          .join('\n');
        const projectsList = projects
          .map((p) => `- ${p.title || ''}: ${p.description || ''} (Tech: ${(Array.isArray(p.technologies) ? p.technologies.join(', ') : '')}) [Live: ${p.liveLink || ''}]`)
          .join('\n');

        const personalityBlock = `Personality & Behavior:\n- Tone: ${personality?.tone || ''}\n- Communication: ${personality?.communicationStyle || ''}\n- Behavior: ${personality?.behavior || ''}\n- Strengths: ${(Array.isArray(personality?.strengths) ? personality.strengths.join(', ') : '')}\n- Interests: ${(Array.isArray(personality?.interests) ? personality.interests.join(', ') : '')}\n- Quirks: ${(Array.isArray(personality?.quirks) ? personality.quirks.join(', ') : '')}`;

        portfolioContext = `You are an AI portfolio assistant for ${bio?.name || 'the user'}.\n` +
          `Bio:\n- Name: ${bio?.name || ''}\n- Role: ${bio?.role || ''}\n- Summary: ${bio?.summary || ''}\n- Location: ${bio?.location || ''}\n- Email: ${bio?.email || ''}\n- LinkedIn: ${bio?.linkedin || ''}\n- GitHub: ${bio?.github || ''}\n\n` +
          `${personalityBlock}\n\n` +
          `Education:\n${educationList}\n\n` +
          `Experience:\n${experienceList}\n\n` +
          `Skills:\n${skillsList}\n\n` +
          `Projects:\n${projectsList}\n\n` +
          `Use this information to answer questions about the portfolio. Be concise and helpful. If asked about contact or hiring, share the email and LinkedIn.`;

        personaStyle = [
          personality?.tone ? `Adopt this tone: ${personality.tone}.` : '',
          personality?.communicationStyle ? `Communication style: ${personality.communicationStyle}.` : '',
          personality?.behavior ? `Behavior guidelines: ${personality.behavior}.` : ''
        ].filter(Boolean).join(' ');
      }
    } catch (_) {
      // If portfolio loading fails, proceed without it
      portfolioContext = '';
      personaStyle = '';
    }

    const ai = getClient();

    const styleInstruction = `You are a friendly, professional AI assistant for a personal portfolio site.
Format every answer as:
1) A brief 1–2 sentence paragraph that directly answers the user.
2) 3–6 bullet points (use "- ") with concrete, scannable details.
Keep answers clear and upbeat. Avoid jargon unless asked.
If relevant, reference items from the portfolio context below.
Offer a short follow-up suggestion when appropriate.
${personaStyle}`;

    const composed = typeof input === 'string'
      ? `${styleInstruction}\n\n${portfolioContext ? portfolioContext + '\n\n' : ''}User: ${input}\nAssistant:`
      : input;

    const response = await ai.models.generateContent({
      model: model || DEFAULT_MODEL,
      contents: composed as string,
    });

    const text = (response as { text?: string; response?: { text?: string } })?.text ?? (response as { text?: string; response?: { text?: string } })?.response?.text ?? '';

    if (!text) {
      return NextResponse.json({ error: 'No response generated' }, { status: 502 });
    }

    const cleaned = sanitizeMessageText(text);

    return NextResponse.json(
      {
        success: true,
        model: model || DEFAULT_MODEL,
        message: cleaned,
        usedPortfolioContext: Boolean(portfolioContext),
        timestamp: new Date().toISOString(),
      },
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      }
    );
  } catch (error: unknown) {
    const status = (error as { status?: number })?.status || 500;
    const message = (error as { message?: string })?.message || 'Failed to call Gemini API';
    return NextResponse.json(
      {
        success: false,
        error: message,
        timestamp: new Date().toISOString(),
      },
      { status }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}


