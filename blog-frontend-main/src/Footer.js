import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__info">
        <span className="footer__logo">BLOG</span>
        <p className="footer__copyright">
          © 2021  Developed by Nikodimos
        </p>
      </div>
      <div className="footer__socialHandles">
        <a href="https://github.com/nikodimosewnetu">
          <i className="fa fa-github" aria-hidden="true"></i>
        </a>
        
        
        <a href="www.linkedin.com/in/nikodimos-ewnetu-157414310">
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </a>
       
      </div>
    </footer>
  );
}

export default Footer;
