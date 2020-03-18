import React, { Component } from "react";
import Box from './BoxItem.css'
import marked from "marked";
class Steps extends Component {

    handleChangeSteps(e) {
        // Change steps to html of editable elements
        const re = /(?:\r\n|\r|\n)/g;
        const str = (toMarkdown(e.target.innerHTML));
        this.props.update({steps: str});
    }

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
