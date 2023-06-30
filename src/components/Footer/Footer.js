import React from "react";
import "./Footer.css";
import { HashLink } from "react-router-hash-link";

export default function Footer() {
  return (
    <footer>
      <ul class="pt-3 pb-4">
        <li class="nav-item">
          <HashLink to="#AboutMe" class="nav-link px-2 text-white">
            About Me
          </HashLink>
        </li>
        <li class="nav-item">
          <HashLink to="#Skills" class="nav-link px-2 text-white">
            Skills
          </HashLink>
        </li>
        <li class="nav-item">
          <HashLink to="#Portfolio" class="nav-link px-2 text-white">
            Portfolio
          </HashLink>
        </li>
        <li class="nav-item">
          <HashLink to="#ContactMe" class="nav-link px-2 text-white">
            Contact
          </HashLink>
        </li>
      </ul>
      <p class="footer-text">© 2023 Emanuel Pagés</p>
    </footer>
  );
}
