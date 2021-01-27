import Button from "../../components/Button";

const Hero = ({ headline, ctaText }) => {
  return (
    <>
      <section className="hero">
        <h2 className="hero__headline">{headline}</h2>
        <Button text={ctaText} />
      </section>
      <style jsx>{`
        .hero {
          background-image: linear-gradient(
              to bottom,
              rgba(245, 246, 252, 0),
              rgba(0, 0, 0, 0.85)
            ),
            url("../images/hero.png");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          text-align: center;
          padding: 400px 0 40px;
          .hero__headline {
            color: #fff;
            margin-top: 0;
            text-transform: uppercase;
            font-size: 45px;
            font-weight: 600;
            line-height: 45px;
          }
        }
      `}</style>
    </>
  );
};

export default Hero;
