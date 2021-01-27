import Button from "../components/Button";

const Card = ({ name, description, ctaText }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <Button text={ctaText} />
    </div>
  );
};

export default Card;
