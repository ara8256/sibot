import React from "react";
import TeamDetail from "./members";

const Goals = () => {
  return (
    <div className="container-fluid" id = "goals"  style={{ backgroundColor: 'black', paddingTop: '6vh',paddingBottom : "6vh" }}>
      <h2 className="mb-4 text-white text-center" style={{ fontFamily: '"Playwrite ES Deco", cursive', paddinftop: "2vh" }}>Why Choose SiBot?</h2>
      <div className="row text-center mt-5 mb-5" style={ { paddingTop:"5vh"}}>
        <div className="col-md-4 col-sm-12">
          <div className="mb-3">
            <h5 className="fw-bold text-white">Enhanced Customer Support Efficiency</h5>
            <p className="text-white">
              SiBot's AI-powered chatbots can handle a high volume of customers quickly, significantly reducing wait times and improving overall customer satisfaction.
            </p>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">      
          <div className="mb-3">
            <h5 className="fw-bold text-white">Cost Reduction</h5>
            <p className="text-white">
              By automating routine customer service tasks, SiBot helps businesses reduce operational costs.
            </p>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="mb-3">
            <h5 className="fw-bold text-white">Scalability and Consistency</h5>
            <p className="text-white">
              SiBot ensures consistent quality in responses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;