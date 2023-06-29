import React from "react";

export default function Detail() {
  return (
    <div className="detail-resume-grid">
      <main className="detail-resume-main">
        <h2>Courses</h2>
        <p className="intro">
          Desire! That’s the one secret of every man’s career. Not education.
          Not being born with hidden talents. Desire.
        </p>
        <div className="course-experience">
          <div className="course">
            <h1 className="courseName">CSS</h1>
            <div className="project-info">
              <h2 className="role">projects:</h2>
              <div className="project-demo">
                <div className="grid-demo">
                  <h3>Grid:</h3>
                  <a
                    href="https://stripedemo1.netlify.app/"
                    target="_blank"
                    className="project-link"
                  >
                    Stripedemo
                  </a>
                </div>
                <div className="animation-demo">
                  <h3>Animation:</h3>
                  <a
                    href="https://jsfiddle.net/pvskr/f2vat9bm/1/"
                    target="_blank"
                    className="project-link"
                  >
                    3DCube
                  </a>
                </div>
                <div className="animation-demo">
                  <h3>Animation:</h3>
                  <a
                    href="https://jsfiddle.net/pvskr/95okncw6/388/"
                    target="_blank"
                    className="project-link"
                  >
                    SolarSystem
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="course">
            <h1 className="courseName">JS</h1>
            <div className="project-info">
              <h2 className="role">projects:</h2>
              <div className="project-demo">
                <div className="js-demo">
                  <h3>JSConcept:</h3>
                  <a
                    href="https://jsfiddle.net/pvskr/g9jp2fsd/243/"
                    className="project-link"
                    target="_blank"
                  >
                    {" "}
                    Bank
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="course">
            <h1 className="courseName">HTML</h1>
            <div className="project-info">
              <h2 className="role">projects:</h2>
              <span className="project-link"> BCDPROJECT</span>
            </div>
          </div>
          <div className="course">
            <h1 className="courseName">React</h1>
            <div className="project-info">
              <h2 className="role">projects:</h2>
              <div className="project-demo">
                <div className="react-demo">
                  <h3>ReactDemo:</h3>
                  <a
                    href="https://new-buy-me.netlify.app/"
                    className="project-link"
                  >
                    {" "}
                    buyMe
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="course">
            <h1 className="courseName">BootStrap</h1>
            <div className="project-info">
              <h2 className="role">projects:</h2>
              <div className="project-demo">
                <div className="bootStrap-demo">
                  <h3>CardDemo</h3>
                  <a
                    href="https://jsfiddle.net/pvskr/pnfjt029/20/"
                    className="project-link"
                    target="_blank"
                  >
                    {" "}
                    Card
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="full-stack">
          <h3>FullProject</h3>
          <a
            href="https://van-life2.netlify.app/vans"
            className="project-link"
            target="_blank"
          >
            <h3> vanLife</h3>
          </a>
        </div>
        <div className="note">
          <h3>Note-Point:</h3>
          <p>
            <h4>Design Presentations:</h4>
            Figma, designers can create presentation decks to showcase their
            designs and explain their design decisions
          </p>
          <a
            className="project-linke"
            href="https://www.figma.com/file/lp83mW7CwAFOtedPtuLdW4/Untitled?type=design&node-id=0-1&mode=design&t=qmSmCeDw3VKGmSkN-0"
            target="blank"
          >
            Figma-Example
          </a>
        </div>
      </main>
      <aside className="detail-resume-aside">
        <h2 className="visually-hidden">myskills</h2>
        <ul className="icon-list" role="list">
          <li>
            <p className="visually-hidden"></p>
            <img src="/svg/css.svg"></img>
          </li>
          <li>
            <p className="visually-hidden"></p>
            <img src="/svg/html.svg"></img>
          </li>
          <li>
            <p className="visually-hidden"></p>
            <img src="/svg/js.svg"></img>
          </li>
          <li>
            <p className="visually-hidden"></p>
            <img src="/svg/react.svg"></img>
          </li>
          <li>
            <p className="visually-hidden"></p>
            <img src="/svg/bootstrap.svg"></img>
          </li>
        </ul>
      </aside>
    </div>
  );
}
