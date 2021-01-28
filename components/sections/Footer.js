import Container from "@material-ui/core/Container";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <Container>
          <div className="content-container">
            <div className="copyright-container">
              <p className="footer__copyright">&copy; 2020 Worlds of Wow!,</p>
              <p className="footer__reserved-rights">
                A <strong>Playcore</strong> Company. All Rights Reserved.
              </p>
            </div>
            <div className="nav-container">
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
            </div>
          </div>
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

            @media (min-width: 768px) {
              padding: 20px 0;
              &__copyright,
              &__reserved-rights {
                display: inline-block;
                line-height: 1;
                margin-bottom: 0;
                font-size: 16px;
              }

              &__reserved-rights {
                margin-left: 10px;
              }

              &__nav-list-item a {
                font-size: 16px;
              }
            }
          }

          @media (min-width: 768px) {
            .content-container {
              display: flex;
              justify-content: space-between;
            }
          }
        `}
      </style>
    </>
  );
};

export default Footer;
