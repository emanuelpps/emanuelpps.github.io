import React from "react";
import "./Portfolio.css";
import backgroundEmbe from "../../assets/images/Embe-ecommerce.png";
import backgroundFalcon from "../../assets/images/falcon_aviation_shop.png";
import backgroundRemolo from "../../assets/images/don-remolo-pizza.png";
import backgroundAirport from "../../assets/images/airport_routes_app.png";
import backgroundNire from "../../assets/images/nire.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

export default function Portfolio() {

  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.3
        }
      });
    }
    if (!inView) {
      animation.start({ x: '100vw' });
    }
    console.log("this is in view", inView);
  }, [animation,inView]);

  return (
    <div className="portfolio">
      <h1 className="text-center">Portfolio</h1>
      <div className="portfolio-img-box-1 caption">
        <Link ref={ref}>
          <motion.picture animate={animation}>
            <img src={backgroundEmbe} alt="" />
          </motion.picture>
        </Link>
        <motion.section className="description-box" animate={animation}>
          <h3>Embe House + Deco</h3>
          <h4>Ecommerce Web Page</h4>
          <p className="text-box">
            Lorem100 Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Quisquam perspiciatis non porro earum nam ipsam voluptate corporis
            doloribus ab nesciunt laudantium est ducimus quod quae dolorum
            ratione magnam, aliquam sint molestiae vel eos. Officia non
            doloremque dolore laudantium sint voluptatem delectus magni,
            perferendis reiciendis ab ex? Porro magni iste doloremque alias.
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
      <div className="portfolio-img-box-1">
        <Link>
          <picture>
            <img src={backgroundFalcon} alt="" />
          </picture>
        </Link>
        <motion.section className="description-box" animate={animation}>
          <h3>Falcon Aviation Shop</h3>
          <h4>Ecommerce Web Page</h4>
          <p className="text-box">
            Lorem100 Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Quisquam perspiciatis non porro earum nam ipsam voluptate corporis
            doloribus ab nesciunt laudantium est ducimus quod quae dolorum
            ratione magnam, aliquam sint molestiae vel eos. Officia non
            doloremque dolore laudantium sint voluptatem delectus magni,
            perferendis reiciendis ab ex? Porro magni iste doloremque alias.
          </p>
          <ul>
            <li>CSS3</li>
            <li>HTML 5</li>
            <li>BOOTSTRAP</li>
            <li>JAVASCRIPT</li>
          </ul>
        </motion.section>
      </div>
      <div className="portfolio-img-box-1">
        <Link>
          <picture>
            <img src={backgroundRemolo} alt="" />
          </picture>
        </Link>
        <section className="description-box">
          <h3>Don Remolo Pizza</h3>
          <h4>Food Delivery Web Page</h4>
          <p className="text-box">
            Lorem100 Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Quisquam perspiciatis non porro earum nam ipsam voluptate corporis
            doloribus ab nesciunt laudantium est ducimus quod quae dolorum
            ratione magnam, aliquam sint molestiae vel eos. Officia non
            doloremque dolore laudantium sint voluptatem delectus magni,
            perferendis reiciendis ab ex? Porro magni iste doloremque alias.
          </p>
          <ul>
            <li>CSS3</li>
            <li>HTML 5</li>
            <li>BOOTSTRAP</li>
            <li>JAVASCRIPT</li>
            <li>REACT JS</li>
            <li>FIREBASE</li>
          </ul>
        </section>
      </div>
      <div className="portfolio-img-box-1">
        <Link>
          <picture>
            <img src={backgroundAirport} alt="" />
          </picture>
        </Link>
        <section className="description-box">
          <h3>Airport Routes</h3>
          <h4>Airport Information Web APP</h4>
          <p className="text-box">
            Lorem100 Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Quisquam perspiciatis non porro earum nam ipsam voluptate corporis
            doloribus ab nesciunt laudantium est ducimus quod quae dolorum
            ratione magnam, aliquam sint molestiae vel eos. Officia non
            doloremque dolore laudantium sint voluptatem delectus magni,
            perferendis reiciendis ab ex? Porro magni iste doloremque alias.
          </p>
          <ul>
            <li>CSS3</li>
            <li>HTML 5</li>
            <li>BOOTSTRAP</li>
            <li>JAVASCRIPT</li>
            <li>REACT JS</li>
            <li>FETCH API</li>
          </ul>
        </section>
      </div>
      <div className="portfolio-img-box-1">
        <Link>
          <picture>
            <img src={backgroundNire} alt="" />
          </picture>
        </Link>
        <section className="description-box">
          <h3>Ñire Panaderia</h3>
          <h4>Bakery Web Page</h4>
          <p className="text-box">
            Lorem100 Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Quisquam perspiciatis non porro earum nam ipsam voluptate corporis
            doloribus ab nesciunt laudantium est ducimus quod quae dolorum
            ratione magnam, aliquam sint molestiae vel eos. Officia non
            doloremque dolore laudantium sint voluptatem delectus magni,
            perferendis reiciendis ab ex? Porro magni iste doloremque alias.
          </p>
          <ul>
            <li>CSS3</li>
            <li>HTML 5</li>
            <li>BOOTSTRAP</li>
            <li>JAVASCRIPT</li>
            <li>REACT JS</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
