<template>
  <div class="inner-page">
    <div class="inner-page-title">
      <h1>Прайс-лист</h1>
      <ul class="breadcrumbs">
        <li>
          <a href="index.html">Главная</a>
        </li>
        <li>
          <a class="current">Прайс-лист</a>
        </li>
      </ul>
    </div>
    <div class="inner-content">
      <div class="big-heading">
        <h2>Истинно мужская классика</h2>
      </div>
      <div class="inner-columns clearfix">
        <div class="inner-column-left">
          <h2>Мы используем только лучшие средства:</h2>
          <ul class="custom-list-1">
            <li>Baxter of California</li>
            <li>Mr Natty</li>
            <li>Suavecito</li>
            <li>Malin+Goetz</li>
          </ul>
        </div>
        <div class="inner-column-right">
          <h2>Цены на услуги наших мастеров:</h2>
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
    };
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
.inner-page-title {
}
.inner-page-title h1{
  margin: 0;
  margin-bottom: 15px;
  padding: 0;
  font-size: 30px;
  line-height: 42px
}
.breadcrumbs {
  margin: 0;
  padding: 0;
  list-style: none;
}
.breadcrumbs li {
  position: relative;
  display: inline;
  padding-right: 37px;
}
.breadcrumbs a {
  color: #000000;
  text-decoration: none;
}
.breadcrumbs a:hover {
  text-decoration: underline;
}
.breadcrumbs .current {
  color: #aba9a7;
}
.breadcrumbs .current:hover {
  text-decoration: none;
}
.breadcrumbs li::after {
  content: "";
  position: absolute;
  top: 4px;
  right: 13px;
  width: 8px;
  height: 8px;

  background-color: #000;
  transform: rotate(45deg);
}
.breadcrumbs li:last-child::after {
  display: none;
}
.inner-content {
  margin-bottom: 75px;
}
.inner-content h2 {
  margin-top: 60px;
  font-size: 24px;
  line-height: 30px;
}
.big-heading {
  margin-bottom: 65px;
  text-align: center;
}
.big-heading h2 {
  position: relative;
  display: inline-block;
  margin-top: 45px;
  padding: 0 26px;
  font-size: 48px;
  line-height: 48px;
  z-index: 10;
  background: #f8f3f0 url('../../assets/img/inner-bg.png')
}
.big-heading::after {
  content: "";
  position: relative;
  display: block;
  border-bottom: 2px solid #000;
  top: -64px;
  z-index: 1;
}
.custom-list {
  margin: 14px 0;
  padding: 0;
  list-style: none;
}
.custom-list li {
  position: relative;
  margin-bottom: 15px;
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
  padding: 10px 15px;
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
</style>
