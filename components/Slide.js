import Button from "../components/Button";

const Slide = ({ imagePath, altText, name, description, ctaText }) => {
  return (
    <>
      <img src={imagePath} alt={altText} />
      <h3>{name}</h3>
      <p>{description}</p>
      <Button text={ctaText} />
    </>
  );
};

export default Slide;
