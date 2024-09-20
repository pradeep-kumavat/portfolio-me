'use client'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <div className='bg-gray-950 min-h-screen flex items-center justify-center'>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl py-12 md:py-20 text-white px-4 md:px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-white">Contact Me</h2>
          <p className="text-lg text-green-400">
            Feel free to reach out to me with any questions, comments, or just to say hello. I'm always happy to chat!
          </p>
          <div className="space-y-3">
            <ContactInfo
              Icon={MailIcon}
              info="pradeepkumavat108@gmail.com"
            />
          </div>
        </div>
        <motion.div
          className="bg-dark-card p-6 rounded-xl shadow-sm"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white text-base">Name</Label>
                <Input id="name" placeholder="Enter your name" className="bg-dark-blue text-black border border-green-400 text-base py-2 px-3" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white text-base">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" className="bg-dark-blue text-black border border-green-400 text-base py-2 px-3" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-white text-base">Message</Label>
              <Textarea id="message" placeholder="Enter your message" rows={5} className="bg-dark-blue text-black border border-green-400 text-base py-2 px-3" />
            </div>
            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-3">
              Submit
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
    <div className="flex items-center gap-2">
      <Icon className="h-6 w-6 text-green-400" />
      <span className="text-lg">{info}</span>
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
      className="text-green-400"
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
      className="text-green-400"
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
      className="text-green-400"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}