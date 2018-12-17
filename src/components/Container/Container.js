import React, { Component } from 'react';
import Inputs from './Inputs';
import './Input.css';

export default class Content extends Component {
    render() {
        return (
            <div>
                <form id="form">
                    <Inputs fillInformation={this.props.fillInformation} />
                </form>
            </div>
        );
    }
}
