import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Home from "../pages/Home";

const Intro = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [showHome, setShowHome] = useState(false);

  useEffect(() => {
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
  );
};

export default Intro;
