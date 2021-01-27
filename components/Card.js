import Button from "../components/Button";

const Card = ({
  elemClass,
  imagePath,
  altText,
  name,
  description,
  ctaText,
  buttonType,
}) => {
  return (
    <>
      <div className={elemClass}>
        <img className={`${elemClass}__image`} src={imagePath} alt={altText} />
        <h2 className={`${elemClass}__headline`}>{name}</h2>
        <p className={`${elemClass}__description`}>{description}</p>
        <Button text={ctaText} type={buttonType} />
      </div>
      <style jsx>
        {`
          .card {
            text-align: center;
            background: gray;
            margin-top: 30px;
            padding: 40px;
            position: relative;
            color: #fff;

            &__headline {
              text-transform: uppercase;
              font-weight: 600;
              margin: 0 0 10px 0;
            }

            &:after {
              content: "";
              position: absolute;
              bottom: -8px;
              left: -8px;
              width: 100%;
              height: 100%;
              background: #fcbc5c;
              z-index: -1;
            }
          }
        `}
      </style>
    </>
  );
};

export default Card;
