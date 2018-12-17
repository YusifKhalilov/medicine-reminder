import React, { Component } from 'react';
import './Logo.css';

export default class Logo extends Component {
    render() {
        return (
            <div>
                <div className="logo hide-on-small">
                    <img src="https://s3-us-west-2.amazonaws.com/hbh-take-home/rx_reminder.png" alt="logo" />
                </div>
                <div className="logo-small hide-in-medium-large">
                    <img src="https://s3-us-west-2.amazonaws.com/hbh-take-home/rx_reminder.png" alt="logo" />
                </div>
            </div>
        );
    }
}
