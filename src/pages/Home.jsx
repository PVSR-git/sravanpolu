import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="home-container">
      <div>
        <h2>Dennies Ritchie:</h2>
        <p>
          "The only way to learn a new programming language is by written
          programs in it"
        </p>
      </div>
      <div>
        <h2>A.EinStein:</h2>
        <p>
          "The value of a college education is not the learning of many facts
          but the training of the mind to think"
        </p>
      </div>

      <Link to="/resume">My Resume</Link>
    </div>
  );
}
