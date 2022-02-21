import React from "react";
import Common from "./Common";
import aboutImage from "../Images/web_development.svg"
const About = () => {
  return (
    <>
    <div className="container">
    <Common subtext="We believe that the design process must always consider how people use things in real life and lead to solutions that are clear, honest, and genuinely useful. minima expedita fugit delectus esse, odio, quas possimus tempore quo, praesentium odit suscipit? Exercitationem natus itaque quod nulla assumenda."  text2="Contact" buttonName="Contact Us" text1="Make your website easy on the eyes with" visit="/Contact" imgsrc={aboutImage}/>
    </div>
    </>
    );
};

export default About;
