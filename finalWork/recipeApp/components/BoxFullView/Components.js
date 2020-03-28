import React, { Component } from "react";
import BoxStyle from './BoxStyle.css'
import marked from 'marked';
class Components extends Component {

    handleChangeComponents(e) {
        const re = /(?:\r\n|\r|\n)/g;
        const str = e.target.innerText.replace(re, '\n\n');
        this.props.update({components: str});
    }

    rawMarkup(text) {
        var rawMarkup = marked(text);
        return {__html: rawMarkup };
    }
    render() {
        const editable = this.props.editable;
        return (
                <div className={BoxStyle.components}>
                    <h3>Ингредиенты:</h3>
                    <p
                        contentEditable={editable}
                        onBlur={this.handleChangeComponents.bind(this)}
                        dangerouslySetInnerHTML={this.rawMarkup(this.props.data.components)}
                    />
                </div>
        );
    }

}
export default Components;
