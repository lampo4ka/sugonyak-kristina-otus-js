<template>
  <div id="app">
    <md-card class="first_card_position card_size">
      <md-card-header>
        <div class="md-title">Привет!</div>
        <div class="md-subhead subhead">Добро пожаловать на N тренировочный день. <br>
          Ваш последний результат - решено N из N. <br>
          Общая точность N %</div>
      </md-card-header>
      <md-card-content>
        <div class="md-title subtitle">Настройки</div>
        <div class="md-title description">Длительность N минут</div>
        <div class="md-title description">Сложность N</div>

        <md-checkbox v-model="checkedNames" id="sum" value="Суммирование"></md-checkbox>
        <md-button class="md-raised md-primary play_button" v-on:click="Play()">Play</md-button>
      </md-card-content>
    </md-card>

    <md-card class="second_card_position card_size">
      <md-card-content>
        <md-button class="md-raised md-primary play_button" v-on:click="Cancel()">Отмена</md-button>
        <md-textarea placeholder="Time"></md-textarea>

      </md-card-content>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function () {
    return {
      checkedNames:String
    }
  },
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

  .subhead {
    padding-top: 15px;
  }

  .md-card .subtitle {
    padding-top: 30px;
    font-size: 17px;
  }

  .md-card .description {
    font-size: 14px;
  }
</style>
