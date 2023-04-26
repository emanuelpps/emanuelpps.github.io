import React from "react";
import "../Portfolio.css";
import backgroundNire from "../../../assets/images/nire.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

export default function PortfolioNire() {
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
    <div ref={ref} className="portfolio-box">
      <Link to={"https://emanuelpps.github.io/Nire-Panaderia/"} target="_blank" className="picture-box">
        <picture className="picture">
          <img src={backgroundNire} alt="" />
        </picture>
      </Link>
      <motion.section className="description-box" animate={animation}>
        <h3>Ñire Panaderia</h3>
        <h4>Bakery Web Page</h4>
        <p className="text-box">
          I developed an attractive website with a simple and minimalist design
          for a bakery specializing in sourdough bread, using CSS3, HTML5,
          Bootstrap, JavaScript, and React JS. The design is modern and
          informative.
        </p>
        <ul>
          <li>CSS3</li>
          <li>HTML 5</li>
          <li>BOOTSTRAP</li>
          <li>JAVASCRIPT</li>
          <li>REACT JS</li>
        </ul>
      </motion.section>
    </div>
  );
}
