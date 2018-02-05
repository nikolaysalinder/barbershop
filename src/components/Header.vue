<template>
  <header class="main-header">
    <div class="container clearfix">
      <nav class="main-navigation">
        <transition-group tag="ul" name="slide-fade" class="top-navigation">
             <router-link
          v-for="link in links"
          :key="link.path"
          :to="link.path"
          tag="li"
          :class="[link.hide && isIndex ? 'hide' : '']"
          exact>
          <a :class="[link.hide && isIndex ? 'hide' : '']">{{ link.text }}
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
  computed: {
    isIndex() {
      return this.$route.name === 'Index';
    },
  },
  methods: {
    remove() {
      this.links.splice(0, 1);
    },
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
  transform: translateX(10px);
  opacity: 0;
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
