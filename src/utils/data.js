import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FaToolbox } from 'react-icons/fa';
import { FiServer } from 'react-icons/fi';
import { FaGraduationCap } from 'react-icons/fa'
export const projectExperience = [
  {
    name: "Frontend Technologies",
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
    skills: "HTML, CSS, JavaScript, React, Sass, Figma , JSON , Web APIs",
  },
  {
    name: "Backend Technologies",
    icon: FiServer,
    bg: "#EEC048",
    skills: "Node.js, Express.js, MySQL ",
  },
  {
    name: "General Skills and Tools",
    icon: FaToolbox,
    bg: "#F26440",
    skills: "Git , GitHub , Jira , Agile Development , Visual Studio Code , User Authentication ",
  },
];

export const WhatDoIHelp = [
  "👋 Hey there, I'm Jagmeet, a passionate web developer with a flair for crafting user-friendly and responsive web applications. My journey into the world of web development was a transition fueled by curiosity and a drive for creativity. 🚀 With a keen eye for detail, I'm dedicated to merging aesthetics with functionality to bring digital experiences to life.",
  "💻 Armed with strong project management, problem-solving, and collaboration skills, I'm confidently stepping into this dynamic field. I'm excited to contribute meaningfully to the industry, one pixel at a time!"
];

export const workExp = [
  {
    place: "",
    tenure: "Jul 2023 - current",
    role: "Full Stack Web Developer",
    icon: HiOutlineDesktopComputer,
    detail: "As a passionate developer, I'm  crafting my personal projects into digital masterpieces.Vancouver, BC ",
  },
  {
    place: "",
    tenure: "Apr 2023 - Jun 2023",
    role: "Diploma in Web Development ",
    icon: FaGraduationCap,
    detail:
      "Brainstation, Vancouver, BC",
  },
  {
  
    tenure: "Jan 2016 - April 2018",
    role: "Diploma of General Studies in Business",
    icon: FaGraduationCap,
    detail:
    "Kwantlen Polytechnic University, Surrey, BC",
  },
];


export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
