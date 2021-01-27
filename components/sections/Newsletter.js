const Newsletter = ({ headline, text, ctaText }) => {
  return (
    <div>
      <h2>{headline}</h2>
      <p>{text}</p>

      <label htmlFor="email"></label>
      <input type="email" name="email" id="email" />
      <Button text={ctaText} />

      {/* Probably add pages/links & social-media/links to state and pull from there */}
      <nav>
        <ul>
          <li>
            <a href="">Our Work</a>
          </li>
          <li>
            <a href="">Industries</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Our Expertise</a>
          </li>
        </ul>
      </nav>

      <ul>
        <li>
          <a href="">
            <img src="" alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="" alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="" alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="" alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Newsletter;
