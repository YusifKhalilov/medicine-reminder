import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Select extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedValue: this.props.selectList[0],
            selectList: this.props.selectList,
            showList: false,
            reset: this.props.reset
        }

        this.name = this.props.name;

        this.showList = this.showList.bind(this);
        this.renderSelect = this.renderSelect.bind(this);
        this.selectValue = this.selectValue.bind(this);
        this.resetSelect = this.resetSelect.bind(this);
    }

    showList() {
        this.setState(prevState => {
            return { showList: !prevState.showList }
        })
    }

    componentWillReceiveProps() {
        if (!this.props.reset) {
            this.resetSelect();
            this.props.resetSelect();
        }
    }

    selectValue(value) {
        this.setState({
            selectedValue: value
        }, () => {
            this.showList();
        })
    }

    resetSelect() {
        this.setState({
            selectedValue: this.props.selectList[0],
            reset: false
        })
    }

    renderSelect() {
        return (
            this.state.selectList.map((value, index) => {
                return (
                    <div className="option" key={value + '_'} onClick={index === 0 ? null : () => this.selectValue(value)}>{value}</div>
                )
            })
        );
    }

    render() {
        return (
            <div className="select-custom">
                <div
                    className="select-input-default"
                    type="text"
                    onClick={this.showList}>
                    {this.state.selectedValue}
                    <span className="select-icon">
                        <FontAwesomeIcon icon={this.state.showList ? 'angle-up' : 'angle-down'} />
                    </span>
                </div>
                <div className={this.state.showList ? '' : 'hide'}>{this.renderSelect()}</div>
                <input id="days-supply" name={this.props.name} type="hidden" value={this.state.selectedValue} />
            </div>
        )
    }
}
