import React, { Component } from "react";
import Box from './BoxItem.css'
import marked from "marked";
class Steps extends Component {

    rawMarkup(text) {
        var rawMarkup = marked(text);
        return {__html: rawMarkup };
    }
    render() {
        return (
            <div className={Box.steps}>
                <h2>Способ приготовления:</h2>
                <p
                    dangerouslySetInnerHTML={this.rawMarkup(this.props.data.steps)}
                />
            </div>
        );
    }

}
export default Steps;
