import React from "react";
import "../Portfolio.css";
import backgroundFalcon from "../../../assets/images/falcon_aviation_shop.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

export default function PortfolioFalcon() {
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
        to={"https://emanuelpps.github.io/Falcon-Aviation-Shop/"}
        target="_blank"
        className="picture-box"
      >
        <picture className="picture">
          <img className="portfolio-image" src={backgroundFalcon} alt="" />
        </picture>
      </Link>
      <motion.section className="description-box" animate={animation}>
        <h3 className="titles-project">Falcon Aviation Shop</h3>
        <h4 className="titles-project">Ecommerce Web Page</h4>
        <p className="text-box">
          This aerospace products ecommerce uses CSS3, HTML5, Bootstrap, and
          Vanilla JavaScript. HTML5 and CSS3 create an attractive design.
          Bootstrap provides a responsive user interface. Vanilla JavaScript
          enhances site functionality. Experience efficient online shopping for
          aviation enthusiasts.
        </p>
        <ul className="portfolio-skills">
          <li>CSS3</li>
          <li>HTML 5</li>
          <li>BOOTSTRAP</li>
          <li>JAVASCRIPT</li>
        </ul>
      </motion.section>
    </div>
  );
}
