import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { SiGmail } from "react-icons/si";
import { Link, NavLink } from "react-router-dom";
import bgImg from "../assets/Sravan.jpg";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <ul className="summary-topic">
          <li>Home</li>
          <li>Photos</li>
          <li>Resume</li>
        </ul>
        <span>&#169; 2023 #SRAVANPOLU</span>
        <Link className="footer-logo" to="/">
          <img src={bgImg} className="footer-img" alt="Logo" />
          <div className="phone-number">
            <BiPhoneCall className="call-icon" />
            <span className="number">: +917973943675</span>
          </div>
          <div className="mail-footer">
            <SiGmail className="gmail-icon" />
            <span className="Gmail" style={{ textDecoration: "none" }}>
              : sravanpolu.me@Gmail.com
            </span>
          </div>
        </Link>
      </div>
    </footer>
  );
}
