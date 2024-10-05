import About from '@/components/About/About'
import Hero from '@/components/Hero/Hero'

export const metadata = {
  title: {
    absolute: "",
    default: "Pradeep Kumavat Portfolio",
    template: "Pradeep Kumavat Portfolio",
  },
  description: "Welcome to the home page",
};

export default function Home() {
  return (
    <div>
        <Hero />
        <About />
      </div>
  )
}