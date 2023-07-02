import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { SiGmail } from "react-icons/si";
import bgImg from "../assets/Sravan.png";
export default function SPResume() {
  return (
    <div className="single-page-resume-grid">
      <main className="single-resume-main">
        <div className="summary-info">summary</div>
      </main>

      <aside className="single-resume-aside">
        <div className="My-info">
          <img src={bgImg} width={80} height={80}></img>
          <h3>SRAVANKUMAR POLU</h3>
          <div className="my-detail">
            <div className="phone-number1">
              <BiPhoneCall className="call-icon1" />
              <a
                className="call-number1"
                href="tel:+917973943675"
                target="_self"
              >
                : +917973943675
              </a>
            </div>
            <div className="mail" style={{ textDecoration: "none" }}>
              <SiGmail className="gmail-icon1" />
              <a href="mailto:sravanpolu.me@gmail.com" target="_self">
                :sravanpolu.me@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="skill-info">
          <ul className="skill-name">
            <h3>SKILLS</h3>
            <li>HTML</li>
            <li>CSS</li>
            <li>JS,TypeScript</li>
            <li>React</li>
            <li>BootStrap</li>
          </ul>
        </div>
        <div className="language-info">
          <ul className="language-name">
            <h3>LANGUAGES</h3>
            <li>English</li>
            <li>Telugu</li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
