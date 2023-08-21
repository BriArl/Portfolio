import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { pdfjs } from "react-pdf"; 

pdfjs.GlobalWorkerOptions.workerSrc = "/pdfjs-dist/build/pdf.worker.js";


const ResumeDisplay = () => {
  const pdfPath = 'Resume-Brianna-Y.pdf';
  
  return (
    <div className='text-[#24252A] mx-auto text-center'>
      <div style={{ maxWidth: '100%', width: '100%', display: 'flex', justifyContent: 'center' }}>
        <iframe src={pdfPath} title="Resume" width="100%" height="600px" style={{ maxWidth: '800px', width: '100%', minHeight: '400px' }}></iframe>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20'>
        <ResumeDisplay /> 
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");