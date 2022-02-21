import React from "react";
import Hero from "./Hero";

const Contact = () => {
  return (
    <>
    <Hero hero_text= "Give us a call anytime" />
    <div className="container">
    <div className="container-fluid mx-auto">
      <div className="row mt-2 ">
        <div className="col-lg-10 mx-auto">
        <div className="row my-5">
          <div className="col-lg-5">
            <h3>Coding Services Web</h3>
            <h4 className="text-muted">POP HOME 83171 Pareena Laxmi Apartment</h4>
            <p className="lead">Dwarka Expy, Sector 99A, Gurugram, Haryana 122505</p>
            <p><i class="bi bi-telephone fs-5 me-2"></i>0124-782 2942</p>
            <p><i class="bi bi-envelope fs-5 me-2"></i>abc@codingservices.com</p>
            <p><input type="text" placeholder="Full Name" className="form-text form-control" /></p>
            <p><input type="email" placeholder="Enter your email"  className="form-text form-control"/></p>
            <p><textarea name="message" id="" cols="30" rows="10" placeholder="Enter your enquiry" className="form-control"></textarea></p>
            <button type="button" className="btn btn-outline-success rounded px-3 py-2 ms-2 mt-3 my-5 fw-bold fs-6">Send <i class="bi bi-caret-right"></i></button>
          </div>
          <div className="mx-auto col-lg-5 ">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.779853090222!2d76.94743061506556!3d28.45605198248779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1659096f5aa7%3A0x672646cd8416a298!2sPOP%20HOME%2083171%20Pareena%20Laxmi%20Apartment!5e0!3m2!1sen!2sin!4v1634298050840!5m2!1sen!2sin" width="500" height="700" title="Address"  loading="lazy" className="rounded"></iframe>
          </div>
        </div>
        </div>
      </div>
    </div>
    </div>
    </>
    );
};

export default Contact;
