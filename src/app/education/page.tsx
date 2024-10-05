import Education from "@/components/Education/Education";

export const metadata = {
  title: {
    absolute: "",
    default: "Pradeep Kumavat Portfolio",
    template: "Pradeep Kumavat Portfolio",
  },
  description: "Welcome to the Education page",
};

export default function Home() {
  return (
    <>
     <div>
      <Education/>
    </div>
    </>
  );
}
 