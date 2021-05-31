import React from "react";
import { Link } from "react-router-dom";
import "../style/Footer.css";
const Footer = () => {
 
  return (
    <footer className="footer">
      <div className="container footer__grit">
        <nav className="nav nav--footer">
          <Link to="" className="nav__items nav__items--footer" href="#">
            Inicio
          </Link>
          <Link to="" className="nav__items nav__items--footer" href="#">
            Sobre mi
          </Link>
          <Link to="" className="nav__items nav__items--footer" href="#">
            Mis skills
          </Link>
          <Link to="" className="nav__items nav__items--footer" href="#">
            proyectos
          </Link>
        </nav>

        <section className="footer__contact">
          <h3 className="footer__title">Contatame</h3>
          <div className="footer__icons">
            <span className="footer__container-ocons">
              {" "}
              <Link to="https://www.facebook.com/">
                <i className="fab fa-facebook-f"></i>
              </Link>
            </span>

            <span className="footer__container-ocons">
              {" "}
              <Link to="">
                <i className="fab fa-twitter"></i>
              </Link>
            </span>

            <span className="footer__container-ocons">
              <Link to="">
                <i className="fab fa-whatsapp"></i>
              </Link>
            </span>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
