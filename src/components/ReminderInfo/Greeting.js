import React, { Component } from 'react';

export default class Greeting extends Component {
    render() {
        return (
            <div className="col m12 d7 greet">
                Hi {this.props.data.fullName.split(' ').slice(0, 1).join(' ')} ! <br />
                Thanks for signing up for a reminder for {this.props.data.medicine}. We'll send it to {this.props.data.email}
                &nbsp;on {this.props.data.reminderDate.getMonth() + 1 + '/' + this.props.data.reminderDate.getDate() + '/' + this.props.data.reminderDate.getFullYear()}, to give you a little notice.
            </div>
        );
    }
}
