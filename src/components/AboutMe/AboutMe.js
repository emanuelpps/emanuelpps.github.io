import React from "react";
import "./AboutMe.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

export default function AboutMe(scrollAboutMe) {
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
    <div ref={ref}  id="AboutMe" className="AboutMe-Container">
        <motion.section animate={animation} className="box">
          <h1>About Me</h1>
          <p>
            I am a passionate junior front-end developer with a desire to learn
            and grow in a collaborative work environment and team. I have
            knowledge in HTML, CSS, JavaScript, and ReactJS. Currently, I am
            still learning and taking back-end programming courses at
            Coderhouse. My future goal is to become a full-stack programmer. I
            have been working in Digital Marketing for more than 6 years in
            different companies, both in technology ecommerce companies and
            digital marketing agencies. My desire is to be able to get my first
            job in the programming industry and develop myself professionally as
            a programmer.
          </p>
        </motion.section>
    </div>
  );
}
