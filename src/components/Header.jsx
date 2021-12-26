import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default class App extends React.Component {
  render = () => {
    return (
      <div>
        <div className="header">
          <div style={{ display: "flex" }}>
            <Link to="/" className="item">
              Flash Cards Game
            </Link>
          </div>
        </div>
        <div className="manage">Manage Cards</div>
      </div>
    );
  };
}
