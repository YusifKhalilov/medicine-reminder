import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {

    render() {
        return (
            <header className="header">
                <h1>Welcome to Honeybee Health</h1>
                <h3>Sign up for email reminder emails!</h3>
            </header>
        );
    }
}
