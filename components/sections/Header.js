import Container from "@material-ui/core/Container";

const Header = () => {
  return (
    <>
      <header className="header">
        <Container>
          <img
            className="header__menu-button"
            src="/images/icons/menu.svg"
            alt="Menu button"
          />
          <img
            className="header__logo"
            src="/images/icons/logo.png"
            alt="Company logo"
          />
        </Container>
      </header>
      <style jsx>{`
        .header {
          padding: 5px 0;
          line-height: 0;
          position: relative;

          &__menu-button {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
          }

          &__logo {
            height: 65px;
            margin: 0 auto;
            display: block;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
