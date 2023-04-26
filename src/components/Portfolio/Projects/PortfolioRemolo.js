import React from "react";
import "../Portfolio.css";
import backgroundRemolo from "../../../assets/images/don-remolo-pizza.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

export default function PortfolioRemolo() {
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
          to={"https://emanuelpps.github.io/don-remolo-pizza/"}
          target="_blank" className="picture-box"
        >
          <picture className="picture">
            <img className="img-picture" src={backgroundRemolo} alt="" />
          </picture>
        </Link>
        <motion.section className="description-box" animate={animation}>
          <h3>Don Remolo Pizza</h3>
          <h4>Food Delivery Web Page</h4>
          <p className="text-box">
            As a web developer, I have created a sophisticated online food
            ordering application using CSS3, HTML5, Bootstrap, React JS, and
            Firebase. The platform features an appealing design and interactive
            functionalities. It is highly responsive across various devices
            thanks to Bootstrap. Real-time user experience is facilitated
            through React JS and Firebase. Ordering food has never been easier
            and more convenient.
          </p>
          <ul>
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
