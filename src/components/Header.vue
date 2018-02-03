<template>
  <header class="main-header">
    <div class="container clearfix">
      <nav class="main-navigation">
        <ul class="top-navigation">
          <li>
           <a href="">
            <img src="../assets/img/sprite/header-logo.png" alt="Барбершоп Бородинский">
          </a>
        </li>
        <li>
          <a href="#">Информация</a>
        </li>
        <li>
          <a href="#">Новости</a>
        </li>
        <li>
          <a href="price.html">Прайс-лист</a>
        </li>
        <li>
          <a href="shop.html">Магазин</a>
        </li>
        <li>
          <a href="#">Контакты</a>
        </li>
      </ul>
    </nav>
    <div class="user-block">
      <a href="#">Вход</a>
    </div>
  </div>
</header>
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
.main-navigation {
  float: left;
  width: 780px;
}
.main-navigation ul, .main-navigation li{
  margin: 0;
  padding: 0;
}
.main-header a {
  display: block;
  text-decoration: none;
  color: #fff;
  box-sizing: border-box;
  padding: 20px;
  height: 70px;
  font-weight: 700;
  letter-spacing: 0.0135em;
  font-size: 16px;
  transition: background 0.5s;
}
.main-header a:hover {
  background: #333;
}
.user-block {
  float: right;
  width: 140px;
  height: 70px;
  text-align: right;
  position: relative;
}
.user-block::before {
  content: '';
  position: absolute;
  top: 24px;
  left: 52px;
  width: 20px;
  height: 20px;
  background: transparent url("../assets/img/sprite/sprites.png");
  background-position: -351px -68px;
}
.main-header {
  margin-bottom: 60px;
  background: #000;
}
.top-navigation  li{
  display: block;
  height: 70px;
  float: left;
  list-style: none;
}
</style>
