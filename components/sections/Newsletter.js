import React, { Component } from "react";
import Button from "../Button";
import Container from "@material-ui/core/Container";

class Newsletter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailInput: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ emailInput: event.target.value });
  }

  render() {
    const { headline, text, ctaText } = this.props;

    return (
      <>
        <section className="section section--newsletter">
          <Container>
            <div className="content-container">
              <div className="newsletter-container">
                <h2 className="section__headline">{headline}</h2>
                <p className="section__text">{text}</p>

                <label htmlFor="email"></label>
                <input
                  className="section__input"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  onChange={this.handleChange}
                  value={this.state.emailInput}
                />
                <Button text={ctaText} type="secondary" fullWidth />
              </div>
              <div className="link-container">
                <nav className="section__nav">
                  <ul className="section__nav-list">
                    <li className="section__nav-list-item">
                      <a href="#">Our Work</a>
                    </li>
                    <li className="section__nav-list-item">
                      <a href="#">Industries</a>
                    </li>
                    <li className="section__nav-list-item">
                      <a href="#">About Us</a>
                    </li>
                    <li className="section__nav-list-item">
                      <a href="#">Our Expertise</a>
                    </li>
                  </ul>
                </nav>

                <ul className="section__social-media-list">
                  <li className="section__social-media-list-item">
                    <a href="#">
                      <img src="/images/icons/fb.svg" alt="Facebook icon" />
                    </a>
                  </li>
                  <li className="section__social-media-list-item">
                    <a href="#">
                      <img src="/images/icons/tw.svg" alt="Twitter icon" />
                    </a>
                  </li>
                  <li className="section__social-media-list-item">
                    <a href="#">
                      <img src="/images/icons/yt.svg" alt="YouTube icon" />
                    </a>
                  </li>
                  <li className="section__social-media-list-item">
                    <a href="#">
                      <img src="/images/icons/ig.svg" alt="Instagram icon" />
                    </a>
                  </li>
                  <li className="section__social-media-list-item">
                    <a href="#">
                      <img src="/images/icons/fl.svg" alt="Flickr icon" />
                    </a>
                  </li>
                  <li className="section__social-media-list-item">
                    <a href="#">
                      <img src="/images/icons/pn.svg" alt="Pinterest icon" />
                    </a>
                  </li>
                  <li className="section__social-media-list-item">
                    <a href="#">
                      <img src="/images/icons/in.svg" alt="LinkedIn icon" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </section>
        <style jsx>{`
          .section--newsletter {
            background: #f48c24;
            color: #fff;
            padding: 40px 20px;

            .section {
              &__headline {
                text-transform: uppercase;
                line-height: 1;
                margin: 0 0 15px;
                font-size: 20px;
              }

              &__text {
                font-weight: 300;
                font-size: 20px;
                margin: 0 0 10px;
              }

              &__input {
                padding: 17px;
                width: 100%;
                border: none;
                display: block;
                margin-bottom: 5px;
                font-size: 20px;
              }

              &__nav-list,
              &__social-media-list {
                list-style: none;
                margin: 0;
                padding: 0;
              }

              &__nav-list {
                margin: 30px 0 0;
              }

              &__nav-list-item {
                margin-bottom: 25px;
              }
              &__nav-list-item a {
                color: white;
                text-decoration: none;
                font-weight: 600;
                font-size: 20px;
              }

              &__social-media-list {
                margin-top: 30px;
                display: flex;
                flex-wrap: wrap;
                padding-right: 40px;
              }

              &__social-media-list-item {
                margin-right: 20px;
                line-height: 40px;
              }
            }

            @media (min-width: 768px) {
              .section {
                &__input {
                  display: inline-block;
                  width: 50%;
                }
                &__nav-list {
                  display: flex;
                  justify-content: flex-end;
                  margin: 0;
                }

                &__nav-list-item {
                  margin: 0 0 0 20px;
                }

                &__social-media-list {
                  display: flex;
                  justify-content: flex-end;
                  flex-wrap: nowrap;
                  padding-right: 0;
                  margin-top: 60px;
                }

                &__social-media-list-item {
                  margin: 0 0 0 20px;
                }

                &__nav-list-item a {
                  font-size: 16px;
                }
              }
            }
          }

          @media (min-width: 768px) {
            .content-container {
              display: flex;
              justify-content: space-between;
              align-items: center;
            }

            .newsletter-container {
              width: 50%;
            }
            .link-container {
              width: 50%;
            }
          }
        `}</style>
      </>
    );
  }
}

export default Newsletter;
