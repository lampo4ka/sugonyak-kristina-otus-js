import React, { Component } from "react";
import BoxStyle from './BoxStyle.css'
import marked from "marked";
class Steps extends Component {

    handleChangeSteps(e) {
        const re = /(?:\r\n|\r|\n)/g;
        const str = (toMarkdown(e.target.innerHTML));
        this.props.update({steps: str});
    }

    rawMarkup(text) {
        var rawMarkup = marked(text);
        return {__html: rawMarkup };
    }

    render() {
        const editable = this.props.editable;
        return (
            <div className={BoxStyle.steps}>
                <div className={BoxStyle.closeButton}>
                    <button onClick={this.props.close}>X</button>
                </div>
                <div>
                    <h2>Способ приготовления:</h2>
                    <p
                        contentEditable={editable}
                        onBlur={this.handleChangeSteps.bind(this)}
                        dangerouslySetInnerHTML={this.rawMarkup(this.props.data.steps)}
                    />
                </div>
            </div>
        );
    }

}
export default Steps;
