'use client'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useState } from 'react'


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })


  
  return (
    <div className='bg-gray-950 min-h-screen flex items-center justify-center w-full px-4 py-16 sm:px-6 lg:px-8'>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-6xl bg-gray-900/50 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden animate-fade-in-slide">
        <div className="space-y-6 p-8 lg:p-12 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-white animate-fade-in">Get in Touch</h2>
          <p className="text-lg text-[#E6B9A6] animate-fade-in">
            Feel free to reach out with any questions, comments, or just to say hello. I&apos;m always happy to chat!
          </p>
          <div className="space-y-4">
            <ContactInfo
              Icon={MailIcon}
              info="pradeepkumavat108@gmail.com"
            />
          </div>
        </div>
        <div className="bg-white/10 p-8 lg:p-12 rounded-2xl animate-fade-in-scale">
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white text-sm font-medium">Name</Label>
                <Input 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  name='Name' 
                  id="name" 
                  placeholder="Enter your name" 
                  className="bg-gray-800/50 text-white border-[#dfa187] focus:border-[#dfa187] focus:ring-[#dfa187] text-base py-3 px-4 rounded-lg transition duration-300 ease-in-out hover:bg-gray-800/70 focus:bg-gray-800/70" 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white text-sm font-medium">Email</Label>
                <Input 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  name='Email' 
                  id="email" 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-gray-800/50 text-white border-[#dfa187] focus:border-[#dfa187] focus:ring-[#dfa187] text-base py-3 px-4 rounded-lg transition duration-300 ease-in-out hover:bg-gray-800/70 focus:bg-gray-800/70" 
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-white text-sm font-medium">Message</Label>
              <Textarea 
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                name='Message' 
                id="message" 
                placeholder="Enter your message" 
                rows={5} 
                className="bg-gray-800/50 text-white border-[#dfa187] focus:border-[#dfa187] focus:ring-[#dfa187] text-base py-3 px-4 rounded-lg transition duration-300 ease-in-out hover:bg-gray-800/70 focus:bg-gray-800/70 resize-none" 
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-[#E6B9A6] hover:bg-[#d9a08e] text-gray-900 font-semibold text-lg py-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#E6B9A6] focus:ring-opacity-50"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

// Contact Info Component
interface ContactInfoProps {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>
  info: string
}

function ContactInfo({ Icon, info }: ContactInfoProps) {
  return (
    <div className="flex items-center gap-3 text-white">
      <div className="bg-[#E6B9A6] p-1.5 rounded-full">
        <Icon className="h-4 w-4 text-gray-900" />
      </div>
      <span className="text-base">{info}</span>
    </div>
  )
}

// Icons
function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

// CSS Animations
const styles = `
  @keyframes fade-in {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  @keyframes fade-in-slide {
    0% { transform: translateY(-20px); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
  }
  @keyframes scale-in {
    0% { transform: scale(0.9); opacity: 0; }
    100% { transform: scale(1); opacity: 1; }
  }
  
  .animate-fade-in {
    animation: fade-in 0.5s forwards;
  }
  .animate-fade-in-slide {
    animation: fade-in-slide 0.5s forwards;
  }
  .animate-fade-in-scale {
    animation: scale-in 0.5s forwards;
  }
`

