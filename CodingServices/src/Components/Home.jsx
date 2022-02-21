import React from "react";
import Common from "./Common";
import web from "../Images/blogging.svg";

const Home = () => {
  return (
  <>
  <div className="container">
  <Common subtext="People don’t just stumble into our office. It is through a conscious, concerted effort to find the best team. As promised, we’re the most professional website designing company."  text2="Meet" buttonName="Get Started" text1="Make your business shine on the web with" visit="/Service" imgsrc={web} />
  </div>
  </>
  );
};

export default Home;