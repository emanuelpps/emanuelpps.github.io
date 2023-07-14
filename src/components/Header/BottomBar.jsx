import React from "react";
import "./Header.css";
import {
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandJavascript,
  TbBrandSass,
  TbBrandBootstrap,
  TbBrandReact,
  TbBrandGit,
  TbBrandFirebase,
  TbBrandFramer,
  TbBrandMongodb,
  TbBrandWordpress,
} from "react-icons/tb";
import { IoLogoNodejs } from "react-icons/io5";

export default function BottomBar() {
  return (
    <div className="bottom-bar">
      <div className="bar">
        <TbBrandHtml5
          style={{ color: "white", fontSize: "30px" }}
          title="HTML 5"
        />
        <TbBrandCss3
          style={{ color: "white", fontSize: "30px" }}
          title="CSS 3"
        />
        <TbBrandSass
          style={{ color: "white", fontSize: "30px" }}
          title="Sass"
        />
        <TbBrandBootstrap
          style={{ color: "white", fontSize: "30px" }}
          title="Bootstrap"
        />
        <TbBrandJavascript
          style={{ color: "white", fontSize: "30px" }}
          title="Javascript"
        />
        <TbBrandReact
          style={{ color: "white", fontSize: "30px" }}
          title="React Js"
        />
        <TbBrandGit style={{ color: "white", fontSize: "30px" }} title="GIT" />
        <TbBrandFirebase
          style={{ color: "white", fontSize: "30px" }}
          title="Firebase"
        />
        <TbBrandFramer
          style={{ color: "white", fontSize: "30px" }}
          title="Framer Motion"
        />
        <IoLogoNodejs
          style={{ color: "white", fontSize: "30px" }}
          title="Node Js"
        />
        <TbBrandMongodb
          style={{ color: "white", fontSize: "30px" }}
          title="Mongo DB"
        />
        <TbBrandWordpress
          style={{ color: "white", fontSize: "30px" }}
          title="Wordpress"
        />
      </div>
    </div>
  );
}
