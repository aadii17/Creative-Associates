import React, { useContext, useEffect, useState } from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import {
  yPosContext,
  hamburgerContext,
  portfolioContext,
  carouselContext,
} from "../context/global-state";
import AOS from "aos";

import "aos/dist/aos.css";
import "../styles/home.css";
import { useRef } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

import Carousel from "../components/Carousel";
import Loading from "./Loading";
import { type } from "@testing-library/user-event/dist/type";

import Counter from "../components/Counter";
import Us from "../components/Us";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Partners from "../components/Partners";
import axios from "axios";
import Conseltency from "../components/Conseltency";

function Home() {
  const { yPos, setYPos } = useContext(yPosContext);
  const { portfolioData, setPortfolioData } = useContext(portfolioContext);
  const { carouselData, setCarouselData } = useContext(carouselContext);
  const [identity, setIdentity] = useState({});
  const [isLoading, setLoading] = useState(true);

  const handleScroll = () => setYPos(window.pageYOffset);

  fetch("identity.json")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      setIdentity(data);
    })
    .catch(function (err) {
      console.log(err, " error");
    });

  useEffect(() => {
    document.title = "Home - Interior Design Portofolio";
    AOS.init();
    if (typeof portfolioData !== "undefined") {
      setLoading(false);
    } else {
      setLoading(true);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (typeof identity.identity != "undefined") {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [identity]);

  //email

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_d6ojpcv",
      "template_963fhmt",
      form.current,
      "fONWMv31SoY6Z-j3o"
    );
    e.target.reset();
    Swal.fire("Mail Sent Succesfully");
  };

  //email end

  if (isLoading) return <Loading></Loading>;

  return (
    <div className="home-parent">
      <div className="hero">
        <div className="bg-image">
          <img src="./project/hero-banner.jpg" alt="hero"></img>
        </div>
        <div className="hero-content">
          <h1 style={{ transform: `translateX(-${yPos * 0.5}px)` }}>
            Designed with passion
          </h1>
          <p style={{ transform: `translateX(-${yPos * 0.3}px)` }}>
            Bring home beautiful interiors that fit your budget.{" "}
          </p>
          <div
            className="button-parent"
            style={{ transform: `translateX(-${yPos * 1}px)` }}
          >
            <div className="button">
              <div className="box"></div>
              <h3>
                <a href="/portofolio">Our Works</a>
              </h3>
            </div>
            <div className="button">
              <div className="box"></div>
              <h3>
                <a href="#contact">Contact Us</a>
              </h3>
            </div>
          </div>
        </div>
        <div
          className="social-media"
          style={{ opacity: `${1 - yPos * 0.0015}` }}
        >
          <a href={identity.identity[0].link}>
            <FaInstagram className="icon"></FaInstagram>
          </a>
          <a href={identity.identity[1].link}>
            <FaWhatsapp className="icon"></FaWhatsapp>
          </a>
        </div>
      </div>
      <div className="works">
        <div className="works-title">
          <h2 data-aos="fade-down">Our Works</h2>
        </div>
        <div className="carousel-parent">
          <Carousel></Carousel>
        </div>
        <div className="see-more">
          <h3 data-aos="fade-right">Want to see more ?</h3>
          <h3 data-aos="fade-left" className="btn-black">
            <a href="/portofolio">Other Works</a>
          </h3>
        </div>
      </div>
      <div className="contact-parent" id="contact">
        <div className="contact-content left-side">
          <h2 data-aos="fade-right">CONTACT US</h2>
          <p data-aos="fade-right">
            "Connect with us effortlessly! Your inquiries matter, and we're here
            to assist. Fill out the form below, and let's start a conversation
            that makes a difference."
          </p>
          <p data-aos="fade-right">Get in touch with us.</p>
          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <input
              data-aos="fade-right"
              type="text"
              placeholder="NAME"
              name="name"
              id="name"
              required
            ></input>
            <input
              data-aos="fade-right"
              type="email"
              placeholder="EMAIL"
              name="email"
              id="email"
              required
            ></input>
            <input
              data-aos="fade-right"
              type="number"
              placeholder="PHONE NUMBER"
              name="phone"
              id="phone"
              required
            ></input>
            <input
              data-aos="fade-right"
              type="text"
              placeholder="MESSAGE"
              className="message"
              name="message"
              id="message"
              required
            ></input>
            <button className="btn-white">
              <h3 data-aos="fade-up">SUBMIT</h3>
            </button>
          </form>
        </div>
        <div className="contact-content right-side" data-aos="fade-left">
          <h2>Phone Number</h2>
          <p>+91 70583 65559</p>
          <h2>Email</h2>
          <p>creativeassociatesofficial@gmail.com</p>
        </div>
      </div>
      <div className="vision-parent">
        <div className="vision-content">
          <img
            src="./project/hero-banner.jpg"
            className="vision-img"
            alt=""
          ></img>
          <div className="vision">
            <h2 data-aos="fade-down">We are Creative Associates </h2>
            <p data-aos="fade-down">
              Welcome to Creative Associates, where design meets innovation to
              transform spaces into living works of art. As passionate interior
              designers, we bring a unique blend of creativity, functionality,
              and attention to detail to every project. Our portfolio is a
              testament to the diverse range of styles and aesthetics we've
              curated, reflecting our commitment to crafting spaces that
              resonate with individual tastes and lifestyles. At Creative
              Associates, we believe in the power of design to inspire and
              elevate, and we invite you to explore our portfolio to witness the
              seamless fusion of form and function. Whether you're seeking a
              modern, minimalist retreat or a vibrant, eclectic space, we're
              here to turn your vision into a stunning reality. Discover the
              artistry of interior design with Creative Associates – where
              imagination knows no bounds.
              <br />
              <br />
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>
      <Counter />
      <Services />
      <Partners />
      <Us />
      <Conseltency />
      <Footer />
    </div>
  );
}

export default Home;
