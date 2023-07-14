import React, { useEffect } from "react";
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

export default function Contact() {
  
  const { ref, inView } = useInView();
  const animation = useAnimation();
  const animationTwo = useAnimation();
  const email = "emanuelpages.ps@gmail.com";

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0
        },
      });
      animationTwo.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0
        },        
      })
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
          <form className="form-data"  onSubmit={sendEmail}>
            <Form.Group className="mb-5" controlId="exampleForm.ControlInput1">
              <Form.Label for="from_name" className="text-input" name="from_name"
              id="from_name"
              required>Name</Form.Label>
              <Form.Control type="email" placeholder="name" />
            </Form.Group>
            <Form.Group className="mb-5" controlId="exampleForm.ControlInput1">
              <Form.Label type="email" name="reply_to"
              id="reply_to" className="text-input" for="reply_to" 
              required >Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group
              className="mb-5"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label for="message" className="text-input" name="message"
              id="message">Message</Form.Label>
              <Form.Control as="textarea" rows={6} />
            </Form.Group>
            <button class="btn btn-outline-light" type="submit">
                Send
            </button>
          </form>
        </motion.div>
        <motion.div animate={animationTwo} className="info">
          <ul className="info-data">
            <Link className="text-link">
              <button>
                <div className="icon-contact">
                  <FaLinkedinIn />
                </div>
                Linkedin
              </button>
            </Link>
            <Link className="text-link">
            <button>
              <div className="icon-contact">
                <FaGithub />
              </div>
              Github
            </button>
            </Link>
            <Link className="text-link">
            <button>
              <div className="icon-contact">
                <AiOutlineMail />
              </div>
              emanuelpages.ps@gmail.com
            </button>
            </Link>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
