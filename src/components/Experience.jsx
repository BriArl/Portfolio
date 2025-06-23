import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "Raymond James",
    logo: "/Raymond-James-logo-2.jpg",
    date: "July 2024 - October 2024",
    summary: "Contributed to software development and enhancement of Model Management and Drift applications within the portfolio management domain. Collaborated with senior developers to align with Java best practices, upgraded Spring Boot versions to address security vulnerabilities, and managed CI/CD pipelines using Azure DevOps, Jenkins, and IntelliJ. Led deployments across environments and ensured build stability through effective dependency and version management."
  },
  {
    title: "SAP BASIS Administrator Intern",
    company: "MKS Instruments",
    logo: "/mks-logo.png",
    date: "January 2024 - June 2024",
    summary: "Gained hands-on experience with SAP system administration, including system upgrades, configuration, and change management processes. Assisted with plugin upgrades, data migration, and SAP note application while collaborating with senior admins to ensure smooth transitions across development and QA environments. Contributed to process documentation and directory setup to support system readiness and maintain operational consistency.",
  },
  {
    title: "Software Engineer Intern",
    company: "Year Up & Pluralsight",
    logo: "/YU-logo.jpg",
    date: "January 2023 - December 2023",
    summary: "Developed web and desktop applications using Java and the Spring Framework, applying object-oriented design, RESTful APIs, and dependency injection. Gained hands-on experience with SQL for database design and optimization, while using Git/GitHub for version control and collaboration. Strengthened core software development skills, including data structures, algorithms, and application lifecycle management.",
  },
];

const Experience = () => {

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

      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");