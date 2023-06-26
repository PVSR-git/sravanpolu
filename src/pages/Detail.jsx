import React from "react";

export default function Detail() {
  return (
    <div className="detail-resume-grid">
      <main className="detail-resume-main">
        <h1>MyResume</h1>
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
            <img src="/svg/scss.svg"></img>
          </li>
        </ul>
      </aside>
    </div>
  );
}
