import React, { Component } from "react";
import BoxPreviewStyle from './BoxPreviewStyle.css'

class BoxPreview extends Component {

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
            <div className={BoxPreviewStyle.boxPreview} onClick={this.handleClick.bind(this)}>
                <div>
                    <img src={this.props.data.img}
                         alt='Milfey'
                         className={BoxPreviewStyle.img}
                    />
                </div>
                <div className={BoxPreviewStyle.title}>
                    <h1>{this.props.data.title}</h1>
                </div>
            </div>
        );
    }
}

export default BoxPreview;
