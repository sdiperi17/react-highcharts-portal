import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./HighchartsMenu.css";

// NAvLink render specific Component as per route

const HighchartsMenu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink className="navbar-brand" to="/home">
        HighCharts
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor02"
        aria-controls="navbarColor02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/home">
              Home <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Highstocks
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <NavLink
                className="nav-link"
                style={{ color: "black" }}
                to="/stocks/daily"
              >
                Daily Stocks
              </NavLink>
              <NavLink
                className="nav-link"
                style={{ color: "black" }}
                to="/stocks/weekly"
              >
                Weekly Stocks
              </NavLink>
              <NavLink
                className="nav-link"
                style={{ color: "black" }}
                to="/stocks/monthly"
              >
                Monthly Stocks
              </NavLink>
              <NavLink
                className="nav-link"
                style={{ color: "black" }}
                to="/stocks/comparison"
              >
                Monthly Stocks Comparison
              </NavLink>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Forex
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <NavLink
                className="nav-link"
                style={{ color: "black" }}
                to="/forex/daily"
              >
                Daily Forex
              </NavLink>
              <NavLink
                className="nav-link"
                style={{ color: "black" }}
                to="/forex/weekly"
              >
                Weekly Forex
              </NavLink>
              <NavLink
                className="nav-link"
                style={{ color: "black" }}
                to="/forex/monthly"
              >
                Monthly Forex
              </NavLink>
              <NavLink
                className="nav-link"
                style={{ color: "black" }}
                to="/forex/compare"
              >
                Monthly Forex Comparison
              </NavLink>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default HighchartsMenu;
