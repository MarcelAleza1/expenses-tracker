import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          // "Developer",
          // "Deep Learning Engineer",
          // "MERN Stack Developer",
          // "Data Analyst",
          // "Open Source Contributor",
          "Full Stack Developer",
          "Machine Learning Engineer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
