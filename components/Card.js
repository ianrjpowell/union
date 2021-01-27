import Button from "../components/Button";

const Card = ({
  elemClass,
  imagePath,
  altText,
  name,
  description,
  ctaText,
}) => {
  return (
    <>
      <div className={elemClass}>
        <img src={imagePath} alt={altText} />
        <h2>{name}</h2>
        <p>{description}</p>
        <Button text={ctaText} />
      </div>
    </>
  );
};

export default Card;
