import Container from "@material-ui/core/Container";
import Button from "../Button";

const Header = () => {
  return (
    <>
      <header className="header">
        <Container>
          <img
            className="header__menu-button h-hide-for-large"
            src="/images/icons/menu.svg"
            alt="Menu button"
          />
          <p className="header__cta h-show-for-large">
            Nullam quis risus eget: <a href="tel:8173804215">(817) 380-4215</a>
          </p>
          <div className="content-container">
            <img
              className="header__logo"
              src="/images/icons/logo.png"
              alt="Company logo"
            />
            <nav className="header__nav h-show-for-large">
              <ul className="header__nav-list">
                <li className="header__nav-list-item">
                  <a href="#">Our Work</a>
                </li>
                <li className="header__nav-list-item">
                  <a href="#">Industries</a>
                </li>
                <li className="header__nav-list-item">
                  <a href="#">About Us</a>
                </li>
                <li className="header__nav-list-item">
                  <a href="#">Our Expertise</a>
                </li>
              </ul>
            </nav>
            <div className="h-show-for-large">
              <Button text="Contact us" />
            </div>
          </div>
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

          &__cta {
            text-align: right;
            margin-bottom: 40px;

            a {
              text-decoration: none;
              color: #f48c24;
              font-weight: 500;
            }
          }

          @media (min-width: 768px) {
            padding: 0 0 30px;
            &__logo {
              margin: 0;
            }

            &__nav-list {
              display: flex;
              list-style: none;
              justify-content: space-evenly;
              flex-wrap: nowrap;
              margin: 0;
              padding: 0;
            }

            &__nav-list-item {
              margin-left: 50px;
            }

            &__nav-list-item a {
              text-decoration: none;
              color: #2a408f;
              font-size: 22px;
            }
          }
        }

        @media (min-width: 768px) {
          .content-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
