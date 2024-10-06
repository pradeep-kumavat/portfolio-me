import Projects from '@/components/Projects/Projects'
import React from 'react'

export const metadata = {
  title: {
    absolute: "",
    default: "Pradeep Kumavat",
    template: "Pradeep Kumavat Portfolio",
  },
  description: "Welcome to the Projects page",
};

const page = () => {
  return (
    <Projects/>
  )
}

export default page