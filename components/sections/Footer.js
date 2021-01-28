import Container from "@material-ui/core/Container";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <Container>
          <p className="footer__copyright">&copy; 2020 Worlds of Wow!</p>
          <p className="footer__reserved-rights">
            A <strong>Playcore</strong> Company. All Rights Reserved.
          </p>
          <nav className="footer__nav">
            <ul className="footer__nav-list">
              <li className="footer__nav-list-item">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="footer__nav-list-item">
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </nav>
        </Container>
      </footer>
      <style jsx>
        {`
          .footer {
            color: #2a408f;
            padding: 30px 20px;

            &__copyright {
              margin: 0 0 5px;
              font-size: 20px;
            }
            &__reserved-rights {
              margin-top: 0;
              margin-bottom: 30px;
              font-size: 18px;
            }

            &__nav-list {
              margin: 0;
              padding: 0;
              list-style: none;
            }

            &__nav-list-item {
              display: inline-block;
              margin-right: 20px;
            }

            &__nav-list-item a {
              color: #2a408f;
              font-weight: 600;
              text-decoration: none;
              font-size: 18px;
            }
          }
        `}
      </style>
    </>
  );
};

export default Footer;
