import React, { Component } from 'react';

import Greeting from './Greeting';
import Symptoms from './Symptoms';

export default class ReminderInfo extends Component {
    render() {
        return (
            <div>
                <Greeting data={this.props.data} />
                <Symptoms data={this.props.data} />
            </div>
        );
    }
}
