<template>
  <div id="app">
    <app-header></app-header>
    <main class="container clearfix">
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
          <div class="index-contacts">
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
          <div class="index-signing">
            <h2 class="index-content-title">Записаться</h2>
            <p class="index-signing-text">
              Укажите желаемую дату и время и мы свяжемся
              с вами для подтверждения брони
            </p>
            <form class="appointment-form" action="" method="post">
              <label for="form-date">Дата</label>
              <label for="form-time">Время</label>
              <input
                id="form-date"
                name="date"
                type="text" placeholder="11.11.11"
                v-model="appointment.date">
              <input
                id="form-time"
                name="time"
                type="text" placeholder="11:12"
                v-model="appointment.time">
              <label for="form-name">Ваше имя</label>
              <label for="form-phone">Телефон</label>
              <input
                id="form-name"
                name="name"
                type="text"
                placeholder="Борода"
                v-model="appointment.name">
              <input
                id="form-phone"
                name="phone"
                type="text"
                placeholder="8 911 111 11 11"
                v-model="appointment.phone">
              <button class="btn btn-sign" type="submit">Отправить</button>
            </form>
          </div>
        </div>
      </app-index-content>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      appointment: {
        date: '',
        time: '',
        name: '',
        phone: '',
      },
    };
  },
};
</script>

<style>
body {
  background: #000 url("assets/img/index-bg.jpg");
  background-position: 50% 40px;
  background-size: 2520px;
  background-repeat: no-repeat;
  font-family: "PT Sans Narrow", "Arial", sans-serif;
  font-size: 14px;
  line-height: 24px;
  font-weight: 700;
  font-kerning: none;
  text-transform: uppercase;
  color: #fff;
  margin: 0;
  padding: 0;
  min-width: 960px;

}
/*стили для разработки*/
/*div, li, nav, ul, header, footer, .container, figure {
  outline: 1px solid green;
}*/
/*стили для разработки*/

.container {
  width: 940px;
  padding: 0 10px;
  margin: 0 auto;
}
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}
.btn {
  display: inline-block;
  padding: 10px 33px;
  color: #fff;
  background: #000;
  border: 0;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  line-height: 1.65;
  letter-spacing: 0.20pt;
  transition: background .5s;
}
.btn:hover {
  background: #663d15;
}
input:hover {
  border: 3px #663d15;
}
</style>

