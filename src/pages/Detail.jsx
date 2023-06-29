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
              <h2 className="role">projects</h2>
              <span className="project-link"> BCDPROJECT</span>
            </div>
          </div>
          <div className="course">
            <h1 className="courseName">JS</h1>
            <div className="project-info">
              <h2 className="role">projects</h2>
              <span className="project-link"> BCDPROJECT</span>
            </div>
          </div>
          <div className="course">
            <h1 className="courseName">HTML</h1>
            <div className="project-info">
              <h2 className="role">projects</h2>
              <span className="project-link"> BCDPROJECT</span>
            </div>
          </div>
          <div className="course">
            <h1 className="courseName">React</h1>
            <div className="project-info">
              <h2 className="role">projects</h2>
              <span className="project-link"> BCDPROJECT</span>
            </div>
          </div>
          <div className="course">
            <h1 className="courseName">BootStap</h1>
            <div className="project-info">
              <h2 className="role">projects</h2>
              <span className="project-link"> BCDPROJECT</span>
            </div>
          </div>
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
