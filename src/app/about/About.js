import React from "react";
import NavBar from "../components/NavBar";

const About = () => (
  <div>
    <NavBar active="about" fixed={true} />
    <div style={{ paddingTop: "5em" }}>
      {"About Me"}
    </div>
  </div>
);

export default About;