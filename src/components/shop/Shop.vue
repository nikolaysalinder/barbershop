<template>
  <div class="shop">
    <app-page-title
    :pageTitle="pageTitle"
    :breadcrumbs="breadcrumbs"></app-page-title>
    <div class="inner-content">
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
        <div class="catalog-item">
          <img
          src="/static/img/catalog-item-1.jpg"
          alt="Baxter of California"
          width="220"
          height="165">
          <p>Набор для путешествий «Baxter of California»</p>
          <span class="price">2 900 ₽</span>
          <a href="#" class="btn btn-catalog">Купить</a>
        </div>
        <ul>
          <li>
            <span class="pagination">1</span>
          </li>
          <li>
            <span class="pagination">2</span>
          </li>
          <li>
            <span class="pagination">3</span>
          </li>
          <li>
            <span class="pagination">4</span>
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
    };
  },
  beforeCreate() {
    document.body.classList.add('inner');
  },
};
</script>

<style>
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
  float: right;
}
</style>
