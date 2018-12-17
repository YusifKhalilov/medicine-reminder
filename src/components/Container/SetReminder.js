import React, { Component } from 'react';


export default class SetReminder extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: ''
        }

        this.setReminder = this.setReminder.bind(this);
    }

    setReminder(e) {
        e.preventDefault();
        // firstName: document.querySelector('#full-name').value.split(' ').slice(0, 1).join(' ')
        fetch(`https://api.fda.gov/drug/event.json?search=patient.drug.medicinalproduct:${ document.getElementById('medicine-name').value.trim() }`)
            .then(
                (response) => {
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' +
                            response.status);
                        return;
                    }

                    response.json().then((data) => {
                        this.props.fillInformation({
                            fullName: document.getElementById('full-name').value,
                            email: document.getElementById('email').value,
                            medicineName: document.getElementById('medicine-name').value,
                            daysSupplyOfRX: document.getElementById('days-supply').value,
                            date: new Date(),
                            reminderDate: new Date(new Date().getTime() + ((document.getElementById('days-supply').value - 5) * 24 * 60 * 60 * 1000)),
                            symptoms: data.results[0].patient.reaction.slice(0, 5),
                            isReminderSet: true
                        })
                        document.getElementById('form').reset();
                        this.props.resetSelect();
                    });
                }
            )
            .catch(function (err) {
                console.log('Fetch Error', err);
            });
    }

    render() {
        return (
            <div className="col m12 d7">
                <button className="_info" onClick={this.setReminder}>Set Reminder</button>
            </div>
        );
    }
}
