import React from "react";
import "./Skills.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export default function Skills() {
  const [skills, setSkills] = useState([]);
  //const titleSkills = "{MySkills}";

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

  const fetchData = () => {
    fetch(process.env.PUBLIC_URL + "/assets/skillsJson.json")
      .then((res) => res.json())
      .then((result) => setSkills(result))
      .catch((err) => console.log("error"));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
      <div id="Skills" className="Skills-box" ref={ref}>
        <h1 className="skills-title">Skills</h1>
          <motion.section className="skills-cards" animate={animation}>
            {skills.map((skls) => {
              return (
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img
                        src={skls.img}
                        className="p-3"
                        alt={skls.language}
                      ></img>
                    </div>
                    <div class="flip-card-back">
                      <p class="title">{skls.language}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.section>
          </div>
  );
}
