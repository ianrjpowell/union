const Button = ({ text, type, fullWidth, arrow }) => {
  const isFullWidth = fullWidth ? "full-width" : "";
  const hasArrow = !!arrow;
  let arrowStyle = "";

  if (type == "tertiary-light" || type == "tertiary-dark") {
    arrowStyle = type.split("-")[1];
  }

  return (
    <>
      <a
        href="#"
        className={`button button--${type || "primary"} ${isFullWidth}`}
      >
        <span>{text}</span>
        {hasArrow && (
          <svg
            width="8"
            height="10"
            viewBox="0 0 8 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.26837 3.26867C7.94229 3.60137 8.02208 4.53073 7.41475 4.97344L1.83905 9.03781C1.1782 9.51953 0.25 9.0475 0.25 8.22971L0.25 1.41274C0.25 0.671568 1.02808 0.187957 1.69268 0.516054L7.26837 3.26867Z"
              fill={arrowStyle === "dark" ? "#F58E21" : "#fcbc5c"}
            />
          </svg>
        )}
      </a>
      <style jsx>
        {`
          .button {
            background: #f48c24;
            color: #fff;
            text-transform: uppercase;
            font-weight: 600;
            padding: 19px 30px;
            text-decoration: none;
            border-radius: 5px;
            font-size: 20px;
            line-height: 1;
            display: inline-block;

            &--secondary {
              background: #2a408f;
            }

            &--tertiary-light,
            &--tertiary-dark {
              display: flex;
              align-items: center;

              span {
                display: inline-block;
                margin-right: 10px;
              }
            }

            &--tertiary-light {
              background: none;
              color: #fcbc5c;
              padding: 0;
              justify-content: center;
            }

            &--tertiary-dark {
              background: none;
              color: #f48c24;
              padding: 0;
            }
          }

          .full-width {
            width: 100%;
            text-align: center;

            @media (min-width: 768px) {
              width: auto;
            }
          }
        `}
      </style>
    </>
  );
};

export default Button;
