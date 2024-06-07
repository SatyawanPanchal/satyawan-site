import React from "react";
import { pagelinks, socialLinks } from "../data";

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {
          pagelinks.map( (link) => {
          
          return (
            <li>
              <a href={link.href} className="footer-link">
                {link.text}
              </a>
            </li>
          );
        })
        
        }
      </ul>

      <ul className="footer-icons">
        {socialLinks.map((link)=>{
 

return(
  <li key={link.id}>
          <a
            href={link.href}
            rel="noreferrer"
            target="_blank"
            className="footer-icon"
          >
            <i className={link.icon}></i>
          </a>
        </li>
)

        })}

        

      </ul>

      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">satyawan{new Date().getFullYear}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
