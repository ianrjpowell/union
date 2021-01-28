import Button from "../components/Button";

const Card = ({ elemClass, name, description, ctaText, buttonType }) => {
  const multiClass = elemClass.split(" ");
  const baseClass = multiClass[0];
  const isSlide = baseClass == "slide" ? true : false;

  return (
    <>
      <div className={elemClass}>
        <div>
          {isSlide && <div className={`${baseClass}__image`}></div>}
          <h2 className={`${baseClass}__headline`}>{name}</h2>
          <p className={`${baseClass}__description`}>{description}</p>
          <Button text={ctaText} type={buttonType} arrow />
        </div>
      </div>
      <style jsx>
        {`
          $projectImages: (
            "0": "../images/mural.png",
            "1": "../images/shark-dentist.png",
            "2": "../images/tree.png",
            "3": "../images/ship-playground.png",
          );

          @each $name, $image in $projectImages {
            .card--#{$name} {
              background-image: linear-gradient(
                  to bottom,
                  rgba(20, 32, 71, 0.5),
                  rgba(20, 32, 71, 0.8)
                ),
                url(#{$image});
              background-position: center;
              background-size: cover;
              background-repeat: no-repeat;
            }
          }
          .card {
            text-align: center;
            margin-top: 17px;
            padding: 80px 50px;
            position: relative;
            color: #fff;

            &__headline {
              text-transform: uppercase;
              font-weight: 600;
              margin: 0 0 10px 0;
              font-size: 32px;
            }

            &__description {
              font-size: 18px;
              margin-top: 0;
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

            @media (min-width: 768px) {
              display: flex;
              align-items: center;
              justify-content: center;
              &--0 {
                grid-row: 1 / 3;
              }
              &--1 {
                grid-row: 1;
              }

              &--2 {
                grid-row: 3;
              }

              &--3 {
                grid-row: 2 / 4;
              }
            }
          }

          $articleImages: (
            "0": "../images/pirate-kids.png",
            "1": "../images/front-desk.png",
            "2": "../images/tree.png",
            "3": "../images/ship-playground.png",
          );

          @each $name, $image in $articleImages {
            .slide--#{$name} .slide__image {
              width: 100%;
              height: 200px;
              background-image: url(#{$image});
              background-position: center;
              background-size: cover;
              background-repeat: no-repeat;
              margin-bottom: 20px;

              @media (min-width: 768px) {
                height: 400px;
              }
            }
          }
          .slide {
            &__headline,
            &__description {
              color: #2a408f;
            }

            &__headline {
              font-size: 36px;
              line-height: 1.2;
            }

            &__description {
              font-size: 20px;
            }
          }
        `}
      </style>
    </>
  );
};

export default Card;
