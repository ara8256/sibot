import React from "react";
import CardComponent from "./card";
import image from "./pictures/helpbot.webp"
import image1 from "./pictures/constition.jpeg"
import image2 from "./pictures/Ask Quran.jpeg"
import image3 from "./pictures/presentation.png"
import image4 from "./pictures/tafheem il  quran.jpeg"
import image5 from "./pictures/llm.jpeg"
import "./project.css"
const Projects = () => {
      const cardsData = [
        {
          title:"Nust Helpbot",
         description:"A Compelrte guide for students",
         imageUrl:image,
         websiteUrl:"https://images.unsplash.com/photo-1518791841217-8f162f" 
        },

        {
          title:"Pakinstan Consttution Guide",
         description:"Instant reference to the constitution",
         imageUrl:image1,
         websiteUrl:"https://images.unsplash.com/photo-1518791841217-8f162f" },
         
        {
          title: 'Ask Quran',
          description: 'Logical Commands of the Holy Quran.',
          imageUrl: image2,
          websiteUrl: 'https://example.com'
        },


        {
          title: 'Presentation Maker',
          description: 'Ai based Slides generator',
          imageUrl: image3,
          websiteUrl: 'https://example.com'
        },
        {
          title: 'Tafheem ul Quran',
          description: 'Easy explanation of Quran',
          imageUrl: image4,
          websiteUrl: 'https://example.com'
        },
        {
          title: 'LLm Fine Tune',
          description: 'Fine tunng llms for your style',
          imageUrl: image5,
          websiteUrl: 'https://example.com'
        }
      ];
    
      return (
        <div className="container" id="project">
          <div className="proj-font mt-5 mb-4 fw-bold d-flex justify-content-center h2">Innovation in Action: Our Projects</div>
          <div className="row">
            {cardsData.map((card, index) => (
              <CardComponent
                key={index}
                title={card.title}
                description={card.description}
                imageUrl={card.imageUrl}
                websiteUrl={card.websiteUrl}
                index = {index}
              />
            ))}
          </div>
        </div>
    
    )
}

export default Projects