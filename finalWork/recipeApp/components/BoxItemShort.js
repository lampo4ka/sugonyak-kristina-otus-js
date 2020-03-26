import React, { Component } from "react";
import BoxShort from './BoxItemShort.css'

class BoxItemShort extends Component {

    constructor() {
        super();
        this.state = {
            index: true,
            editable: false,
        }
    }

    handleClick() {
        this.props.show(this.props.data.key);
    }

    render() {
        return (
            <div className={BoxShort.boxItemShort} onClick={this.handleClick.bind(this)}>
                <div>
                    <img src={this.props.data.img}
                         alt='Milfey'
                         className={BoxShort.img}
                    />
                </div>
                <div className={BoxShort.title}>
                    <h1>{this.props.data.title}</h1>
                </div>
            </div>
        );
    }
}

export default BoxItemShort;
