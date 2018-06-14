<template>
  <div class="shop">
    <app-page-title
    :pageTitle="pageTitle"
    :breadcrumbs="breadcrumbs"></app-page-title>
    <div
    class="inner-content"
    :class="{'inner-height': isMobile}">
      <div class="inner-content-left">
        <form class="catalog-form" action="#" method="post">
          <h2 class="inner-content-title">Производители:</h2>
          <label for="checkbox-1">Baxter of California
            <input id="checkbox-1" type="checkbox" checked>
            <span class="checkbox-indicator"></span>
         </label>
          <label for="checkbox-2">Mr Natty
            <input id="checkbox-2" type="checkbox">
            <span class="checkbox-indicator"></span>
         </label>
          <label for="checkbox-3">Suavecito
            <input id="checkbox-3" type="checkbox" checked>
            <span class="checkbox-indicator"></span>
         </label>
          <label for="checkbox-4">Malin+Goetz
            <input id="checkbox-4" type="checkbox">
            <span class="checkbox-indicator"></span>
         </label>
          <label for="checkbox-5">Murray's
            <input id="checkbox-5" type="checkbox">
            <span class="checkbox-indicator"></span>
         </label>
          <label for="checkbox-6">American Crew
            <input
            name="goods"
            id="checkbox-6"
            type="checkbox"
            checked>
            <span class="checkbox-indicator"></span>
         </label>
          <h2 class="inner-content-title">Группы товаров:</h2>
          <label for="catalog-radio-1">Бритвенные принадлежности
            <input
            name="goods"
            type="radio"
            id="catalog-radio-1"
            value="beard"
            checked>
            <span class="radio-indicator"></span>
          </label>
          <label for="catalog-radio-2">Средства для ухода
            <input
            name="goods"
            type="radio"
            id="catalog-radio-2"
            value="care">
            <span class="radio-indicator"></span>
          </label>
          <label for="catalog-radio-3">Аксессуары
            <input
            name="goods"
            type="radio"
            id="catalog-radio-3"
            value="accesories">
            <span class="radio-indicator"></span>
          </label>
          <input class="btn" type="submit" value="Показать">
        </form>
      </div>
      <div class="inner-content-right">
        <div
        v-for="good in goods"
        :key="good.imgSrc"
        class="catalog-item">
          <figure class="img-wrapper">
            <img
            :src="good.imgSrc"
            :alt="good.brand"
            width="220"
            height="165">
          </figure>
          <p>{{ good.group }}<br> <span class="uppercase">{{ good.brand }}</span></p>
          <span class="price">{{ good.price }} ₽</span>
          <a href="#" class="btn btn-buy">Купить</a>
        </div>
        <ul class="pagination">
          <li>
            <a class="pagination-item">1</a>
          </li>
          <li>
            <a class="pagination-item current">2</a>
          </li>
          <li>
            <a class="pagination-item">3</a>
          </li>
          <li>
            <a class="pagination-item">4</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageTitle: 'Средства для ухода',
      breadcrumbs: [
        { path: '/', page: 'Главная' },
        { path: '/shop', page: 'Магазин' },
        { path: '', page: 'Средства для ухода' },
      ],
      goods: [
        { imgSrc: './static/img/catalog-item-1.jpg', group: 'Набор для путешествий', brand: '«Baxter of California»', price: '2 900' },
        { imgSrc: './static/img/catalog-item-2.jpg', group: 'Увлажняющий кондиционер', brand: '«Baxter of California»', price: '750' },
        { imgSrc: './static/img/catalog-item-3.jpg', group: 'Гель для волос', brand: '«Suavecito»', price: '290' },
        { imgSrc: './static/img/catalog-item-4.jpg', group: 'Глина для укладки волос', brand: '«American Crew»', price: '500' },
        { imgSrc: './static/img/catalog-item-5.jpg', group: 'Гель для волос', brand: '«American Crew»', price: '300' },
        { imgSrc: './static/img/catalog-item-6.jpg', group: 'Набор для бритья', brand: '«Baxter of California»', price: '3900' },
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
.shop {
  width: 960px;
  margin-left: auto;
  margin-right: auto;
}
.shop .inner-content {
  padding-top: 19px;
}
.shop .inner-content-title {
  font-size: 24px;
  line-height: inherit;
  margin-bottom: 30px;
}
.shop .inner-content-left {
  display: block;
  float: left;
  width: 200px;
}
.catalog-form label {
  display: block;
  margin-left: 44px;
  margin-top: 13px;
  position: relative;
  transition: all .5s;
}
.catalog-form label:hover {
  color: #663d15;
}
.catalog-form label:nth-of-type(6){
  margin-bottom: 49px;
}
.catalog-form label:nth-of-type(n + 7) {
  line-height: 20px;
  margin-top: 17px;
}
.catalog-form input[type="checkbox"],
.catalog-form input[type="radio"] {
  display: none;
}
.catalog-form
input[type="checkbox"] + .checkbox-indicator {
  position: absolute;
  bottom: 2px;
  left: -45px;
  width: 17px;
  height: 17px;
  border: 2px solid #000;
  transition: all .5s;
}
.catalog-form
input[type="checkbox"]:hover + .checkbox-indicator {
  border: 2px solid #663d15;
}
.catalog-form
input[type="radio"] + .radio-indicator {
  position: absolute;
  display: block;
  top: 0;
  left: -45px;
  width: 18px;
  height: 18px;
  border: 2px solid #000;
  border-radius: 50%;
  transition: all .5s;
}
.catalog-form
input[type="radio"]:checked + .radio-indicator::before {
  content: '';
  display: block;
  position: absolute;
  top: 5px;
  left: 5px;
  width: 4px;
  height: 4px;
  border: 2px solid #000;
  border-radius: 50%;
  background: #000;
}
.catalog-form
input[type="radio"]:hover + .radio-indicator {
  border: 2px solid #663d15;
}
.catalog-form input[type=submit] {
  padding: 13px 20px;
  margin-top: 48px;
}
.catalog-form input[type=submit]:hover {
  padding: 13px 20px;
  margin-top: 48px;
  background: #663d15;
  border: none;
}
.shop .inner-content-right {
  display: block;
  width: 700px;
  padding-top: 24px;
  float: right;
}
.shop .catalog-item {
  display: block;
  padding: 0;
  width: 220px;
  padding-bottom: 16px;
  float: left;
  background: #fff;
  margin-right: 20px;
  margin-bottom: 20px;
  box-shadow: 0 0 15px 0 rgba(0, 1, 1, 0.2);
  transition: box-shadow .5s;
}
.shop .catalog-item:hover {
  box-shadow: 0px 5px 30px 0 rgba(0, 1, 1, 0.3);
}
.shop .catalog-item:nth-child(3n) {
  margin-right: 0;
}
.shop figure.img-wrapper {
  display: block;
  width: 220px;
  height: 165px;
  margin: 0;
}
.catalog-item p {
  text-transform: lowercase;
  margin-top: 4px;
  margin-left: 16px;
  margin-bottom: 11px;
  line-height: 19px;
}
.catalog-item p span.uppercase {
  text-transform: uppercase;
}
.catalog-item .price {
  display: inline-block;
  background: #e5e5e5;
  margin-left: 16px;
  width: 100px;
  padding: 10px 5px;
  text-align: center;
}
.catalog-item .btn-buy {
  display: inline-block;
  padding: 10px 17px;
  margin-left: -3px;
}
.pagination {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 0;
}
.pagination-item {
  display: inline-block;
  width: 23px;
  height: 23px;
  float: left;
  background: #000;
  font-size: 14px;
  color: #fff;
  margin-top: 25px;
  margin-right: 7px;
  text-align: center;
  padding: 10px;
}
.pagination .current {
  color: #000;
  background: #fff;
}
</style>
