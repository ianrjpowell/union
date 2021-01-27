const Newsletter = ({ headline, text, ctaText }) => {
  return (
    <div>
      <h2>{headline}</h2>
      <p>{text}</p>

      <label htmlFor="email"></label>
      <input type="email" name="email" id="email" />
      <Button text={ctaText} />
    </div>
  );
};

export default Newsletter;
