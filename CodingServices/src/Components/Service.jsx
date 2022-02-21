import React from "react";
import Card from "./Card";
import Hero from "./Hero";
import AppDev from "../Images/app.jpg";
import WebDev from "../Images/website.jpeg";
import SEO from "../Images/seo.jpeg";
import DigitalDev from "../Images/digitalMarket.jpeg";
import EmailDev from "../Images/emailMarket.jpeg";
import TechDev from "../Images/techConsulting.jpeg";

const Service = () => {
  const Text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere suscipit corporis voluptatem debitis praesentium eum quaerat unde, quia architecto quae officia fugit magnam est totam ad illum asperiores incidunt nam eligendi dolores error quisquam. Minus iure sed explicabo, repellat repellendus voluptate, impedit, maxime corrupti at quidem nisi sint omnis tempora?";
  return (
    <>
    <Hero hero_text="One stop destination for all your digital needs"/>
    <div className="container">
    <div className="container-fluid">
      <div className="row mt-5">
        <div className="col-md-10 mx-auto">
          <div className="row mt-3 m-auto">
            <Card text={Text} imgsrc={AppDev} cardName="App Development" />
            <Card text={Text} imgsrc={WebDev} cardName="Website Development" />
            <Card text={Text} imgsrc={SEO} cardName="SEO" />
          <div className="row mt-3 m-auto ">
            <Card text={Text} imgsrc={DigitalDev} cardName="Digital Marketing" />
            <Card text={Text} imgsrc={EmailDev} cardName="Email Marketing" />
            <Card text={Text} imgsrc={TechDev} cardName="Technical Consulting" />
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </>
  );
};

export default Service;
