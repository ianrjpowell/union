import Button from "../../components/Button";

const Contact = ({ headline, subheadline, text, ctaText }) => {
  return (
    <div>
      <h2>{headline}</h2>
      <h3>{subheadline}</h3>
      <p>{text}</p>
      <Button text={ctaText} />
    </div>
  );
};

export default Contact;
