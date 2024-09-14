import Link from 'next/link'
import { Github, Mail, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-12 px-4 md:px-6">
    <div className="container mx-auto">
      <div className="mb-8">
        <h2 className="text-4xl font-bold mb-4">
          Let's Connect with<span className="text-green-400"> me</span>.
        </h2>
        <p className="text-xl">
          Start by <Link href="/contact" className="text-green-400 hover:underline">saying hi</Link>
        </p>
      </div>
      
      <div className="flex flex-wrap items-center justify-between border-t border-gray-800 pt-8">
        <div className="flex items-center mb-4 md:mb-0">
          <span className="font-bold text-xl mr-2">Pradeep</span>
          <span className="text-sm text-gray-400">© 2024 All Right Reserved.</span>
        </div>
        
        <div className="flex space-x-4">
          <div className="relative group">
            <Link href="https://x.com/pradeep_00r" target="_blank" rel="noopener noreferrer" className="relative block">
              <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 bg-gray-800 text-white text-xs font-semibold py-1 px-2 rounded opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                Twitter
              </span>
            </Link>
          </div>
          <div className="relative group">
            <Link href="https://github.com/pradeep-kumavat" target="_blank" rel="noopener noreferrer" className="relative block">
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 bg-gray-800 text-white text-xs font-semibold py-1 px-2 rounded opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                GitHub
              </span>
            </Link>
          </div>
          <div className="relative group">
            <Link href="mailto:pradeepkumavat108@gmail.com" target="_blank" rel="noopener noreferrer" className="relative block">
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="absolute bottom-full left-1/2 transform -translate-x-0 -translate-y-4 bg-gray-800 text-white text-xs font-semibold py-1 px-2 rounded opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                Email
              </span>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="text-center text-sm text-gray-400 mt-8">
        Powered with ❤️ by <Link href="#" className="text-green-400 hover:underline">Pradeep Kumavat</Link>
      </div>
    </div>
  </footer>
  )
}
