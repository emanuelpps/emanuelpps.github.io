import React, { useEffect } from "react";
import "./Certifications.css";
import { MdWorkspacePremium } from "react-icons/md";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";

export default function Certifications() {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0,
        },
      });
    }
    if (!inView) {
      animation.start({ x: "100vw" });
    }

    console.log("this is in view", inView);
  }, [animation, inView]);
  return (
    <div ref={ref} className="backgroundCert">
      <motion.div animate={animation} className="certifications">
        <div className="certifications-title">
          <h3 className="certTitle">Certifications</h3>
        </div>
        <div className="certification-icon">
          <p className="process-text">In process...</p>
          <div className="certIcons">
            <Link
              className="icon-certifications-link"
              to={
                "https://hubspot-credentials-na1.s3.amazonaws.com/prod/certificates/user/2c93f0ee24834947a653a6cf17441474.png?onAchievementsPage=true"
              }
              target="_blank"
            >
              <MdWorkspacePremium className="icon-premium" />
              <h6>Inbound</h6>
              <h6>Marketing</h6>
            </Link>
            <Link
              className="icon-certifications-link"
              to={
                "https://hubspot-credentials-na1.s3.amazonaws.com/prod/certificates/user/4af797c866ee4dc180d572e841464707.png?onAchievementsPage=true"
              }
              target="_blank"
            >
              <MdWorkspacePremium className="icon-premium" />
              <h6>Content</h6>
              <h6>Marketing</h6>
            </Link>
            <Link
              className="icon-certifications-link"
              to={
                "https://www.coderhouse.com/certificados/61f345a3bf04c00067a74896"
              }
              target="_blank"
            >
              <MdWorkspacePremium className="icon-premium" />
              <h6>SEO</h6>
              <h6>Certified</h6>
            </Link>
            <Link
              className="icon-certifications-link"
              to={
                "https://www.coderhouse.com/certificados/6269ca4b7bbb910019ac1571"
              }
              target="_blank"
            >
              <MdWorkspacePremium className="icon-premium" />
              <h6>Web</h6>
              <h6>Developer</h6>
            </Link>
            <Link
              className="icon-certifications-link"
              to={
                "https://www.coderhouse.com/certificados/62c2f158d767af0024ebc245"
              }
              target="_blank"
            >
              <MdWorkspacePremium className="icon-premium" />
              <h6>Javascript</h6>
              <h6>Certified</h6>
            </Link>
            <Link
              className="icon-certifications-link"
              to={
                "https://www.coderhouse.com/certificados/6311729efaed7b001abec001"
              }
              target="_blank"
            >
              <MdWorkspacePremium className="icon-premium" />
              <h6>React Js</h6>
              <h6>Certified</h6>
            </Link>
            <Link
              className="icon-certifications-link"
              to={
                "https://www.coderhouse.com/certificados/646568a46cca8f00022c577f"
              }
              target="_blank"
            >
              <MdWorkspacePremium className="icon-premium" />
              <h6>Back End</h6>
              <h6>Developer</h6>
            </Link>
            <Link
              className="icon-certifications-link"
              to={"https://i.ibb.co/qnjVPB8/Certificado-Metodolog-as-giles.jpg"}
              target="_blank"
            >
              <MdWorkspacePremium className="icon-premium" />
              <h6>Agile</h6>
              <h6>methodology</h6>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
