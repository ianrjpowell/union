const Articles = ({ headline, subheadline, ctaText }) => {
  return (
    <div>
      <h2>{headline}</h2>
      <h3>{subheadline}</h3>
      <Button text={ctaText} />

      {/* Loop through articles */}
    </div>
  );
};

export default Articles;
