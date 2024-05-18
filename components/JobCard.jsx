import React from "react";

const JobCard = ({ title, company, location, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
      <div className="flex justify-between px-6 py-4">
        <div className="font-bold text-xl text-black">{title}</div>
        <div className="text-gray-500">
          {company} - {location}
        </div>
      </div>
      <div className="px-6 py-4">
        <p className="text-gray-700">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between border-t border-gray-200">
        <button className="btn btn-primary">Learn More</button>
        <span className="text-gray-500">Full Time</span>
      </div>
    </div>
  );
};

export default JobCard;
