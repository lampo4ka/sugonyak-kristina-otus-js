import React, { Component } from "react";
import Box from './BoxItem/BoxItem.css'
import BoxItem from "./BoxItem/BoxItem";
import BoxItemShort from './BoxItemShort';
import Body from './BoxItem/Body';
import {Route,  BrowserRouter, Link, Switch} from "react-router-dom";

class BoxContainer extends Component {

    constructor() {
        super();
        const data =
            {
                key: 0,
                title: 'Мильфей',
                components: '320-375г готового слоеного теста\n\n3 столовые ложки сахарной пудры, плюс дополнительно для посыпки\n\nсемена из 2-х стручков ванили\n\n600 мл жирных сливок\n\nцедра 1 апельсина\n\n1/2 ст. л. апельсинового ликера, например Grand Marnier\n\n200 г свежей малины',
                steps: 'Раскатайте тесто и положите на противень с антипригарным покрытием. Посыпьте сахарной пудрой и выпекайте в предварительно разогретой духовке в течение 8 минут, затем уменьшите температуру до 200°С и готовьте еще 7-12 минут, пока тесто не станет золотистым и глазированным. Выньте и оставьте остывать на решетке.\n\nТем временем, смешайте семена ванили в сливки. Добавьте 3 столовые ложки сахарной пудры и взбейте смесь до образования мягких пиков. (Не переусердствуйте, иначе расслоится.) Добавьте апельсиновую цедру, ликер и перемешайте лопаточкой.\n\nПереложите сливки в кондитерский мешок с  простой насадкой. Охладите.\n\nКогда тесто остынет, нарежьте его очень аккуратно на 3 равные части хлебным ножом.\n\nСоберите мильфей непосредственно перед подачей на стол. Достаньте из холодильника кондитерский мешок, добавьте каплю сливок на сервировочную тарелку, чтобы она служила "клеем", и положите сверху кусок теста. Нанесите слой крема на тесто и добавьте "бордюр" из малины по внешним краям. Нанесите еще один слой крема внутри малинового бордюра, затем сверху положите еще один слой теста и повторите этапы приготовления. Закончить верхним слоем теста. Подавать сразу, посыпав сахарной пудрой.',
                img: 'https://v.img.com.ua/nxs70/b/600x500/e/6a/17d8a161fd8aec45a59a171e04c616ae.jpg'
            };
        this.state = {
            data,
        };
    }

    getIndex(key) {
        var i = this.state.data.findIndex((element) => {
            if (element.key === key) {
                return true
            }
        });
        return i;
    }

    updateRecipe(key, title, components, steps, img) {
        const data = this.state.data;
        var i = this.getIndex(key);

        this.state.data[i].title = title;
        this.state.data[i].components = components;
        this.state.data[i].steps = steps;
        this.state.data[i].img = img;
        this.saveToLocal();
    }


    render() {
        return (
            <BrowserRouter>
                <div>
                    <BoxItem
                        data = {this.state.data}
                        update={this.updateRecipe.bind(this)}
                    />

                    {/*<Link to='/fullBoxContent/Milfey'>*/}
                    {/*    <BoxItemShort*/}
                    {/*        data = {this.state.data}*/}
                    {/*    />*/}
                    {/*</Link>*/}
                    {/*<div>*/}
                    {/*    <Route*/}
                    {/*        path='/fullBoxContent/Milfey'*/}
                    {/*        render = {*/}
                    {/*            (props) => <BoxItem {...props}*/}
                    {/*                                data={this.state.data}*/}
                    {/*                                update={this.updateRecipe.bind(this)}*/}
                    {/*            />}*/}
                    {/*    />*/}

                    {/*</div>*/}
                </div>
            </BrowserRouter>

        );
    }
}

export default BoxContainer;
