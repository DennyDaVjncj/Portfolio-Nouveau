import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

const Header = () => {
    return (
        <Jumbotron>
            <h1>Welcome to mine portfolio!</h1>
            <h3>feel free to offer a 6 fig position</h3>
            <p>
                Github:
            </p>
            <a
                className="Github"
                href="https://https://github.com/DennyDaVjncj"
                target="_blank"
                rel="external link"
            >
                Denny da Vjncj
            </a>
        </Jumbotron>
    )
}
export default Header;