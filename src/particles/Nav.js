import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">Mine Portfolio</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link">About me <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact me</Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Portfolio
              </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="https://theNewCool.org" target="_blank">the New Cool: eComm site</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="https://dennydavjncj.github.io/caloriesToCalisthenics/" target="_blank">Calories to Calisthenics</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="https://peace-mind.herokuapp.com/" target="_blank">2nd class project (20-21 bootcamp-fsf-pt)</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>

  )
}
export default Nav;
//consider pulling in some sort of layout for formating the header particle