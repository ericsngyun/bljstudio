import React, { useEffect } from "react";
import gsap from "gsap";
import Home from "./Home";
import '../index.css'

const IntroScreen = () => {
  useEffect(() => {
    gsap.from(".letter", 0.8, {
      y: -20,
      opacity: 0,
      ease: "power3.inOut",
      stagger: 0.1,
    });
    gsap.to(".top-left, .top-right", 2, {
      top: "0",
      ease: "power3.inOut",
      delay: 2,
    });
    gsap.to(".bottom-right, .top-right", 2, {
      bottom: "0",
      ease: "power3.inOut",
      delay: 2,
    });
    gsap.to(".top-left", 2, {
      left: "0",
      ease: "power3.inOut",
      delay: 4,
    });
    gsap.to(".top-right", 2, {
      right: "0",
      ease: "power3.inOut",
      delay: 4,
    });
    gsap.to(".bottom-right", 2, {
      right: "0",
      ease: "power3.inOut",
      delay: 4,
    });
    gsap.to(".block-left", 2, {
      left: "-50%",
      ease: "power3.inOut",
      delay: 4,
    });
    gsap.to(".block-right", 2, {
      right: "-50%",
      ease: "power3.inOut",
      delay: 4,
    });
  }, []);

  return (
    <div className="container">
      <Home/>
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
