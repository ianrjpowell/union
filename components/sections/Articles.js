import React from "react";
import { blog } from "../../data/blog";
import Button from "../Button";
import Card from "../Card";
import Slider from "react-slick";

const Articles = ({ headline, subheadline, ctaText }) => {
  const [articles] = React.useState(blog);

  var settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.2,
    slidesToScroll: 1,
    accessibility: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <>
      <section className="section section--articles">
        <div className="content-container">
          <div className="text-container">
            <h2 className="section__headline">{headline}</h2>
            <h3 className="section__subheadline">{subheadline}</h3>
            <Button text={ctaText} />
            <div className="slider-arrows h-show-for-large">
              <img className="" src="" alt="" />
              <img className="" src="" alt="" />
            </div>
          </div>
          <div className="slider-container">
            <Slider {...settings}>
              {articles.map(({ name, description, ctaText, imagePath }, i) => {
                return (
                  <Card
                    key={i}
                    elemClass={`slide slide--${i}`}
                    name={name}
                    description={description}
                    ctaText={ctaText}
                    imagePath={imagePath}
                    buttonType="tertiary-dark"
                  />
                );
              })}
            </Slider>
          </div>
        </div>
      </section>
      <style jsx>{`
        .section--articles {
          padding: 40px 0 70px 0;

          .section {
            &__headline,
            &__subheadline {
              color: #2a408f;
              text-transform: uppercase;
              margin: 0;
            }

            &__headline {
              letter-spacing: 5px;
              font-size: 20px;
              margin-bottom: 20px;
            }

            &__subheadline {
              font-size: 32px;
              line-height: 1;
              font-weight: 600;
              margin-bottom: 20px;
            }
          }
        }

        @media (min-width: 768px) {
          .content-container {
            display: flex;
            align-items: top;
            justify-content: space-between;
          }

          .text-container {
            width: 30%;
          }

          .slider-container {
            width: 55%;
            overflow: hidden;
          }
        }
      `}</style>
    </>
  );
};

export default Articles;
