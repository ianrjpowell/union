const Button = ({ text, type }) => {
  return (
    <>
      <a href="#" className={`button button--${type || "primary"}`}>
        {text}
      </a>
      <style jsx>{``}</style>
    </>
  );
};

export default Button;
