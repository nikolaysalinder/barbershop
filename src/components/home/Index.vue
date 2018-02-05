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
          <a href="#" class="btn btn-map">Как проехать</a>
          <a href="#" class="btn btn-feedback">Обратная связь</a>
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

    };
  },
};
</script>

<style>

</style>
