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
    }

    render() {
        const editable = this.props.editable;
        const editImg =  <input
            type="text"
            onChange={this.handleChangeImg.bind(this)}
            value={this.props.data.img}
        />
        return (
            <div className={BoxStyle.body}>
                <div className={BoxStyle.headerColumn}>
                    <div className={BoxStyle.imgCont}>
                        <img src={this.props.data.img}
                             className={BoxStyle.img}
                        />
                        {editable&&editImg}
                    </div>
                    <div className={BoxStyle.headerContent}>
                        <div className={BoxStyle.title}>
                            <h1
                                contentEditable={this.props.editable}
                                onBlur={this.handleChange.bind(this)}
                            >
                                {this.props.data.title}
                            </h1>
                        </div>
                        <div className={BoxStyle.button}>
                            <div className={BoxStyle.editButton}>
                                <button onClick={this.props.toggleEdit}>Изменить</button>
                            </div>
                            <div className={BoxStyle.deleteButton}>
                                <button onClick={this.props.delete}>Удалить</button>
                            </div>
                        </div>
                    </div>
                </div>

                <Steps
                    update= {this.props.update}
                    data = {this.props.data}
                    editable = {this.props.editable}
                    show={this.props.showBox}
                    close={this.props.close}
                />
                <Components
                    update= {this.props.update}
                    data = {this.props.data}
                    editable = {this.props.editable}

                />

            </div>
        );
    }

}
export default Body;
