import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
  <>
  <section id="header" className="d-flex align-item-center mb-5 ">
  <div className="container-fluid">
      <div className="row d-flex align-item-center">
        <div className="col-md-10 mx-auto">
          <div className="row mb-3">
            <div className="col-md-6 pt-5 mt-md-5 pt-lg-0 order-2 pe-3 order-lg-1">
              <h1 className="text-center fs-1 mt-5 mb-4">{props.text1} <strong className="brand-name">Coding Services</strong></h1>
              <h2 className="brand-tagline__subtext mb-3 p-2 fs-5 text-body lead mt-3">{props.subtext}
              <p className="mt-3"><strong>{props.text2} our Web Developers</strong></p>
              </h2>
              <div className="mt-5">
                <NavLink to={props.visit} className="btn btn-outline-success rounded-pill px-3 py-2 ms-2 mt-3 text-decoration-none fw-bold fs-6 rounded">{props.buttonName}</NavLink>
              </div>
            </div>
            <div className="col-md-6 order-1 order-lg-2 mt-md-5 pt-5 pt-lg-0 header-img ">
              <img src={props.imgsrc} className="img-fluid animated mt-2 ps-3 mb-3" alt="Home" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  </>
  );
};

export default Common;
