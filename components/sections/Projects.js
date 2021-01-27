import React from "react";
import { portfolio } from "../../data/portfolio";
import Button from "../../components/Button";
import Card from "../Card";

const Projects = ({ headline, subheadline, ctaText }) => {
  const [projects] = React.useState(portfolio);

  return (
    <>
      <h2>{headline}</h2>
      <h3>{subheadline}</h3>
      <Button text={ctaText} />

      {/* Loop through project cards here */}
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
    </>
  );
};

export default Projects;
