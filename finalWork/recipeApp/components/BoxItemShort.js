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

    render() {
        return (
            <div className={BoxShort.boxItemSort}>
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
