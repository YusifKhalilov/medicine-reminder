import React, { Component } from 'react';

export default class Symptoms extends Component {
    renderSymptoms() {
        return (this.props.data.symptoms.map((symptom, index) => {
            return (
                <div key={index}>
                    *Symptom {index + 1}
                    <p>
                        {symptom.reactionmeddrapt}
                    </p>
                </div>
            );
        }))
    }

    render() {
        return (
            <div className="col m12 d7 greet">
                As a service, here are the possible drug reactions you should contact your doctor
                if you're expereincing:
                {this.renderSymptoms()}
            </div>
        )
    }
}
