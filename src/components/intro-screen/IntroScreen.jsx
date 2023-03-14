import React, { useEffect } from "react";
import { gsap } from "gsap";
import Home from "../Home";
import './intro.css'

const IntroScreen = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(".letter", {
      y: -20,
      opacity: 0,
      ease: "power3.inOut",
      stagger: 0.1,
    })
      .to(".top-left, .top-right", {
        top: "0",
        ease: "power3.inOut",
      })
      .to(".bottom-right, .top-right", {
        bottom: "0",
        ease: "power3.inOut",
      }, "<")
      .to(".top-left", {
        left: "0",
        ease: "power3.inOut",
      }, "<")
      .to(".top-right", {
        right: "0",
        ease: "power3.inOut",
      }, "<")
      .to(".bottom-right", {
        right: "0",
        ease: "power3.inOut",
      }, "<")
      .to(".block-left", {
        left: "-50%",
        ease: "power3.inOut",
      }, "<")
      .to(".block-right", {
        right: "-50%",
        ease: "power3.inOut",
      }, "<");
  }, []);

  return (
    <div className="container">
      <Home />
      <div className="wrapper">
        <div className="copy">
          <p>
            LA 09123, <br /> TYO 2398
          </p>
          <p>thinking about the future</p>
          <p>
            enter <br />
            terminal&reg;
          </p>
          <p></p>
        </div>
      </div>
      <div className="blocks">
        <div className="block block-left"></div>
        <div className="block block-right"></div>
      </div>
      <div className="letters">
        <div className="row">
          <div className="letter top-left">T</div>
          <div className="letter top-right">2</div>
        </div>
        <div className="row">
          <div className="letter bottom-right">7</div>
        </div>
      </div>
    </div>
  );
};

export default IntroScreen;
