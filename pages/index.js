import Image from "next/image";
import { Inter } from "next/font/google";
import JobCard from "@/components/JobCard";

const inter = Inter({ subsets: ["latin"] });

const jobs = [
  {
    title: "Software Engineer - Full Stack",
    company: "Technovation Inc.",
    location: "San Francisco, California",
    description:
      "Develop and maintain web applications using cutting-edge technologies...",
  },
  {
    title: "Marketing Manager",
    company: "Green Solutions Co.",
    location: "London, England",
    description:
      "Lead and execute marketing campaigns to drive brand awareness and sales growth...",
  },
  {
    title: "Graphic Designer",
    company: "Design Studio X",
    location: "Remote (US)",
    description:
      "Create visually compelling graphics and marketing materials for our clients...",
  },
  {
    title: "Data Analyst",
    company: "Healthcare Analytics Inc.",
    location: "Chicago, Illinois",
    description:
      "Analyze and interpret healthcare data to identify trends and insights...",
  },
  {
    title: "Sales Representative",
    company: "CloudTech Solutions",
    location: "Atlanta, Georgia",
    description:
      "Sell cloud-based software solutions and build strong customer relationships...",
  },
  {
    title: "Front-End Developer",
    company: "E-commerce Platform",
    location: "Berlin, Germany",
    description:
      "Build user-friendly and responsive interfaces for our e-commerce platform...",
  },
  {
    title: "Content Writer",
    company: "Travel Blog Network",
    location: "Remote (Anywhere)",
    description:
      "Create engaging and informative content for our travel blog network...",
  },
  {
    title: "Project Manager",
    company: "Construction & Development",
    location: "Dubai, United Arab Emirates",
    description:
      "Manage construction projects from conception to completion, ensuring quality and budget adherence...",
  },
  {
    title: "Human Resources Specialist",
    company: "Fast-Growing Startup",
    location: "New York City, New York",
    description:
      "Manage the recruitment, onboarding, and employee relations processes...",
  },
  {
    title: "User Experience (UX) Designer",
    company: "FinTech Company",
    location: "Singapore",
    description:
      "Design user-centered interfaces for our financial technology products...",
  },
];

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col p-24 text-left ${inter.className}`}
    >
      <h1 className="font-bold text-5xl mb-8">Venus.io</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobs.map((job) => (
          <JobCard
            key={job.title} // Add a unique key for each job card
            title={job.title}
            company={job.company}
            location={job.location}
            description={job.description}
          />
        ))}
      </div>
    </main>
  );
}
