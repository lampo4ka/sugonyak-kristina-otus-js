import React, { Component } from "react";
import BoxStyle from './BoxStyle.css'
import marked from "marked";
class Steps extends Component {

    // редактировать раздел способ приготовления
    handleChangeSteps(e) {
        const string = (toMarkdown(e.target.innerHTML));
        this.props.update({steps: string});
    }

    rawMarkup(text) {
        return {__html: marked(text) };
    }

    render() {
        return (
            <div className={BoxStyle.steps}>
                <div className={BoxStyle.closeButton}>
                    <button onClick={this.props.close}>X</button>
                </div>
                <div>
                    <h2>Способ приготовления:</h2>
                    <p
                        contentEditable={this.props.editable}
                        onBlur={this.handleChangeSteps.bind(this)}
                        dangerouslySetInnerHTML={this.rawMarkup(this.props.data.steps)}
                    />
                </div>
            </div>
        );
    }

}
export default Steps;
