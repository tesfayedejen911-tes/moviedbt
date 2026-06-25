import React from "react";
import styles from "./Footer.module.css";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const footerlinks = [
    ["Audio Description", "Investor Relations", "Legal Notices"],
    ["Help centre", "Jobs", "Cookie Preferences"],
    ["Gift Cards", "Terms of Use", "Corporate Information"],
    ["Media Centre", "Privacy", "Contact Us"],
  ];
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Social Icons */}
        <div className={styles.socialIcons}>
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaYoutube />
        </div>
        {/* Footer Links */}
        <div className={styles.linksGrid}>
          {footerlinks.map((column, index) => (
            <ul key={index} className={styles.linkColumn}>
              {column.map((link, i) => (
                <li key={i}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          ))}
        </div>
        {/* Copyright */}
        <p className={styles.copyright}>1997-2026 Netflix, Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
