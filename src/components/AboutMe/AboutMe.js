import React, { useState, useEffect } from "react";
import "./AboutMe.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export default function AboutMe() {
  const [skills, setSkills] = useState([]);

  const fetchData = () => {
    fetch(process.env.PUBLIC_URL + "/assets/skillsJson.json")
      .then((res) => res.json())
      .then((result) => setSkills(result))
      .catch((err) => console.log("error"));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({ x: "100vw" });
    }
    console.log("this is in view", inView);
  }, [animation, inView]);

  return (
    <div ref={ref} id="AboutMe" className="AboutMe-Container">
      <motion.section animate={animation} className="box">
        <h1>About Me</h1>
        <p>
          I am a passionate Full Stack developer with aspirations to learn and
          grow in a collaborative work environment and team. I have knowledge
          in HTML, CSS, JavaScript, and ReactJS. Currently, I am still learning
          and taking back-end development courses at Coderhouse. My future goal
          is to become an experienced full-stack developer. I have been working
          in Digital Marketing for more than 6 years in different companies,
          both related to E-commerce and Digital Marketing agencies. My goal is
          to get my first job in the programming industry and evolve myself
          professionally as a developer.
        </p>
        <div  ref={ref} id="Skills" className="skills-container">
          <h2>Skills</h2>
          <div className="card-container">
          {skills.map((skls, index) => (
              <div className="card-inner" key={index}>
                <img src={skls.img} alt={skls.language} title={skls.language} />
                <p className="text-center">{skls.language}</p>
              </div>
          ))}
        </div>
        </div>
      </motion.section>
    </div>
  );
}
