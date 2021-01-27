import Button from "../../components/Button";

const Projects = ({ headline, subheadline, ctaText }) => {
  return (
    <div>
      <h2>{headline}</h2>
      <h3>{subheadline}</h3>
      <Button text={ctaText} />

      {/* Loop through project cards here */}
    </div>
  );
};

export default Projects;
