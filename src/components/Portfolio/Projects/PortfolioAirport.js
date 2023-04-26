import React from "react";
import "../Portfolio.css";
import backgroundAirport from "../../../assets/images/airport_routes_app.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

export default function PortfolioAirports() {
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
        to={"https://emanuelpps.github.io/AirportRoutesAPP/"}
        target="_blank"
        className="picture-box"
      >
        <picture className="picture">
          <img src={backgroundAirport} alt="" />
        </picture>
      </Link>
      <motion.section className="description-box" animate={animation}>
        <h3>Airport Routes</h3>
        <h4>Airport Information Web APP</h4>
        <p className="text-box">
          I have developed a web application using CSS3, HTML5, Bootstrap,
          JavaScript, React JS, and Fetch API. It allows users to enter an ICAO
          code of an airport to obtain information about destinations and the
          number of outgoing flights. The user interface is responsive and
          visually appealing, with a modern design. Fetch API is used to make
          asynchronous data requests and dynamically update the information in
          the user interface. This application provides an efficient and
          accurate tool for accessing flight data quickly and effectively.
        </p>
        <ul>
          <li>CSS3</li>
          <li>HTML 5</li>
          <li>BOOTSTRAP</li>
          <li>JAVASCRIPT</li>
          <li>REACT JS</li>
          <li>FETCH API</li>
        </ul>
      </motion.section>
    </div>
  );
}
