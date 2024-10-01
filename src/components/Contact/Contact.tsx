'use client'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  
  return (
      <div className='bg-gray-950 min-h-screen flex items-center justify-center w-full px-4 py-16 sm:px-6 lg:px-8'>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-6xl bg-gray-900/50 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-6 p-8 lg:p-12 flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-white">Get in Touch</h2>
            <p className="text-lg text-[#E6B9A6]">
              Feel free to reach out with any questions, comments, or just to say hello. I'm always happy to chat!
            </p>
            <div className="space-y-4">
              <ContactInfo
                Icon={MailIcon}
                info="pradeepkumavat108@gmail.com"
              />
            </div>
          </div>
          <motion.div
            className="bg-white/10 p-8 lg:p-12 rounded-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
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
          </motion.div>
        </motion.div>
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

function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function MapPinIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}