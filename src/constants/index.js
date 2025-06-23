import {
  frontend,
  backend,
  ml,
  dataeng,
  javascript,
 
  html,
  css,
  reactjs,
 
  tailwind,
  nodejs,

  git,
 
  MLFin,
  MLRetail,
  MLHealthC,
  PortfolioThumbnail,
  
  python,
  mysql,
  java

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-End Development",
    icon: frontend,
  },
  {
    title: "Back-End Development",
    icon: backend,
  },
  {
    title: "Data Management",
    icon: dataeng,
  },
  {
    title: "Software Testing",
    icon: ml,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "mySql",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  },

];

/*
const testimonials = [
  {
    testimonial:
      "",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
  {
    testimonial:
      "",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
  {
    testimonial:
      "",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
];
*/
const projects = [
  {
    name: "Machine Learning for Financial Services",
    description:
      "This repository contains a Python project that demonstrates the application of machine learning techniques in the fields of financial analytics and anti-money laundering. The project comprises two distinct case studies, each highlighting the practical utilization of machine learning algorithms for specific financial tasks.",
    tags: [
      {
        name: "Python",
        color: "",
      },
      {
        name: "ML",
        color: "",
      },
      {
        name: "data analysis",
        color: "",
      },
    ],
    image: MLFin,
    source_code_link: "https://github.com/BriArl/ML-FinancialServices/",
  },
  {
    name: "Predicting Customer Retail Behavior",
    description:
      "The primary objective of this project is to identify and implement machine learning techniques that are proven to be effective in predicting customer behavior in the retail domain. By analyzing customer data, the project seeks to build models capable of predicting purchasing patterns, customer churn, demand forecasting, and targeted marketing.",
    tags: [
      {
        name: "Python",
        color: "",
      },
      {
        name: "ML",
        color: "",
      },
      {
        name: "data analysis",
        color: "",
      },
    ],
    image: MLRetail,
    source_code_link: "https://github.com/BriArl/ML-PredictingCustomerBehavior",
  },
  {
  name: "ML In Health Care",
  description:
    "Welcome to the Machine Learning in Healthcare repository! This project showcases the application of machine learning techniques to healthcare data analysis through two informative demos",
  tags: [
    {
      name: "Python",
      color: "",
    },
    {
      name: "ML",
      color: "",
    },
    {
      name: "data analysis",
      color: "",
    },
  ],
  image: MLHealthC,
  source_code_link: "https://github.com/BriArl/ML-MedicalField",
},
{
    name: "Portfolio",
    description:
      "Built and maintained a responsive portfolio site using React and modern frontend practices to showcase projects and professional milestones.",
    tags: [
      {
        name: "HTML",
        color: "",
      },
      {
        name: "Tailwind CSS",
        color: "",
      },
      {
        name: "React",
        color: "",
      },
    ],
    image: PortfolioThumbnail,
    source_code_link: "https://github.com/Portfolio",
  }


  /*{
    name: "",
    description:
      "",
    tags: [
      {
        name: "",
        color: "",
      },
      {
        name: "",
        color: "",
      },
      {
        name: "",
        color: "",
      },
    ],
    image: ,
    source_code_link: "https://github.com/",
  },*/
];

export { services, technologies, /*testimonials,*/ projects };