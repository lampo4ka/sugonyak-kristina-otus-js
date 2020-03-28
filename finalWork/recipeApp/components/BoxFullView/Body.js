import React, { Component } from "react";
import BoxStyle from './BoxStyle.css'
import Components from "./Components";
import Steps from "./Steps";

class Body extends Component {

    handleChangeImg(e) {
        this.props.update({img: e.target.value});
    }

    handleChange(e) {
        this.props.update({title: e.target.innerText});
        console.log(this.props.title)
    }

    render() {
        console.log(this.props)
        const editable = this.props.editable;
        const editImg =  <input
            type="text"
            onChange={this.handleChangeImg.bind(this)}
            value={this.props.data.img}
        />
        return (
            <div className={BoxStyle.body}>
                <div>
                    <img src={this.props.data.img}
                         alt='Milfey'
                         className={BoxStyle.img}
                         contentEditable={this.props.editable}
                    />
                    {editable&&editImg}
                    <div>
                        <div className={BoxStyle.title}>
                            <h1
                                contentEditable={this.props.editable}
                                onBlur={this.handleChange.bind(this)}
                            >
                                {this.props.data.title}
                            </h1>
                        </div>
                        <div className={BoxStyle.button}>
                            <button onClick={this.props.toggleEdit}>Edit</button>
                        </div>
                        <div className={BoxStyle.button}>
                            <button onClick={this.props.delete}>Delete</button>
                        </div>
                    </div>
                </div>

                <Steps
                    update= {this.updateRecipe}
                    data = {this.props.data}
                    editable = {this.props.editable}
                    show={this.props.showBox}
                    close={this.props.close}
                />
                <Components
                    update= {this.updateRecipe}
                    data = {this.props.data}
                    editable = {this.props.editable}

                />

            </div>
        );
    }

}
export default Body;
