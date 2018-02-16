<template>
  <div class="price">
    <app-page-title
    :pageTitle="pageTitle"
    :breadcrumbs="breadcrumbs"></app-page-title>
    <div
    class="inner-content"
    :class="{'inner-height': isMobile}">
      <div class="big-heading">
        <h2>Истинно мужская классика</h2>
      </div>
      <div class="inner-columns clearfix">
        <div class="inner-column-left">
          <h2>Мы используем только<br>
           лучшие средства:</h2>
          <ul class="custom-list">
            <li>Baxter of California</li>
            <li>Mr Natty</li>
            <li>Suavecito</li>
            <li>Malin+Goetz</li>
          </ul>
        </div>
        <div class="inner-column-right">
          <h2>Цены на услуги<br>
           наших мастеров:</h2>
          <table class="prices-table">
            <tr>
              <td>Стрижка</td>
              <td>1500 р.</td>
            </tr>
            <tr>
              <td>Стрижка бороды</td>
              <td>500 р.</td>
            </tr>
            <tr>
              <td>Накрутка усов</td>
              <td>350 р.</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="inner-columns clearfix">
        <h2>Несколько слов о нас:</h2>
        <div class="inner-column-left">
          <p>Наша парикмахерская занимается исключительно
            мужскими стрижками. Стрижка каждого клиента для
            нас — это уникальная и продуманная до мелочей
            работа. Мы не работаем на количество, мы делаем
          качество.</p>
        </div>
        <div class="inner-column-right">
          <p>Наша мастерская расположена в центре города,
            поэтому сделать стильную стрижку можно в любое
            время, даже в обеденный перерыв. Здесь вы можете
            погрузиться в удобную для вас атмосферу,
          чувствовать себя комфортно и свободно!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      pageTitle: 'Прайс-лист',
      breadcrumbs: [
        { path: '/', page: 'Главная' },
        { path: '/price', page: 'Прайс-лист' },
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
.inner-page {
  margin-top: -8px;
  padding: 0
}
.inner-content {
  margin-bottom: 75px;
}
.inner-content h2 {
  margin-top: 35px;
  margin-bottom: 35px;
  font-size: 24px;
  line-height: 30px;
}
.big-heading {
  text-align: center;
}
.big-heading h2 {
  position: relative;
  display: inline-block;
  margin-bottom: 60px;
  padding: 0 26px;
  font-size: 48px;
  line-height: 48px;
  z-index: 2;
  background: #f8f3f0 url('../../assets/img/inner-bg.png')
}
.big-heading::after {
  content: "";
  position: relative;
  display: block;
  border-bottom: 2px solid #000;
  top: -83px;
  z-index: 1;
}
.custom-list {
  margin: 0;
  padding: 0;
  margin-top: -10px;
  list-style: none;
}
.custom-list li {
  position: relative;
  margin-bottom: 14px;
  padding-left: 20px;
}
.custom-list li::before {
  content: "";
  position: absolute;
  top: 8px;
  left: 0;
  width: 8px;
  height: 8px;
  background-color: #000000;
  transform: rotate(45deg);
}
.inner-content table {
  border-collapse: collapse;
}
.inner-content td {
  padding: 7px 15px;
  border: 2px solid #000000;
}
.prices-table {
  width: 100%;
}
.prices-table td {
  width: 50%;
}
.prices-table td:last-child {
  text-align: center;
}
.inner-column-left,
.inner-column-right {
  width: 460px;
}
.inner-column-left {
  float: left;
}
.inner-column-right {
  float: right;
}
.inner-column-left *:first-child,
.inner-column-right *:first-child {
  margin-top: 0;
}
.inner-column-left *:last-child,
.inner-column-right *:last-child {
  margin-bottom: 0;
}
</style>
