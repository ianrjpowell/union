import React from "react";
import { blog } from "../../data/blog";
import Button from "../Button";
import Card from "../Card";
import Slider from "react-slick";

const Articles = ({ headline, subheadline, ctaText }) => {
  const [articles] = React.useState(blog);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <section className="section section--articles">
        <h2 className="section__headline">{headline}</h2>
        <h3 className="section__subheadline">{subheadline}</h3>
        <Button text={ctaText} />
        <Slider {...settings}>
          {articles.map(({ name, description, ctaText, imagePath }, i) => {
            return (
              <Card
                key={i}
                elemClass="slide"
                name={name}
                description={description}
                ctaText={ctaText}
                imagePath={imagePath}
                buttonType="tertiary-dark"
              />
            );
          })}
        </Slider>
      </section>
      <style jsx>{`
        .section--articles {
          padding: 40px 0;

          .section {
            &__headline,
            &__subheadline {
              color: #2a408f;
              text-transform: uppercase;
              margin: 0;
            }

            &__headline {
              letter-spacing: 5px;
              font-size: 16px;
              margin-bottom: 10px;
            }

            &__subheadline {
              font-size: 32px;
              line-height: 1;
              font-weight: 600;
              margin-bottom: 20px;
            }
          }
        }
      `}</style>
    </>
  );
};

export default Articles;
