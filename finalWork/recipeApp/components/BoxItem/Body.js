import React, { Component } from "react";
import Box from './BoxItem.css'
import Components from "./Components";
import Steps from "./Steps";

class Body extends Component {

    handleChangeImg(e) {
        this.props.update({img: e.target.value});
    }

    render() {
        return (
            <div className={Box.body}>
                <div>
                    <img src={this.props.data.img}
                         alt='Milfey'
                         className={Box.img}
                    />
                    <div>
                        <div className={Box.title}>
                            <h1>Мильфей</h1>
                        </div>
                        <div className={Box.button}>
                            <button onClick={this.props.toggleEdit}>Edit</button>
                        </div>
                    </div>
                </div>

                <Steps data = {this.props.data}/>
                <Components
                    update= {this.updateRecipe}
                    data = {this.props.data}
                    editFlag = {this.props.toggleEdit}

                />

            </div>
        );
    }

}
export default Body;
