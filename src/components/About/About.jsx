import React, { useEffect } from "react";
import "./About.css";
import {
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandJavascript,
  TbBrandSass,
  TbBrandBootstrap,
  TbBrandReact,
  TbBrandGit,
  TbBrandFirebase,
  TbBrandFramer,
  TbBrandMongodb,
  TbBrandWordpress,
} from "react-icons/tb";
import { IoLogoNodejs } from "react-icons/io5";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";

export default function About() {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  const animationTwo = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0
        },
      });
      animationTwo.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0
        },        
      })
    }
    if (!inView) {
      animation.start({ x: "-100vw" });
      animationTwo.start({ x: "100vw" });
    }


    console.log("this is in view", inView);
  }, [animation, inView]);
  return (
    <div ref={ref} id="AboutMe" className="about">
      <div className="about-skills">
        <motion.div animate={animation}  className="about-me">
          <h3 className="about-me-title">About Me</h3>
          <p className="about-me-text">
            I am a passionate Front End developer with aspirations to learn and
            grow in a collaborative work environment and team. Currently, I am
            still learning and taking back-end development courses. My future
            goal is to become an experienced full-stack developer. I have been
            working in Digital Marketing for more than 6 years in different
            companies, both related to E-commerce and Digital Marketing
            agencies. My objective is to grow and enhance my professional skills
            in the programming industry.
          </p>
        </motion.div>
        <motion.div animate={animationTwo}  id="SkillsId" className="skills">
          <div className="icon-title">
            <h3 className="skills-title">Skills</h3>
          </div>
          <div className="icon-box">
            <div className="icon">
              <TbBrandHtml5
                style={{ color: "azure", fontSize: "60px" }}
                title="HTML 5"
                alt="HTML 5"
              />
              <h6>HTML 5</h6>
            </div>
            <div className="icon">
              <TbBrandCss3
                style={{ color: "azure", fontSize: "60px" }}
                title="CSS 3"
              />
              <h6>CSS 3</h6>
            </div>
            <div className="icon">
              <TbBrandSass
                style={{ color: "azure", fontSize: "60px" }}
                title="Sass"
              />
              <h6>SASS</h6>
            </div>
            <div className="icon">
              <TbBrandBootstrap
                style={{ color: "azure", fontSize: "60px" }}
                title="Bootstrap"
              />
              <h6>BOOTSTRAP</h6>
            </div>
            <div className="icon">
              <TbBrandJavascript
                style={{ color: "azure", fontSize: "60px" }}
                title="Javascript"
              />
              <h6>JAVSCRIPT</h6>
            </div>
            <div className="icon">
              <TbBrandReact
                style={{ color: "azure", fontSize: "60px" }}
                title="React Js"
              />
              <h6>REACT JS</h6>
            </div>
            <div className="icon">
              <TbBrandGit
                style={{ color: "azure", fontSize: "60px" }}
                title="GIT"
              />
              <h6>GIT</h6>
            </div>
            <div className="icon">
              <TbBrandFirebase
                style={{ color: "azure", fontSize: "60px" }}
                title="Firebase"
              />
              <h6>FIREBASE</h6>
            </div>
            <div className="icon">
              <TbBrandFramer
                style={{ color: "azure", fontSize: "60px" }}
                title="Framer Motion"
              />
              <h6>FRAMER</h6>
            </div>
            <div className="icon mx-auto">
              <IoLogoNodejs
                style={{ color: "azure", fontSize: "60px" }}
                title="Node Js"
              />
              <h6>NODE JS</h6>
            </div>
            <div className="icon">
              <TbBrandMongodb
                style={{ color: "azure", fontSize: "60px" }}
                title="Mongo DB"
              />
              <h6>MONGO DB</h6>
            </div>
            <div className="icon">
              <TbBrandWordpress
                style={{ color: "azure", fontSize: "60px" }}
                title="Wordpress"
              />
              <h6>WORDPRESS</h6>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
