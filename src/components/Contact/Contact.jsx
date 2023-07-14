import React, { useEffect, useState } from "react";
import "./Contact.css";
import Form from "react-bootstrap/Form";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { Popover } from "react-tiny-popover";

export default function Contact() {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  const animationTwo = useAnimation();

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const getMailCopy = () => {
    navigator.clipboard.writeText("emanuelpages.ps@gmail.com");
    setIsPopoverOpen(!isPopoverOpen);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsPopoverOpen(false);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [isPopoverOpen]);

  const email = "emanuelpages.ps@gmail.com";

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
      animationTwo.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0,
        },
      });
    }
    if (!inView) {
      animation.start({ x: "-100vw" });
      animationTwo.start({ x: "100vw" });
    }

    console.log("this is in view", inView);
  }, [animation, inView]);

  const MySwal = withReactContent(Swal);

  function sendEmail(e) {
    e.preventDefault();
    let timerInterval;
    Swal.fire({
      title: "Sending your message",
      html: "I will close in <b></b> milliseconds.",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
    emailjs
      .sendForm("service_emp", "portfolio_email", e.target, "uBhxJI1BTUqpbQxF-")
      .then((res) => {
        MySwal.fire("¡Thank You!", " Your message has been sent", "success");
        e.target.reset();
      });
  }
  return (
    <div id="contactId" className="contact">
      <div className="contact-title">
        <h3>Contact</h3>
      </div>
      <div ref={ref} className="form-contact">
        <motion.div animate={animation} className="form">
          <form className="form-data" onSubmit={sendEmail}>
            <Form.Group className="mb-5" controlId="exampleForm.ControlInput1">
              <Form.Label
                for="from_name"
                className="text-input"
                name="from_name"
                id="from_name"
                required
              >
                Name
              </Form.Label>
              <Form.Control type="email" placeholder="name" />
            </Form.Group>
            <Form.Group className="mb-5" controlId="exampleForm.ControlInput1">
              <Form.Label
                type="email"
                name="reply_to"
                id="reply_to"
                className="text-input"
                for="reply_to"
                required
              >
                Email address
              </Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group
              className="mb-5"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label
                for="message"
                className="text-input"
                name="message"
                id="message"
              >
                Message
              </Form.Label>
              <Form.Control as="textarea" rows={6} />
            </Form.Group>
            <button class="btn btn-outline-light" type="submit">
              Send
            </button>
          </form>
        </motion.div>
        <motion.div animate={animationTwo} className="info">
          <ul className="info-data">
            <Link
              className="text-link"
              to={"https://www.linkedin.com/in/emanuel-ps"}
            >
              <button>
                <div className="icon-contact">
                  <FaLinkedinIn />
                </div>
                Linkedin
              </button>
            </Link>
            <Link className="text-link" to={"https://github.com/emanuelpps"}>
              <button>
                <div className="icon-contact">
                  <FaGithub />
                </div>
                Github
              </button>
            </Link>
            <Popover
              isOpen={isPopoverOpen}
              positions={["bottom"]}
              content={<div className="popover text-center">Mail Copiado!</div>}
            >
              <button id="Mail" onClick={() => getMailCopy()}>
                <div className="icon-contact">
                  <AiOutlineMail />
                </div>
                emanuelpages.ps@gmail.com
              </button>
            </Popover>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
