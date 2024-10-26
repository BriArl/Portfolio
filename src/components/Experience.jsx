import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "Raymond James",
    logo: "public/Raymond-James-logo-2.jpg",
    date: "July 2024 - October 2024",
    summary: "Contributed to enhancements and functionality improvements in Model Management and Drift applications. Collaborated with senior developers to understand application design and API layers while managing repository changes through Azure DevOps.",
  },
  {
    title: "SAP BASIS Administrator Intern",
    company: "MKS Instruments",
    logo: "/mks-logo.png",
    date: "January 2024 - June 2024",
    summary: "Reviewed and edited key process documents for clarity and accuracy. Secured SAP access permissions and upgraded ST-PI components while assisting with data migration and SAP administration tasks.",
  },
  {
    title: "Software Engineer Intern",
    company: "Year Up & Pluralsight",
    logo: "public/YU-logo.jpg",
    date: "January 2023 - December 2023",
    summary: "Engaged in immersive internship focused on core software engineering skills, particularly in Java and the Spring Framework. Gained hands-on experience with database management and collaborated on projects using Git.",
  },
];

const Experience = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = 'Resume-Brianna-Y.pdf'; // Path to your PDF file
    link.download = 'Resume-Brianna-Y.pdf'; // File name for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-[#24252A] p-6 rounded-lg">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center text-white`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center text-white`}>
          Work Experience
        </h2>
      </motion.div>

      <div className="mt-8"> {/* Removed max-height and overflow for scrollability */}
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="mb-6 p-4 border border-gray-300 rounded-lg shadow-lg bg-[#dbdad5] flex items-start" // Changed background color
          >
            <img
              src={experience.logo}
              alt={experience.company}
              className="w-16 h-16 mr-4 transition-transform duration-300 hover:scale-110"
            />
            <div className="flex-1">
              <h3 className="text-gray-600 font-bold">{experience.title}</h3> {/* Changed title color to match description */}
              <p className="text-gray-600">{experience.company}</p>
              <p className="text-gray-500 text-sm">{experience.date}</p>
              <p className="text-gray-700 mt-1">{experience.summary}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button
          onClick={handleDownload}
          className="bg-[#dbdad5] text-[#24252A] py-2 px-6 rounded-lg hover:bg-gray-300 transition duration-200 font-bold" // Added font-bold class
        >
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");