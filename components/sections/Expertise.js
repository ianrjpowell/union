import Button from "../../components/Button";
import Container from "@material-ui/core/Container";

const Expertise = ({ headline, subheadline, text, ctaText }) => {
  return (
    <>
      <section className="section section--expertise">
        <Container>
          <h2 className="section__headline">{headline}</h2>
          <h3 className="section__subheadline">{subheadline}</h3>
          <p className="section__text">{text}</p>
          <Button text={ctaText} />
        </Container>
      </section>
      <style jsx>
        {`
          .section--expertise {
            background: #f48c24;
            color: #fff;
            padding: 20px 0;

            .section {
              &__headline,
              &__subheadline {
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
              }

              &__text {
                font-weight: 300;
              }
            }
          }
        `}
      </style>
    </>
  );
};

export default Expertise;
