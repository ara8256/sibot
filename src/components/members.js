import React from "react"
import imag1 from "./pictures/Sohailiqbal.jpeg"
import imag2 from "./pictures/khizer.jpeg"
import imag3 from "./pictures/aliawais.jpeg"
import sample from "./pictures/q.jpeg"

const TeamDetail = () => { 
    const teamMembers = [
        { name: 'Dr. Sohail Iqbal', role: 'PI & CEO', image: imag1,linkdinUrl : "https://www.linkedin.com/in/dr-sohail-iqbal-6236835/" },
        { name: 'Dr. Qurat ul Ain', role: 'Team Lead & Scientist', image: sample, linkdinUrl : "" },
        { name: 'Mr. Khizer Tariq', role: 'CTO and Developer', image: imag2, linkdinUrl: "https://www.linkedin.com/in/khizer-tariq-016585264/" },
        { name: 'Mr. Ali Safdar', role: 'CPO and Developer', image: imag3, linkdinUrl: "https://www.linkedin.com/in/aliawaissafdar/" },
      ];
    
      return (
        <div className="team-container container mt-5" id = "team">
          <h2 className="mb-4 text-center">Meet Our Team</h2>
          <div className="row">
            {teamMembers.map((member, index) => (
              <div className="col-md-3 mb-4" key={index}>
                <div className="card text-center h-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{member.name}</h5>
                    <a className="card-text" href={member.linkdinUrl}>{member.role}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>)}

export default TeamDetail;