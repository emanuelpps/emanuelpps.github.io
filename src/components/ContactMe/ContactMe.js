import React from "react";
import "./ContactMe.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
//import { SMTPClient } from "emailjs";

export default function ContactMe() {
  const { ref, inView } = useInView();
  const animation = useAnimation();

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
    <div id="ContactMe" ref={ref} className="ContactMe-box pt-5">
      <motion.div animate={animation} className="container">
        <form className="Myform" onSubmit={sendEmail}>
          <h2 className="text-center mb-5 mt-5">Contact Me</h2>
          <div class="form-group">
            <label for="from_name">Name</label>
            <input
              type="text"
              class="form-control mb-4"
              name="from_name"
              id="from_name"
              required
            />
          </div>
          <div class="form-group">
            <label for="reply_to">Email</label>
            <input
              type="email"
              class="form-control mb-4"
              name="reply_to"
              id="reply_to"
              required
            />
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea
              class="form-control mb-4"
              name="message"
              id="message"
              rows="6"
              required
            ></textarea>
          </div>
          <button class="button-form" type="submit">
            Send
          </button>
        </form>
      </motion.div>
    </div>
  );
}
