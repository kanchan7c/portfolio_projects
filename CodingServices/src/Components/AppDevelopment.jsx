import React from "react";
import Hero from "./Hero";
import ServicesCards from "./ServicesCards";
import andriod from "../Images/android.jpg";
import iOS from "../Images/iOS.jpg";

const AppDevelopment = () => {

    return (
        <>
        <Hero hero_text="World is coming together with mobile apps"/>
        <div className="container">
        <div className="container-fluid">
            <div className="row mt-5">
                <div className="col-md-10 mx-auto"></div>
                <div className="row mb-5">
                    <ServicesCards servicesHeadingText="Android App Development"/>
                    <div className="col-md-5 mx-auto">
                        <img className="animated2 app-service__Image rounded" src={andriod} alt="..." />
                    </div>
                </div>
                <div className="row mb-5">
                     <div className="col-md-5 mx-auto order-1 order-lg-2">
                         <img className="animated2 app-service__Image rounded" src={iOS} alt="..." />
                     </div>
                     <ServicesCards servicesHeadingText="iOS App Development"/>
                </div>
            </div>
        </div>
        </div>
         </>
    )
}

export default AppDevelopment;