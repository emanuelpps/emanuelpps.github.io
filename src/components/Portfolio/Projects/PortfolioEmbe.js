import React from "react";
import "../Portfolio.css";
import backgroundEmbe from "../../../assets/images/Embe-ecommerce.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

export default function PortfolioEmbe() {
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
      <Link
        classname="picture-box"
        to={"https://emanuelpps.github.io/embe-ecommerce/"}
        target="_blank"
      >
        <picture className="picture" animate={animation}>
          <img className="portfolio-image" src={backgroundEmbe} alt="" />
        </picture>
      </Link>
      <motion.section className="description-box" animate={animation}>
        <div className="title-portfolio">
          <h3>Embe House + Deco</h3>
          <h4>Ecommerce Web Page</h4>
        </div>
        <p className="text-box">
          This ecommerce uses CSS3, HTML5, Bootstrap, React JS, and Firebase to
          create a modern and responsive online shopping platform. HTML5 and
          CSS3 are used for attractive and structured design. Bootstrap ensures
          adaptability to different devices. React JS enables interactive and
          scalable user interface. Firebase manages user authentication and data
          management in the cloud.
        </p>
        <ul className="portfolio-skills">
          <li>CSS3</li>
          <li>HTML 5</li>
          <li>BOOTSTRAP</li>
          <li>JAVASCRIPT</li>
          <li>REACT JS</li>
          <li>FIREBASE</li>
        </ul>
      </motion.section>
    </div>
  );
}
