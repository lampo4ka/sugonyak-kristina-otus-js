<template>
  <div id="app">
    <md-card class="first_card_position card_size">
      <md-card-header class="content">
        <div class="md-title content">Привет!</div>
        <div class="md-subhead subhead content">Добро пожаловать на N тренировочный день. <br>
          Ваш последний результат - решено N из N. <br>
          Общая точность N %</div>
      </md-card-header>
      <md-card-content class="content">
        <div class="md-title subtitle">Настройки</div>
        <div>
          <div class="slider_value">
            <div>1</div>
            <div class="max_slider_value">15</div>
          </div>
          <div class="slidecontainer">
            <input type="range" min="1" max="15" value="5">
          </div>
        </div>

        <div class="md-title description">Длительность N минут</div>
        <div class="slider_value">
          <div>1</div>
          <div class="max_slider_value">10</div>
        </div>
        <div class="slidecontainer">
          <input type="range" min="1" max="10" value="5" list="tickmarkslevel">
        </div>
        <div class="md-title description">Сложность N</div>

        <div class="checkbox">
          <md-checkbox v-model="array" value="1">Суммирование</md-checkbox>
          <md-checkbox v-model="array" value="2">Разность</md-checkbox>
          <md-checkbox v-model="array" value="3">Умножение</md-checkbox>
          <md-checkbox v-model="array" value="4">Деление</md-checkbox>
          <md-checkbox v-model="array" value="5">Возведение в степень</md-checkbox>
        </div>

        <div class="button">
          <md-button class="md-raised md-primary play_button" v-on:click="Play()">Play</md-button>
        </div>
      </md-card-content>
    </md-card>

    <md-card class="second_card_position card_size">
      <md-card-content class="content">
        <div class="button">
          <div class="timer">{{h}}:{{m}}</div>
          <md-button class="md-raised md-primary" v-on:click="Cancel()">Отмена</md-button>
        </div>
        <div class="enter"></div>
        <div class="container">
          <md-button class="md-raised md-primary play_field_button button_1" v-on:click="Play()">1</md-button>
          <md-button class="md-raised md-primary play_field_button button_2" v-on:click="Play()">2</md-button>
          <md-button class="md-raised md-primary play_field_button button_3" v-on:click="Play()">3</md-button>
          <md-button class="md-raised md-primary play_field_button button_<" v-on:click="Play()"><</md-button>
          <md-button class="md-raised md-primary play_field_button button_4" v-on:click="Play()">4</md-button>
          <md-button class="md-raised md-primary play_field_button button_5" v-on:click="Play()">5</md-button>
          <md-button class="md-raised md-primary play_field_button button_6" v-on:click="Play()">6</md-button>
          <md-button class="md-raised md-primary play_field_button button_>" v-on:click="Play()"><</md-button>
          <md-button class="md-raised md-primary play_field_button button_7" v-on:click="Play()">7</md-button>
          <md-button class="md-raised md-primary play_field_button button_8" v-on:click="Play()">8</md-button>
          <md-button class="md-raised md-primary play_field_button button_9" v-on:click="Play()">9</md-button>
          <md-button class="md-raised md-primary play_field_button button_?" v-on:click="Play()">?</md-button>
          <md-button class="md-raised md-primary play_field_button button_0" v-on:click="Play()">0</md-button>
          <md-button class="md-raised md-primary play_field_button button_last" v-on:click="Play()">=</md-button>
        </div>

      </md-card-content>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'RegularCheckboxes',
  data: () => ({
    array: [],
    h: new Date().getHours(),
    m: new Date().getMinutes()
  })
}
</script>

<style lang="stylus">
  .first_card_position {
    margin-left: 260px;
    margin-top: 100px;
  }

  .second_card_position {
    position: absolute;
    right: 260px;
    top: 0;
  }

  .card_size {
    width: 450px;
    height: 600px;
  }

  .content {
    margin-left: 30px;
  }

  .subhead {
    padding-top: 15px;
  }

  .md-card .subtitle {
    padding-top: 30px;
    font-size: 17px;
  }

  .md-card .description {
    font-size: 12px;
  }
  .slider_value {
    height: 16px;
  }
  .slider_value div{
    display: inline-block;
    font-size: 12px;
  }
  .slidecontainer {
    width: 100%;
  }
  .max_slider_value {
    margin-left: 107px;
  }
  .labelright {
    position: absolute;
  }
  .checkbox {
    margin-top: 25px;
  }
  .md-checkbox {
    display: flex;
  }
  .md-checkbox {
    margin: 12px 12px 12px 0;
  }
  .button {
    position: relative;
  }
  .play_button {
    position: absolute;
    right: 10px;
  }
  .content .timer {
    position: absolute;
    right: 10px;
    top: 7px;
    width: 95px;
    height: 36px;
    border: solid 2px;
    border-color: #2b81af;
    border-right: solid 25px #2b81af;
    text-align: center;
    font-size: 15px;
  }
  .enter {
    width: 160px;
    height: 80px;
    border: solid 1px;
    margin: 50px auto;
  }

  .container {
    margin-left: 45px;
    margin-top: 100px;
    display: grid;
    align-items: center;
    justify-items: center;
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    grid-template-columns: 60px 60px 60px 60px;
    grid-template-rows: 60px 60px 60px 60px;
    grid-auto-flow: row;
  }
  .button_0 {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 4;
    grid-row-end: 5;
  }
  .button_last {
    grid-column-start: 4;
    grid-column-end: 5;
    grid-row-start: 4;
    grid-row-end: 5;
  }
  .play_field_button {
    min-width: 40px;
    height: 40px;
    border-radius: 20px;
    background: #9b859d;
    font-size: 16px;
    font-weight: bold;
    margin: 0;
  }

</style>
