import React from "react";
import "./Header.css";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";

export default function Header() {
  return (
    <div className="header-box">
        
        <div className="grid-title-and-buttons ">
          <section className="section-titles">
            <h1>
              <motion.div
                initial={{ x: -800 }}
                animate={{ x: 0 }}
                transition={{ ease: "easeOut", duration: 2 }}
                data-tooltip="Size: 20Mb"
              >
                Hi,
                <br />
              </motion.div>
              <motion.div
                initial={{ x: -1200 }}
                animate={{ x: 0 }}
                transition={{ ease: "easeOut", duration: 2 }}
                data-tooltip="Size: 20Mb"
              >
                I'm <span>E</span>manuel,
                <br />
              </motion.div>
              <motion.div
                initial={{ x: -1900 }}
                animate={{ x: 0 }}
                transition={{ ease: "easeOut", duration: 2 }}
                data-tooltip="Size: 20Mb"
              >
                Front-End Develo<span>p</span>er
                <br />
              </motion.div>
            </h1>
          </section>
          <section animate="hidden" className="button-section">
            <div class="button">
              <HashLink
                smooth
                to="/#ContactMe"
                class="button-wrapper-contact-me"
              >
                <div class="text">Contact</div>
              </HashLink>
            </div>
            <div class="button">
              <HashLink smooth to="#AboutMe" class="button-wrapper-about-me">
                <div class="text">More About Me</div>
              </HashLink>
            </div>
          </section>
        </div>
        <div className="grid-drop-down-img d-flex justify-content-center">
          <HashLink smooth to="#AboutMe">
            <motion.svg
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 10 }}
              class="arrows"
            >
              <path class="a1" d="M0 0 L30 32 L60 0"></path>
              <path class="a2" d="M0 20 L30 52 L60 20"></path>
              <path class="a3" d="M0 40 L30 72 L60 40"></path>
            </motion.svg>
          </HashLink>
        </div>
      </div>
  );
}
