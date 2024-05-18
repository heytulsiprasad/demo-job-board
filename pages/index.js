import Image from "next/image";
import { Inter } from "next/font/google";
import JobCard from "@/components/JobCard";
import jobs from "@/data/jobs.json";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Careers | Venus.io</title>
      </Head>
      <main
        className={`flex min-h-screen flex-col p-24 text-left ${inter.className}`}
      >
        <h1 className="font-bold text-5xl mb-8">Venus.io</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {jobs.map((job, id) => (
            <JobCard
              key={id}
              id={id}
              title={job.title}
              company={job.company}
              location={job.location}
              description={job.description}
            />
          ))}
        </div>
      </main>
    </>
  );
}
