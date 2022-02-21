import React from "react";

const Hero = (props) => {
    return (
      
    <div className="container-fluid">
      <div className="row mt-2">
        <div className="col-md-10 mx-auto pd-5 hero-Background_Image d-lg-flex justify-content-center rounded">
         <h2 className="text-white text-center mt-5 heroAnimation">{props.hero_text}</h2>
      </div>
    </div>
    </div>
      
    )
}

export default Hero;
