import React from "react";
import { portfolio } from "../../data/portfolio";
import Button from "../../components/Button";
import Card from "../Card";

const Projects = ({ headline, subheadline, ctaText }) => {
  const [projects] = React.useState(portfolio);

  return (
    <>
      <section className="section section__projects">
        <h2 className="section__headline">{headline}</h2>
        <h3 className="section__subheadline">{subheadline}</h3>
        <Button text={ctaText} />

        {projects.map(({ name, description, ctaText, imagePath }, i) => {
          return (
            <Card
              key={i}
              elemClass="card"
              name={name}
              description={description}
              ctaText={ctaText}
              imagePath={imagePath}
            />
          );
        })}
      </section>
      <style jsx>{`
        .section {
          &__projects {
            text-align: center;
          }
          &__headline,
          &__subheadline {
            color: #2a408f;
            text-transform: uppercase;
          }
        }
      `}</style>
      {/* Loop through project cards here */}
    </>
  );
};

export default Projects;
