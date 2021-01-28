import React, { Component } from "react";
import { blog } from "../../data/blog";
import Button from "../Button";
import Card from "../Card";
import Slider from "react-slick";
class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = { blog: blog };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    const { headline, subheadline, ctaText } = this.props;

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
              <div className="arrows-container h-show-for-large">
                <div className="slider-arrows">
                  <button
                    className="button button--prev-arrow"
                    onClick={this.previous}
                  ></button>
                  <button
                    className="button button--next-arrow"
                    onClick={this.next}
                  ></button>
                </div>
              </div>
            </div>
            <div className="slider-container">
              <Slider ref={(c) => (this.slider = c)} {...settings}>
                {this.state.blog.map(
                  ({ name, description, ctaText, imagePath }, i) => {
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
                  }
                )}
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

            @media (min-width: 768px) {
              .section {
                &__headline {
                  margin-bottom: 40px;
                }

                &__subheadline {
                  font-size: 40px;
                }
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
              width: 36%;
            }

            .slider-container {
              width: 55%;
              overflow: hidden;
            }

            .arrows-container {
              margin-top: 30px;
            }

            .button {
              border: none;
              line-height: 1;
              width: 30px;
              height: 30px;
              background: url("../images/icons/arrow-right-circle.svg");
              background-size: cover;
              background-position: center;
              background-repeat: no-repeat;
              cursor: pointer;

              &--prev-arrow {
                transform: rotate(180deg);
                margin-right: 5px;
              }
            }
          }
        `}</style>
      </>
    );
  }
}

export default Articles;
