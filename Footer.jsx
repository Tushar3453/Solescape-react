import React from "react";

import './landing.css';

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="section__container footer__container">
        <FooterColumn title="Services" links={["Contact Us", "Press", "Payroll", "Library", "Blog", "Help Center"]} />
        <FooterColumn title="Resources" links={["Pricing", "FAQs", "Contact Support", "Privacy Policy", "Terms"]} />
        <FooterColumn title="Support" links={["Contact", "Affiliates", "Sitemap", "Cancellation Policy", "Security"]} />
      </div>
      <div className="footer__bar">© 2024 Online Shoe Store. All rights reserved.</div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div className="footer__col">
      <h4>{title}</h4>
      <ul className="footer__links">
        {links.map((link, index) => (
          <li key={index}><a href="#">{link}</a></li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
