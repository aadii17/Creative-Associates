import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__addr">
          <h1 className="footer__logo">Creative Associates</h1>
          <h2 className="nav__title">Address</h2>
          <br />
          <address>
            FQ3X+6FJ, Tirupati Nagar, Virar West, <br /> Virar, Maharashtra
            401303
          </address>
        </div>
        <ul className="footer__nav">
          <li className="nav__item">
            <h2 className="nav__title">Contact</h2>
            <ul className="nav__ul">
              <li>
                <a href="#" style={{ color: 'white' }}>Phone No.</a>
              </li>
              <li>
                <a className="contact" href="#">
                  +91 70583 65559
                </a>
              </li>
              <li>
                <a href="#" style={{ color: 'white' }}>E-mail Address</a>
              </li>
              <li>
                <a className="contact" href="#">
                  creativeassociatesofficial@gmail.com{" "}
                </a>
              </li>
            </ul>
          </li>

          <li className="nav__item">
            <h2 className="nav__title">Social</h2>
            <ul className="nav__ul">
              <li>
                <a href="#">Whatsapp</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Linkedin</a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="legal">
          <p>&copy; 2019 Something. All rights reserved.</p>
        </div>
        <div className="legal__links">
          Made with <span className="heart">♥</span> By Aadi
        </div>
      </footer>
    </>
  );
}
