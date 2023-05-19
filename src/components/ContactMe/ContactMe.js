import React from "react";
import "./ContactMe.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Link } from "react-router-dom";

export default function ContactMe() {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  const email = 'emanuelpages.ps@gmail.com'

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
      <motion.div
        animate={animation}
        className="container contactMe "
      >
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
          <button className="button-form" type="submit">
            Send
          </button>
        </form>
        <div className="list-group justify-content-center div-button">
        <Link
            className="button-container-social"
            to={"https://github.com/emanuelpps"}
            target="_blank"
          >
          <button
            type="button"
            className="btn-contact bg-transparent list-group-item-action"
          >
            <svg
              className="ContactME-Icons"
              xmlns="http://www.w3.org/2000/svg"
              color="black"
              fill="white"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
            </svg>
            Github
          </button>
          </Link>
          <Link
            className="button-container-social"
            to={"https://www.linkedin.com/in/emanuel-ps"}
            target="_blank"
          >
          <button
            type="button"
            className="btn-contact bg-transparent list-group-item-action mt-1"
          >
            <svg
              className="ContactME-Icons"
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            Linkedin
          </button>
          </Link>
          <Link to={`mailto:${email}`}>
          <button
            type="button"
            className="btn-contact bg-transparent list-group-item-action px-1"
          >
            <svg
              className="ContactME-Icons-mail"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="3 0 52 50"
            >
              <path d="M 14 4 C 8.4886661 4 4 8.4886661 4 14 L 4 36 C 4 41.511334 8.4886661 46 14 46 L 36 46 C 41.511334 46 46 41.511334 46 36 L 46 14 C 46 8.4886661 41.511334 4 36 4 L 14 4 z M 13 16 L 37 16 C 37.18 16 37.349766 16.020312 37.509766 16.070312 L 27.679688 25.890625 C 26.199688 27.370625 23.790547 27.370625 22.310547 25.890625 L 12.490234 16.070312 C 12.650234 16.020312 12.82 16 13 16 z M 11.070312 17.490234 L 18.589844 25 L 11.070312 32.509766 C 11.020312 32.349766 11 32.18 11 32 L 11 18 C 11 17.82 11.020312 17.650234 11.070312 17.490234 z M 38.929688 17.490234 C 38.979688 17.650234 39 17.82 39 18 L 39 32 C 39 32.18 38.979687 32.349766 38.929688 32.509766 L 31.400391 25 L 38.929688 17.490234 z M 20 26.410156 L 20.890625 27.310547 C 22.020625 28.440547 23.510234 29 24.990234 29 C 26.480234 29 27.959844 28.440547 29.089844 27.310547 L 29.990234 26.410156 L 37.509766 33.929688 C 37.349766 33.979688 37.18 34 37 34 L 13 34 C 12.82 34 12.650234 33.979687 12.490234 33.929688 L 20 26.410156z" />
            </svg>
            emanuelpages.ps@gmail.com
          </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
