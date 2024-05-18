import React from "react";
import Link from "next/link";

const JobCard = ({ id, title, company, location, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
      <div className="flex justify-between px-6 py-4">
        <div id="job-title" className="font-bold text-xl text-black">
          {title}
        </div>
        <div id="job-location" className="text-gray-500">
          {company} - {location}
        </div>
      </div>
      <div id="job-description" className="px-6 py-4">
        <p className="text-gray-700">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between border-t border-gray-200">
        <Link href={`/jobs/[jobId]`} as={`/jobs/${id}`} legacyBehavior>
          <a id="job-link" className="btn btn-primary">
            Learn More
          </a>
        </Link>
        <span id="job-details" className="text-gray-500">
          Full Time
        </span>
      </div>
    </div>
  );
};

export default JobCard;
