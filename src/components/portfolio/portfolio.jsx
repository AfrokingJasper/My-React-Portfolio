import React from "react";
import "./portfolio.css";
import IMG1 from "../../assest/Bankist-2.PNG";
import IMG2 from "../../assest/Bankist-1.PNG";
import IMG3 from "../../assest/forkify-2.PNG";
// import IMG4 from "../../assest/DSC_0199.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Bankist website",
    github: "https://github.com/AfrokingJasper?tab=repositories",
    demo: "https://bankist-website-eta.vercel.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Bankist Web Application",
    github: "https://github.com/AfrokingJasper?tab=repositories",
    demo: "https://github.com/AfrokingJasper?tab=repositories",
  },
  {
    id: 3,
    image: IMG3,
    title: "Forkify-Api Website",
    github: "https://github.com/AfrokingJasper?tab=repositories",
    demo: "https://github.com/AfrokingJasper?tab=repositories",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img className="imgs" src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="porfolio__item-cta">
                <a href={github} target="_blank" className="btn">
                  GitHub
                </a>
                <a href={demo} target="_blank" className="btn btn-primary">
                  GitHub
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
