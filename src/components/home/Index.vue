<template>
  <div>
    <app-index-logo></app-index-logo>
    <app-features></app-features>
    <app-index-content>
      <div slot="index-content-left" class="index-content-left">
        <h2 class="index-content-title">Новости</h2>
        <ul class="news-preview">
          <li>
            <p>
              Нам наконец завезли ягермайстер!
              Теперь Вы можете пропустить стаканчик во время стрижки
            </p>
            <time datetime="2016-01-11">11 января</time>
          </li>
          <li>
            <p>
              В нашей команде пополнение,
              Борис «Бритва» Стригунец, обладатель множества
              титулов и наград пополнил наши стройные ряды
            </p>
            <time datetime="2016-01-18">18 января</time>
          </li>
        </ul>
        <a href="#" class="btn">Все новости</a>
      </div>
      <div slot="index-content-right" class="index-content-right">
        <h2 class="index-content-title">Фотогалерея</h2>
        <app-gallery></app-gallery>
      </div>
    </app-index-content>
    <app-index-content>
      <div slot="index-content-left" class="index-content-left">
        <div id="index-contacts">
          <h2 class="index-content-title">Контактная информация</h2>
          <p class="index-content-contacts">
            Барбершоп «Бородинский»<br>
            адрес: г. Санкт-Петербург, Б. Конюшенная,д. 19/8<br>
            телефон: +7 (495) 666-02-66
          </p>
          <p class="index-content-open">
            Время работы:<br>
            Пн&#8212;Пт: с 10:00 до 22:00<br>
            Сб&#8212;Вс: с 10:00 до 19:00
          </p>
          <a
          class="btn btn-map"
          @click="showMap = true">Как проехать</a>
          <app-modal
          v-if="showMap"
          :showMap="showMap"
          @close="showMap = false">
            <img src="./../../assets/img/map.png" height="560" width="766">
          </app-modal>
          <a href="#" class="btn btn-feedback disabled">Обратная связь</a>
        </div>
      </div>
      <div slot="index-content-right" class="index-content-right">
        <app-index-signing></app-index-signing>
      </div>
    </app-index-content>
  </div>
</template>

<script>

export default {
  data() {
    return {
      showMap: false,
    };
  },
  beforeCreate() {
    document.body.className = 'index';
  },
  beforeDestroy() {
    document.body.classList.remove('index');
  },
};
</script>

<style>
.index {
  background: #000 url("./../../assets/img/index-bg.jpg");
  background-position: 50% 0;
  background-size: 2520px;
  background-repeat: no-repeat;
}
#map {
  display: block;
  top: 0;
  left: 0;
  width: 400px;
  height: 5000px;
}
</style>
