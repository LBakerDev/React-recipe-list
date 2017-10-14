import React, {Component} from 'react';

import "./navBar.css";

class NavBar extends Component {
    render() {
        const navList = this.props.list.map((item, index) => (
    <li key={index}>{item}</li>
));

    return (
        <header>
        <h2 className="title"><a>{this.props.title}</a></h2>
        <nav>
        {navList}
        </nav>
        </header>

    )
}
}

export default NavBar;