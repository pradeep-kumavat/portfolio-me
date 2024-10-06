import Contact from "@/components/Contact/Contact";

export const metadata = {
  title: {
    absolute: "",
    default: "Pradeep Kumavat",
    template: "Pradeep Kumavat Portfolio",
  },
  description: "Welcome to the Contacts page",
};

export default function Home() {
  return (
    <>
     <div>
      <Contact/>
    </div>
    </>
  );
}
 