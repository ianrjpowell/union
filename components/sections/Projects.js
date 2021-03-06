import React from "react";
import { portfolio } from "../../data/portfolio";
import Button from "../../components/Button";
import Card from "../Card";

const Projects = ({ headline, subheadline, ctaText }) => {
  const [projects] = React.useState(portfolio);

  return (
    <>
      <section className="section section--projects">
        <h2 className="section__headline">{headline}</h2>
        <h3 className="section__subheadline">{subheadline}</h3>
        <Button text={ctaText} />

        <div className="card-container">
          <div className="grid-wrapper">
            {projects.map(({ name, description, ctaText }, i) => {
              return (
                <Card
                  key={i}
                  elemClass={`card card--${i}`}
                  name={name}
                  description={description}
                  ctaText={ctaText}
                  buttonType="tertiary-light"
                />
              );
            })}
          </div>
        </div>
      </section>
      <style jsx>{`
        .section--projects {
          text-align: center;
          padding: 40px 0;

          .section {
            &__headline,
            &__subheadline {
              color: #2a408f;
              text-transform: uppercase;
            }

            &__headline {
              letter-spacing: 4px;
              margin-bottom: 20px;
            }

            &__subheadline {
              font-size: 32px;
              margin-bottom: 20px;
            }
          }

          @media (min-width: 768px) {
            padding: 80px 0 140px;

            .section {
              &__headline {
                font-size: 20px;
                margin-bottom: 50px;
              }

              &__subheadline {
                font-size: 60px;
              }
            }
          }
        }

        @media (min-width: 768px) {
          .grid-wrapper {
            margin-top: 30px;
            display: grid;
            grid-gap: 30px;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(3, 1fr);
          }
        }
      `}</style>
    </>
  );
};

export default Projects;
