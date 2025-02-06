import About from '@/components/About/About'
import Hero from '@/components/Hero/Hero'
import GithubGraph from '@/components/GithubGraph/GithubGraph'

export const metadata = {
  title: {
    absolute: "",
    default: "Pradeep Kumavat",
    template: "Pradeep Kumavat Portfolio",
  },
  description: "Welcome to the home page",
};

export default function Home() {
  return (
    <div>
        <Hero />
        <About />
        <GithubGraph />
    </div>
  )
}