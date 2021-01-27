const Button = ({ text, type }) => {
  return (
    <>
      <a href="#" className={`button button--${type || "primary"}`}>
        {text}
      </a>
      <style jsx>
        {`
          .button {
            background: #f48c24;
            color: #fff;
            text-transform: uppercase;
            font-weight: 600;
            padding: 17px 20px;
            text-decoration: none;
            border-radius: 5px;
            font-size: 20px;
            line-height: 1;
            display: inline-block;

            &--secondary {
              background: #2a408f;
            }

            &--tertiary-light {
              background: none;
              color: #fcbc5c;
              padding: 0;
            }

            &--tertiary-dark {
              background: none;
              color: #f48c24;
              padding: 0;
            }
          }
        `}
      </style>
    </>
  );
};

export default Button;
