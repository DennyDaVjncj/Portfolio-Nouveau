import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import logo from './logo.svg';

const Header = () => {
    return (
        <Jumbotron>
            <h1>Header</h1>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
        </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
        </a>
        </Jumbotron>
    )
}
export default Header;