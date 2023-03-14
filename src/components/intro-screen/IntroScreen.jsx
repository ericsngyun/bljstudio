<<<<<<< HEAD:src/components/intro-screen/IntroScreen.jsx
import React, { useEffect } from "react";
import { gsap } from "gsap";
import Home from "../Home";
import './intro.css'
=======
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Home from "../pages/Home";

const Intro = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [showHome, setShowHome] = useState(false);
>>>>>>> 6bf0b53a934f5636eeba25c9eb65afbcfc43218c:src/components/IntroScreen.jsx

  useEffect(() => {
<<<<<<< HEAD:src/components/intro-screen/IntroScreen.jsx
    const tl = gsap.timeline(

    );

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
=======
    // fade out intro screen and fade in home page after 3 seconds
    setTimeout(() => {
      setShowIntro(false);
      setShowHome(true);
    }, 3000);
  }, []);

  return (
    <>
      {showIntro && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "#18181c",
          }}
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className = "text-8xl text-[#fff]">ERIC YUN</h1>
          </motion.h1>
        </motion.div>
      )}
      {showHome && <Home />}
    </>
>>>>>>> 6bf0b53a934f5636eeba25c9eb65afbcfc43218c:src/components/IntroScreen.jsx
  );
};

export default Intro;
