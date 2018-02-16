<template>
  <div class="news">
    <app-page-title
    :pageTitle="pageTitle"
    :breadcrumbs="breadcrumbs"></app-page-title>
    <div
    class="inner-page"
    :class="{'inner-height': isMobile}">
      <div
      v-for="item in news"
      :key="item.id"
      class="news-item">
        <figure>
          <img
          :src="item.imgSrc"
          :alt="item.imgAlt">
        </figure>
        <h2>{{ item.title }}</h2>
        <time>{{ item.date }}</time>
        <p>{{ item.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageTitle: 'Новости',
      breadcrumbs: [
        { path: '/', page: 'Главная' },
        { path: '/news', page: 'Новости' },
      ],
      news: [
        {
          id: 1,
          title: 'Мы окрылись!!!',
          content: 'Всем привет мы октрылись и ждем всех в нашем барбершопе! Сделаем крутую бороду и усы! Вообщем носите бороду и усы!',
          imgSrc: './static/img/open.jpg',
          imgAlt: 'Спасибо за сайт',
          date: '20 Ноября',
        },
        {
          id: 2,
          title: 'У нас новый сайт',
          content: 'Спасибо большое web - студии nikolaysalinder.ru за создание нашего сайта! Наши клиенты безумно рады новому сайту и их стало в пятьсот раз больше!',
          imgSrc: './static/img/news-scrin.jpg',
          imgAlt: 'Спасибо за сайт',
          date: '1 Февраля',
        },
        {
          id: 3,
          title: 'Для настоящих мужчин',
          content: 'В современном мире необходимо носить бороду! Ведь борода позволяет, Вам её чесать и гладить! И не для кого не секрет, что женщины любят бороду так сильно, что не могут жить, не восхищяясь ею! Никто из них никогда не сознается, но про себя они всегда повторяют один стих: Борода, борода до чего ж ты хороша! Серьезно, они вам завидуют. А мы знаем, как сделать из бороды произведение искусства, и вам расскажем при встрече! Приходите к нам!',
          imgSrc: './static/img/beard-best.jpg',
          imgAlt: '',
          date: '20 Марта',
        },
      ],
    };
  },
  computed: {
    isMobile() {
      return document.body.parentElement.clientWidth < 500;
    },
  },
  beforeCreate() {
    document.body.classList.add('inner');
  },
};
</script>

<style>
.news .inner-page {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 20px;
}
.news-item {
  background: #fff;
  width: 260px;
  padding: 0px 20px;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 15px 0 rgba(0, 1, 1, 0.2);
}
.news-item figure {
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
}
.news-item h2 {
  display: block;
  top: 140px;
  margin: 0;
  margin-left: -20px;
  padding-top: 5px;
  padding-bottom: 15px;
  padding-left: 10px;
  width: 100%;
  position: absolute;
  background: rgba(256, 256, 256, .4);
  text-shadow: 0px 0px 5px #fff;
}
.news-item time {
  position: absolute;
  color: #000;
  top: 160px;
  right: 20px;
  margin-left: -10px;
  font-style: italic;
  font-size: 12px;
  text-shadow: 0px 0px 5px #fff;
}
.news-item img {
  height: 180px;
  min-width: 300px;
}
.news-item p {
  margin-top: 190px;
}
</style>
