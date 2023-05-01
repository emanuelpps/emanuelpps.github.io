import React from "react";
import "./Header.css";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";

export default function Header() {
  return (
    <div className="header-box">
        
        <div className="grid-title-and-buttons">
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
                <div class="text">Contact Me</div>
                <span class="icon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H6c-1.103 0-2 .897-2 2v5h2V8l6.4 4.8a1.001 1.001 0 0 0 1.2 0L20 8v9h-8v2h8c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-7 6.75L6.666 6h12.668L13 10.75z"></path>
                    <path d="M2 12h7v2H2zm2 3h6v2H4zm3 3h4v2H7z"></path>
                  </svg>
                </span>
              </HashLink>
            </div>
            <div class="button">
              <HashLink smooth to="#AboutMe" class="button-wrapper-about-me">
                <div class="text">More About Me</div>
                <span class="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="#DCD7C9"
                    class="bi bi-plus-square"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                  </svg>
                </span>
              </HashLink>
            </div>
          </section>
        </div>
        <div className="grid-drop-down-img">
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
