import Button from "../../components/Button";
import Container from "@material-ui/core/Container";

const Contact = ({ headline, subheadline, text, ctaText }) => {
  return (
    <>
      <section className="section section--contact">
        <Container>
          <h2 className="section__headline">{headline}</h2>
          <h3 className="section__subheadline">{subheadline}</h3>
          <p className="section__text">{text}</p>
          <Button text={ctaText} />
        </Container>
      </section>
      <style jsx>{`
        .section--contact {
          padding: 40px 0;
          text-align: center;

          .section {
            &__headline,
            &__subheadline {
              color: #2a408f;
              text-transform: uppercase;
              margin: 0;
            }

            &__text {
              color: #2a408f;
              font-size: 18px;
            }

            &__headline {
              letter-spacing: 4px;
              font-size: 20px;
              margin-bottom: 15px;
            }

            &__subheadline {
              font-size: 36px;
              line-height: 1;
              font-weight: 600;
              margin-bottom: 20px;
            }

            &__text {
              font-size: 20px;
            }
          }
        }
      `}</style>
    </>
  );
};

export default Contact;
