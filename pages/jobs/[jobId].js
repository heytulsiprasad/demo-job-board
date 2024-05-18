import React from "react";
import jobs from "@/data/jobs.json";
import Head from "next/head";

const JobDetails = ({ job }) => {
  const {
    title,
    company,
    location,
    description,
    responsibilities,
    qualifications,
  } = job;

  return (
    <>
      <Head>
        <title>{title} | Venus.io</title>
      </Head>
      <div className="container my-12 mx-auto p-8 bg-white rounded-md shadow-md">
        <h1 className="text-2xl font-semibold mb-4 text-blue-700">{title}</h1>
        <h2 className="text-lg mb-2 text-gray-600">
          {company} - {location}
        </h2>

        <div className="mb-6 text-black">
          <h3 className="text-lg font-semibold mb-2">Job Description</h3>
          <p className="line-clamp-3">{description}</p>
        </div>

        <div className="mb-6 text-black">
          <h3 className="text-lg font-semibold mb-2">Responsibilities</h3>
          <ul className="list-disc pl-6">
            {responsibilities?.map((responsibility) => (
              <li key={responsibility}>{responsibility}</li>
            ))}
          </ul>
        </div>

        <div className="text-black">
          <h3 className="text-lg font-semibold mb-2">Qualifications</h3>
          <ul className="list-disc pl-6">
            {qualifications?.map((qualification) => (
              <li key={qualification}>{qualification}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: jobs.map((job, id) => ({
      params: { jobId: id.toString() }, // Assuming job IDs are numbers
    })),
    fallback: "blocking", // or false. See below for fallback modes.
  };
};

export const getStaticProps = async ({ params }) => {
  const { jobId } = params; // Get the jobId from the URL params
  const job = {
    ...jobs[jobId],
    responsibilities: [
      "Design, develop, and maintain web applications",
      "Collaborate with cross-functional teams (design, product, etc.)",
      "Write clean, maintainable, and efficient code",
    ],
    qualifications: [
      "Bachelor's degree in Computer Science or related field",
      "2+ years of experience in software development",
      "Proficiency in JavaScript, HTML, CSS, and common web development frameworks",
    ],
  };

  return {
    props: { job },
  };
};

export default JobDetails;
