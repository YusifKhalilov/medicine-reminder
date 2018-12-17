import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Select from './Select';
import SetReminder from './SetReminder';

export default class Inputs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            reset: false
        }

        this.resetSelect = this.resetSelect.bind(this);
    }

    resetSelect() {
        this.setState((prevState) => {
            return ({
                reset: !prevState.reset
            })
        })
    }

    render() {
        return (
            <div className="row">
                <div className="row">
                    <div className="col m12 d3 relative">
                        <input id="full-name" type="text" placeholder="Full name" />
                        <span className="input-icon"><FontAwesomeIcon icon="user-circle" /></span>
                    </div>
                    <div className="col d1 hide-on-small"></div>
                    <div className="col m12 d3 relative">
                        <input id="email" type="text" placeholder="Email" />
                        <span className="input-icon"><FontAwesomeIcon icon="at" /></span>
                    </div>
                </div>
                <div className="clear space5 hide-on-small"></div>
                <div className="row">
                    <div className="col m12 d3 relative">
                        <input id="medicine-name" type="text" placeholder="Medicine name" />
                        <span className="input-icon"><FontAwesomeIcon icon="prescription-bottle-alt" /></span>
                    </div>
                    <div className="col d1 hide-on-small"></div>
                    <div className="col m12 d3 relative">
                        <Select name="daysSupply" selectList={['Days supply of RX', 30, 60, 90, 100, 120]} reset={this.state.reset} resetSelect={this.resetSelect} />
                    </div>
                </div>
                <div className="clear space5"></div>
                <SetReminder resetSelect={this.resetSelect} fillInformation={this.props.fillInformation} />
            </div>
        )
    }
}
