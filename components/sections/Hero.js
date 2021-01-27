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
          .hero__headline {
            color: blue;
          }
        }
      `}</style>
    </>
  );
};

export default Hero;
