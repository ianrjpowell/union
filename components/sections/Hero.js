import Button from "../../components/Button";
import Container from "@material-ui/core/Container";

const Hero = ({ headline, ctaText }) => {
  return (
    <>
      <section className="hero">
        <Container maxWidth="md">
          <h2 className="hero__headline">{headline}</h2>
          <Button text={ctaText} />
        </Container>
      </section>
      <style jsx>{`
        .hero {
          background-image: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.4),
              rgba(0, 0, 0, 0.7)
            ),
            url("../images/hero.png");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          text-align: center;
          padding: 240px 0 40px;
          .hero__headline {
            color: #fff;
            margin-top: 0;
            text-transform: uppercase;
            font-size: 36px;
            font-weight: 600;
            line-height: 36px;
            margin-bottom: 20px;

            @media (min-width: 768px) {
              font-size: 60px;
              line-height: 1.1;
              margin-bottom: 20px;
            }
          }

          @media (min-width: 768px) {
            padding: 140px 0;
          }
        }
      `}</style>
    </>
  );
};

export default Hero;
