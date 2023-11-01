import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/Bankist-2-picture.PNG";
import IMG2 from "../../assets/Bankist-1-picture.PNG";
import IMG3 from "../../assets/forkify-picture.PNG";
import IMG4 from "../../assets/expense-tracker-image.PNG";
import IMG5 from "../../assets/voice-expense-tracker.PNG";
import IMG6 from "../../assets/mamas-kitchen.PNG";
import IMG7 from "../../assets/foodEase.JPG";

const data = [
  {
    id: 1,
    image: IMG7,
    title: "FoodEase",
    github: "https://github.com/AfrokingJasper/FoodEase",
    site: "https://food-ease.netlify.app",
    description:
      "FoodEase is an innovative online food ordering platform that provides users with a seamless and convenient way to order food online. Some key features includes Interactive Food Catalog, Intuitive Cart Management, User Authentication and Profile Management etc",
  },
  {
    id: 2,
    image: IMG1,
    title: "Bankist website",
    github: "https://github.com/AfrokingJasper/bankist-website-responsive",
    site: "https://bankist-website-eta.vercel.app/",
    description:
      "Smooth and Responsive Website. Fits perfrectly in all kinds of Device and accessible on all browsers. Everything you need in a modern bank and more.",
  },
  {
    id: 3,
    image: IMG2,
    title: "Bankist Web Application",
    github: "https://github.com/AfrokingJasper/Bankist-web-app",
    site: "https://bankist-web-app.vercel.app/",
    description:
      "Modern banking application. Allows users to perform transaction between different currencies and formats the amount accordingly.",
  },
  {
    id: 4,
    image: IMG3,
    title: "RecipeHive Api Web App",
    github: "https://github.com/AfrokingJasper/forkify-web-app",
    site: "https://fortune-forkify-recipe.netlify.app/",
    description:
      "Modern Food recipe website. Allows users to search for diffenrent food, fetches the data from an API and renders the list of similar searches along with recipe used.",
  },
  {
    id: 5,
    image: IMG4,
    title: "Expense Tracker",
    github: "https://github.com/AfrokingJasper/React-Expense-tracker",
    site: "https://fortunes-expensetracker.netlify.app/",
    description:
      "Personal Expense Tracker. Keeps a record of all your personal expenses on monthly basis. Expenses can be filtered by the year it was incured and all expenses are displayed on a chart",
  },
  {
    id: 6,
    image: IMG5,
    title: "Voice Budget Tracker",
    github: "https://github.com/AfrokingJasper/Voice-budget-tracker",
    site: "https://fortune-budget-tracker.netlify.app/",
    description:
      "Modern Budget tracker to help you keep track of your income and expenses. Feeling too lazy to type? no worries just say what you want and our third party library would convert those words and perform the actions on your behalf.",
  },
  {
    id: 7,
    image: IMG6,
    title: "Mamas's Kitchen",
    github: "https://github.com/AfrokingJasper/Mamas-Kitchen",
    site: "https://mamas-kitchen-foods.netlify.app/",
    description:
      "A mini food order app that allows users to send orders from a list of available meals and sends the orders along with users details to the management for delivery.",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, site, description }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img className="imgs" src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="description">{description}</div>
              <div className="porfolio__item-cta">
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  GitHub
                </a>
                <a
                  href={site}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  View Site
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
