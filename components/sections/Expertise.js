import Button from "../../components/Button";
import Container from "@material-ui/core/Container";

const Expertise = ({ headline, subheadline, text, ctaText }) => {
  return (
    <>
      <section className="section section--expertise">
        <img
          className="section__image"
          src="/images/illustrator.png"
          alt="Person illustrating on computer"
        />
        <Container>
          <h2 className="section__headline">{headline}</h2>
          <h3 className="section__subheadline">{subheadline}</h3>
          <p className="section__text">{text}</p>
          <Button text={ctaText} type="secondary" />
        </Container>
      </section>
      <style jsx>
        {`
          .section--expertise {
            background: #f48c24;
            color: #fff;
            padding: 0 0 40px 0;

            .section {
              &__image {
                margin-bottom: 40px;
                width: 100%;
              }

              &__headline,
              &__subheadline {
                text-transform: uppercase;
                margin: 0;
              }

              &__headline {
                letter-spacing: 5px;
                font-size: 20px;
                margin-bottom: 20px;
              }

              &__subheadline {
                font-size: 36px;
                line-height: 1;
                font-weight: 600;
              }

              &__text {
                font-weight: 300;
                font-size: 20px;
              }
            }
          }
        `}
      </style>
    </>
  );
};

export default Expertise;
