import React from "react";
import '../src/header.css';
import logo from "../images/logo.png";
import logo_footer from "../images/footer.png"

function Header({ goToFirstSlide }) {
    return (
      <div className="global">
          <header className="global__header">
              <a href="#" onClick={goToFirstSlide} className="header__logo">
                <img src={logo} alt="Logo" className="header__logo-image" />
              </a>
      </header>
          <footer className="global__footer">
            <img src={logo_footer} alt="FooterLogo" className="footer__image" />
          </footer>
          </div>
      
    );
  }

export default Header