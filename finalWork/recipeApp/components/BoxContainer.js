import React, { Component } from "react";
import Box from "./BoxFullView/Box";
import BoxPreview from './BoxPreview/BoxPreview';
import BoxPreviewStyle from './BoxPreview/BoxPreviewStyle.css';
import Header from "./BoxFullView/Header";


class BoxContainer extends Component {

    constructor() {
        super();
        const storedData = localStorage.getItem('stores');
        if(storedData) {
            var data = JSON.parse(storedData);
        } else {
            data = [
                {
                    key: 0,
                    title: 'Мильфей',
                    components: '320-375г готового слоеного теста\n\n3 столовые ложки сахарной пудры, плюс дополнительно для посыпки\n\nсемена из 2-х стручков ванили\n\n600 мл жирных сливок\n\nцедра 1 апельсина\n\n1/2 ст. л. апельсинового ликера, например Grand Marnier\n\n200 г свежей малины',
                    steps: 'Раскатайте тесто и положите на противень с антипригарным покрытием. Посыпьте сахарной пудрой и выпекайте в предварительно разогретой духовке в течение 8 минут, затем уменьшите температуру до 200°С и готовьте еще 7-12 минут, пока тесто не станет золотистым и глазированным. Выньте и оставьте остывать на решетке.\n\nТем временем, смешайте семена ванили в сливки. Добавьте 3 столовые ложки сахарной пудры и взбейте смесь до образования мягких пиков. (Не переусердствуйте, иначе расслоится.) Добавьте апельсиновую цедру, ликер и перемешайте лопаточкой.\n\nПереложите сливки в кондитерский мешок с  простой насадкой. Охладите.\n\nКогда тесто остынет, нарежьте его очень аккуратно на 3 равные части хлебным ножом.\n\nСоберите мильфей непосредственно перед подачей на стол. Достаньте из холодильника кондитерский мешок, добавьте каплю сливок на сервировочную тарелку, чтобы она служила "клеем", и положите сверху кусок теста. Нанесите слой крема на тесто и добавьте "бордюр" из малины по внешним краям. Нанесите еще один слой крема внутри малинового бордюра, затем сверху положите еще один слой теста и повторите этапы приготовления. Закончить верхним слоем теста. Подавать сразу, посыпав сахарной пудрой.',
                    img: 'https://v.img.com.ua/nxs70/b/600x500/e/6a/17d8a161fd8aec45a59a171e04c616ae.jpg'
                },
                {
                    key: 1,
                    title: 'Чизкейк',
                    components: '320-375г готового слоеного теста\n\n3 столовые ложки сахарной пудры, плюс дополнительно для посыпки\n\nсемена из 2-х стручков ванили\n\n600 мл жирных сливок\n\nцедра 1 апельсина\n\n1/2 ст. л. апельсинового ликера, например Grand Marnier\n\n200 г свежей малины',
                    steps: 'Раскатайте тесто и положите на противень с антипригарным покрытием. Посыпьте сахарной пудрой и выпекайте в предварительно разогретой духовке в течение 8 минут, затем уменьшите температуру до 200°С и готовьте еще 7-12 минут, пока тесто не станет золотистым и глазированным. Выньте и оставьте остывать на решетке.\n\nТем временем, смешайте семена ванили в сливки. Добавьте 3 столовые ложки сахарной пудры и взбейте смесь до образования мягких пиков. (Не переусердствуйте, иначе расслоится.) Добавьте апельсиновую цедру, ликер и перемешайте лопаточкой.\n\nПереложите сливки в кондитерский мешок с  простой насадкой. Охладите.\n\nКогда тесто остынет, нарежьте его очень аккуратно на 3 равные части хлебным ножом.\n\nСоберите мильфей непосредственно перед подачей на стол. Достаньте из холодильника кондитерский мешок, добавьте каплю сливок на сервировочную тарелку, чтобы она служила "клеем", и положите сверху кусок теста. Нанесите слой крема на тесто и добавьте "бордюр" из малины по внешним краям. Нанесите еще один слой крема внутри малинового бордюра, затем сверху положите еще один слой теста и повторите этапы приготовления. Закончить верхним слоем теста. Подавать сразу, посыпав сахарной пудрой.',
                    img: 'https://i.pinimg.com/564x/81/53/c7/8153c73e229444d86da2d4c305aa2193.jpg'
                },
                {
                    key: 2,
                    title: 'Брауни',
                    components: '320-375г готового слоеного теста\n\n3 столовые ложки сахарной пудры, плюс дополнительно для посыпки\n\nсемена из 2-х стручков ванили\n\n600 мл жирных сливок\n\nцедра 1 апельсина\n\n1/2 ст. л. апельсинового ликера, например Grand Marnier\n\n200 г свежей малины',
                    steps: 'Раскатайте тесто и положите на противень с антипригарным покрытием. Посыпьте сахарной пудрой и выпекайте в предварительно разогретой духовке в течение 8 минут, затем уменьшите температуру до 200°С и готовьте еще 7-12 минут, пока тесто не станет золотистым и глазированным. Выньте и оставьте остывать на решетке.\n\nТем временем, смешайте семена ванили в сливки. Добавьте 3 столовые ложки сахарной пудры и взбейте смесь до образования мягких пиков. (Не переусердствуйте, иначе расслоится.) Добавьте апельсиновую цедру, ликер и перемешайте лопаточкой.\n\nПереложите сливки в кондитерский мешок с  простой насадкой. Охладите.\n\nКогда тесто остынет, нарежьте его очень аккуратно на 3 равные части хлебным ножом.\n\nСоберите мильфей непосредственно перед подачей на стол. Достаньте из холодильника кондитерский мешок, добавьте каплю сливок на сервировочную тарелку, чтобы она служила "клеем", и положите сверху кусок теста. Нанесите слой крема на тесто и добавьте "бордюр" из малины по внешним краям. Нанесите еще один слой крема внутри малинового бордюра, затем сверху положите еще один слой теста и повторите этапы приготовления. Закончить верхним слоем теста. Подавать сразу, посыпав сахарной пудрой.',
                    img: 'https://v.img.com.ua/nxs267/b/600x500/7/ed/f0c06ecbd0daf8e34cf12f2f75840ed7.jpg'
                }
            ];
        }
        this.state = {
            data,
            showBox:false,
            index:0
        };
    }

    getIndex = (key) => {
        return this.state.data.findIndex((element) => {
            if (element.key === key) {
                return true
            }
        });
    };

    addRecipe = (title, components, steps, img) => {
        const newKey = this.state.data.length + 1;
        const newRecipe = {
            key: newKey,
            title: title,
            components: components,
            steps: steps,
            img: img,
        };
        this.state.data.push(newRecipe);
        this.forceUpdate();
    };

    updateRecipe = (key, title, components, steps, img) => {
        const i = this.getIndex(key);
        this.state.data[i].title = title;
        this.state.data[i].components = components;
        this.state.data[i].steps = steps;
        this.state.data[i].img = img;
        this.saveToStorage();
    };

    deleteRecipe = (key) => {
        const i = this.getIndex(key);
        this.state.data.splice(i, 1);
        this.closeBox();
    };

    closeBox = () => {
        this.setState({showBox:false})
    };

    showBox = (key) => {
        const currentIndex = this.getIndex(key);
        this.setState({
            index: currentIndex,
            showBox: !this.state.showBox,
        });
    };

    saveToStorage = () => {
        localStorage.setItem('stores', JSON.stringify(this.state.data));
    };

    render() {
        // список рецептов при отрытии страницы
        const boxPreview = this.state.data.map((dataItem) => {
           return (<BoxPreview
               data = {dataItem}
               key = {dataItem.key}
               show = {this.showBox.bind(this)}
           />)
        });
        if(this.state.showBox){
            // полный вид карточки страницы
            var boxFullView =
                    <Box
                        data = {this.state.data[this.state.index]}
                        update={this.updateRecipe.bind(this)}
                        close={this.closeBox.bind(this)}
                        show={this.state.showBox}
                        delete = {this.deleteRecipe.bind(this)}
                    />;

        }
        return (
                <div className={BoxPreviewStyle.container}>
                    {boxFullView}
                    <div className={BoxPreviewStyle.boxContainer}>
                        <div className={BoxPreviewStyle.header}>
                            <Header add={this.addRecipe.bind(this)}/>
                        </div>
                        {boxPreview}
                    </div>
                </div>

        );
    }
}

export default BoxContainer;
