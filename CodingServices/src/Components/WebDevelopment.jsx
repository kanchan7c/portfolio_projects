import React from "react";
import Hero from "./Hero";
import ServicesCards from "./ServicesCards";
import AI from "../Images/artificial-intelligence.svg";
import chattApp from "../Images/chatting-using-apps.svg";
import onlinePay from "../Images/online-payment.svg";
import stockMarket from "../Images/stock-market.svg";


const WebDevelopment = () => {

    return (
        <>
        <Hero hero_text="Chatting Apps, Building Website, Artificial Intelligence coming to you"/> 
        <div className="container">
        <div className="container-fluid">
            <div className="row mt-5">
                <div className="col-lg-10 mx-auto"></div>
                <div className="row mb-5">
                    <ServicesCards servicesHeadingText="Artificial Intelligence"/>
                    <div className="col-md-5 mx-auto mb-5">
                        <img className="animated app-service__Image rounded" src={AI} alt="..." />
                    </div>
                </div>
                <div className="row mb-5">
                     <div className="col-md-5 mx-auto mb-5">
                         <img className="animated app-service__Image rounded" src={chattApp} alt="..." />
                     </div>
                     <ServicesCards servicesHeadingText="Chat Web Application"/>
                </div>
                <div className="row mb-5">
                    <ServicesCards servicesHeadingText="Online Payment Services"/>
                    <div className="col-md-5 mx-auto mb-5">
                        <img className="animated app-service__Image rounded" src={onlinePay} alt="..." />
                    </div>
                </div>
                <div className="row mb-5">
                     <div className="col-md-5 mx-auto mb-5">
                         <img className="animated app-service__Image rounded" src={stockMarket} alt="..." />
                     </div>
                     <ServicesCards servicesHeadingText="Stock Market Web App"/>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default WebDevelopment;