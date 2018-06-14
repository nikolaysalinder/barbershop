<template>
  <div class="info">
    <app-page-title
    :pageTitle="pageTitle"
    :breadcrumbs="breadcrumbs"></app-page-title>
    <div
    class="inner-content"
    :class="{'inner-height': isMobile}">
      <div
      class="info-item"
      v-for="info in infos"
      :key="info.num">
        <h2>{{ info.title }}</h2>
        <img :src="info.imgSrc" :alt="info.title">
        <p>{{ info.content }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pageTitle: 'Информация',
      breadcrumbs: [
        { path: '/', page: 'Главная' },
        { path: '/informations', page: 'Информация' },
      ],
      infos: [
        { num: 1,
          title: 'Уход за бородой',
          imgSrc: './static/img/info-1.jpg',
          content: 'Мы все носим бороду! У кого то она большая, а у кого то она маленькая. Но мы редко задумываемся о том, как правильно ухаживать за своими сокровищами! В первую очередь необходимо встать перед зеркалом и начать хвалить бороду! Какая ты прекрасная! Какая ты  восхитительная! После десяти двадцати хвалебных слов необходимо взять глину для бороды «AMERICAN CREW» и намазать её на увлажненную бороду. Через несколько секунд придать бороде необходимую форму и готово! Кстати глину вы можете купить в нашем магазе или заказать прямо на сайте!' },
        { num: 2,
          title: 'С чего все начиналось',
          imgSrc: './static/img/info-2.jpg',
          content: 'Все мужчины Древнего Египта брили бороду. Правом носить бороду обладал только фараон (в знак своего владения землёй), но его борода была искусственной. Её, как и парик, делали из шерсти или из срезанных волос, перевитых золотыми нитями, и подвязывали к подбородку шнурком. Этой церемониальной бороде могли придавать разные формы, но самой распространённой была загнутая на конце косичка, похожая на кошачий хвост[1]. Александр Македонский приказывал своим солдатам сбривать бороду, чтобы вражеский воин не мог схватить за неё в ходе сражения. В Римской империи бритое лицо и короткая стрижка были одними из признаков цивилизованности и выделяли римлянина из «диких» народов. Конец этой традиции положил император Адриан. Кубинские повстанцы против режима Батисты во главе с Ф. Кастро были известны как «барбудос» — бородатые.' },
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
.info {
  width: 960px;
  margin-left: auto;
  margin-right: auto;
}
.inner-height {
  height: 1400px;
}
.info .info-item {
  background: #fff;
  border-radius: 2px;
  padding: 1px 20px;
  box-shadow: 0 0 15px 0 rgba(0, 1, 1, 0.2);
  margin-bottom: 20px;
}
.info h2 {
  margin-bottom: 30px;
  margin-left: 30px;
}
.info-item img {
  float: left;
  width: 190px;
  margin: 0;
  padding-right: 20px;
  padding-bottom: 10px;
}
</style>
