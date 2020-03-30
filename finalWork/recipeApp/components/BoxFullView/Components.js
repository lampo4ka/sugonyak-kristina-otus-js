import React, { Component } from "react";
import BoxStyle from './BoxStyle.css'
import marked from 'marked';
class Components extends Component {

    handleChangeComponents(e) {
        const re = /(?:\r\n|\r|\n)/g;
        const string = e.target.innerText.replace(re, '\n\n');
        this.props.update({components: string});
    }

    rawMarkup(text) {
        return {__html: marked(text) };
    }
    render() {
        return (
                <div className={BoxStyle.components}>
                    <h3>Ингредиенты:</h3>
                    <p
                        contentEditable={this.props.editable}
                        onBlur={this.handleChangeComponents.bind(this)}
                        dangerouslySetInnerHTML={this.rawMarkup(this.props.data.components)}
                    />
                </div>
        );
    }

}
export default Components;
