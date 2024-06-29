import React from "react";
import "./contact.css"

const Contact = () => {
    return (
        <div id="contact">

<footer className="footer text-white text-center" style={{ backgroundColor: 'black' }}>

      <div className="container">
        <div className="d-flex justify-content-center h1 mt-2 mb-5 text-white">SiBot</div>
        <div className="row">
          <div className="col-md-4">
            <p>info@mysite.com</p>
          </div>
          <div className="col-md-4">
            <p>HPC lab SEECS Nust Islamabad</p>
          </div>
          <div className="col-md-4">
            <p>123-456-7890</p>
          </div>
        </div>
         <div className="row subscribe-section">
          <div className="col-12">
            <div className="subscribe-container">
              <h4>Stay Updated</h4>
              <h5>Subscribe</h5>
              <form className="form-inline justify-content-center">
                <div className="form-group mb-2 d-flex justify-content-center">
                  <input type="email" className="form-control text-white mx-auto" placeholder="Your Email *" required />
                </div>
                <button type="submit" className="btn btn-light mb-2 mt-2" >Join</button>
              </form>
              <p>Thank You for Subscribing!</p>
            </div>
          </div>
        </div>
        <div className="mt-3 text-secondary">
        <small>All rights reserved ©</small>
        </div>
      </div>
 
    </footer>
        </div>)
}

export default Contact