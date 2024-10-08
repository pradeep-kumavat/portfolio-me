'use client'
import Link from 'next/link'
import { Github, Mail, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-10 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-3">
            Let&apos;s Connect with<span className="text-[#E6B9A6]"> me</span>.
          </h2>
          <p className="text-lg">
            Start by <Link href="/contact" className="text-[#E6B9A6] hover:underline">saying hi</Link>
          </p>
        </div>
        
        <div className="flex flex-wrap items-center justify-between border-t border-gray-800 pt-6">
          <div className="flex items-center mb-4 md:mb-0">
            <span className="font-bold text-lg mr-2">Pradeep</span>
            <span className="text-xs text-gray-400">© 2024 All Right Reserved.</span>
          </div>
          
          <div className="flex space-x-4">
            <div className="relative group">
              <Link href="https://x.com/pradeep_00r" target="_blank" rel="noopener noreferrer" className="relative block">
                <Twitter className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 bg-gray-800 text-white text-xs font-semibold py-1 px-2 rounded opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Twitter
                </span>
              </Link>
            </div>
            <div className="relative group">
              <Link href="https://github.com/pradeep-kumavat" target="_blank" rel="noopener noreferrer" className="relative block">
                <Github className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 bg-gray-800 text-white text-xs font-semibold py-1 px-2 rounded opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  GitHub
                </span>
              </Link>
            </div>
            <div className="relative group">
              <Link href="https://www.linkedin.com/in/pradeep-kumavat" target="_blank" rel="noopener noreferrer" className="relative block">
                <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 bg-gray-800 text-white text-xs font-semibold py-1 px-2 rounded opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  LinkedIn
                </span>
              </Link>
            </div>
            <div className="relative group">
              <Link href="mailto:pradeepkumavat108@gmail.com" target="_blank" rel="noopener noreferrer" className="relative block">
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="absolute bottom-full left-1/2 transform -translate-x-0 -translate-y-4 bg-gray-800 text-white text-xs font-semibold py-1 px-2 rounded opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Email
                </span>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="text-center text-xs text-gray-400 mt-6">
          Powered with ❤️ by <Link href="#" className="text-[#E6B9A6] hover:underline">Pradeep Kumavat</Link>
        </div>
      </div>
    </footer>
  )
}