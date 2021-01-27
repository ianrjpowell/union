import Button from "../../components/Button";

const Hero = ({ headline, ctaText }) => {
  return (
    <div>
      <h2>{headline}</h2>
      <Button text={ctaText} />
    </div>
  );
};

export default Hero;
