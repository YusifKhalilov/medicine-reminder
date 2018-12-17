import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleUp, faAngleDown, faUserCircle, faAt, faPrescriptionBottleAlt } from '@fortawesome/free-solid-svg-icons';

import Header from './components/Header/Header';
import Container from './components/Container/Container';
import Logo from './components/Logo/Logo';
import ReminderInfo from './components/ReminderInfo/ReminderInfo';

library.add(faAngleUp, faAngleDown, faUserCircle, faAt, faPrescriptionBottleAlt);

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fullName: '',
            email: '',
            medicineName: '',
            daysSupplyOfRX: 0,
            date: new Date(),
            reminderDate: new Date(),
            symptoms: [],
            isReminderSet: false
        }

        this.fillInformation = this.fillInformation.bind(this);
    }

    fillInformation(obj) {
        this.setState(obj)
    }

    render() {
        return (
            <div className="App container relative">
                <Logo />
                <Header />
                <div className="margin-header"></div>
                <Container fillInformation={this.fillInformation} />
                {this.state.isReminderSet ? <ReminderInfo data={this.state} /> : ''}
            </div>
        );
    }
}

export default App;
