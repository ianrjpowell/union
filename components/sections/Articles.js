import React from "react";
import { blog } from "../../data/blog";
import Button from "../Button";
import Card from "../Card";

const Articles = ({ headline, subheadline, ctaText }) => {
  const [articles] = React.useState(blog);

  return (
    <>
      <h2>{headline}</h2>
      <h3>{subheadline}</h3>
      <Button text={ctaText} />

      {/* Loop through articles */}
      {articles.map(({ name, description, ctaText, imagePath }) => {
        return (
          <Card
            elemClass="slide"
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

export default Articles;
