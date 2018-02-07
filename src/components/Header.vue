<template>
  <header class="main-header">
    <div class="container clearfix">
      <nav class="main-navigation">
        <transition-group
          tag="ul" name="slide-fade"
          class="top-navigation">
          <router-link
            v-for="link in links"
            :key="link.path"
            :to="link.path"
            tag="li"
            :class="[link.hide && isIndex ? 'hide' : '']"
            exact>
            <a
              :class="[link.hide && isIndex ? 'hide' : '']"
            >
              {{ link.text }}
              <img
              v-if="link.path == '/' && !isIndex"
              src="../assets/img/sprite/header-logo.png"
              alt="Барбершоп Бородински">
            </a>
          </router-link>
        </transition-group>
      </nav>
      <div class="user-block">
        <a href="#">Вход</a>
      </div>
    </div>
  </header>
</template>
<script>

export default {
  props: ['isIndex'],
  data() {
    return {
      links: [
        { path: '/', text: '', hide: true },
        { path: '/informations', text: 'Информация', hide: false },
        { path: '/news', text: 'Новости', hide: false },
        { path: '/price', text: 'Прайс-лист', hide: false },
        { path: '/shop', text: 'Магазин', hide: false },
        { path: '/contacts', text: 'Контакты', hide: false },
      ],
    };
  },
  methods: {
  },
};
</script>

<style>
.slide-fade-enter {
  opacity: 0;
  transform: translateX(-50px);
}
.slide-fade-enter-active {
  transition: all .5s;
}
.slide-fade-leave {
}
.slide-fade-leave-to {
}
.slide-fade-move {
  transition: all .8s;
}
.top-navigation li.router-link-active.hide {
  display: none;
}
.main-navigation {
  float: left;
  width: 780px;
}
.main-navigation ul, .main-navigation li{
  margin: 0;
  padding: 0;
}
.top-navigation  li{
  display: block;
  float: left;
  list-style: none;
}
.main-header a {
  display: block;
  text-decoration: none;
  color: #fff;
  padding: 25px 20px;
  padding-right: 20px;
  height: 73px;
  box-sizing: border-box;
  font-weight: 700;
  font-size: 16px;
  transition: background 0.5s;
}
.main-header a:hover {
  background: #333;
}
.user-block {
  float: right;
  width: 110px;
  text-align: right;
  position: relative;
}
.user-block a::before {
  content: '';
  position: absolute;
  top: 29px;
  left: 22px;
  width: 20px;
  height: 20px;
  background: url("../assets/img/sprite/sprites.png");
  background-position: -351px -68px;
}
.user-block a::before:hover{
  opacity: 1;
}
.main-header {
  margin-bottom: 60px;
  background: #000;
}
</style>
