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
        <a
        @click="showLogin = true">Вход</a>
      </div>
    </div>
    <app-modal
    v-if="showLogin"
    @close="showLogin = false"
    :showLogin="showLogin">
      <h2 class="modal-content-title">Личный кабинет</h2>
      <form class="login-form">
        <label for="login">Логин</label>
        <input
        id="login"
        type="text"
        name="login"
        placeholder="mail@nikolaysalinder.ru">
        <label for="password">Пароль</label>
        <input
        id="password"
        type="password"
        name="password"
        placeholder="8 символов">
        <input
        id="login-checkbox"
        type="checkbox"
        name="remember">
        <span class="checkbox-indicator"></span>
        <label
        for="login-checkbox">Запомните меня</label>
        <a id="restore">Я забыл пароль!</a>
        <button class="btn-login" type="submit">Войти</button>
      </form>
    </app-modal>
  </header>
</template>
<script>

export default {
  props: ['isIndex'],
  data() {
    return {
      showLogin: false,
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
  background-color: #000;
}
.main-navigation ul, .main-navigation li{
  margin: 0;
  padding: 0;
}
.top-navigation  li{
  display: block;
  position: relative;
  float: left;
  list-style: none;
}
.main-navigation .router-link-exact-active::after {
  content: "";
  position: absolute;
  right: 20px;
  bottom: 0;
  left: 20px;
  height: 5px;
  background-color: #fff;
}
.main-navigation .router-link-exact-active a:hover{
  background: none;
  cursor: default;
}
.main-navigation li>a,
.user-block>a {
  display: block;
  text-decoration: none;
  background: #000;
  color: #fff;
  padding: 25px 20px;
  height: 73px;
  box-sizing: border-box;
  font-weight: 700;
  font-size: 16px;
  transition: background 0.5s;
}
.main-navigation li>a:hover,
.user-block>a:hover {
  background: #333;
}
.main-navigation li:first-child a:hover {
  background: #000;
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
.main-header {
  margin-bottom: 60px;
  background: #000;
}
.login-form .btn-login {
  display: block;
  padding: 13px 40px;
  margin-top: 15px;
  background: #000;
  border: 0;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  transition: background .5s;
}
.login-form input:focus,
.login-form input:hover {
  border: 2px solid #663d15;
}
.login-form input[type="text"],
.login-form input[type="password"] {
  margin-bottom: 10px;
  padding: 7px;
  padding-right: 20px;
  font-weight: inherit;
  font-size: 14px;
  line-height: 24px;
  font-family: "PT Sans Narrow", "Arial", sans-serif;
  color: #000;
  text-transform: uppercase;
  background-color: #f9f6f3;
  border: 2px solid #000000;
}
.login-form input#login {
  background-image: url("../assets/img/sprite/user.png");
  background-repeat: no-repeat;
  background-position: 280px 13px;
  width: 300px;
  box-sizing: border-box;
}

.login-form input#password {
  background-image: url("../assets/img/sprite/lock.png");
  background-repeat: no-repeat;
  background-position: 280px 13px;
  width: 300px;
  box-sizing: border-box;
}
.login-form #restore {
  float: right;
  color: #000000;
  text-decoration: underline;
  margin-right: 0px;
  transition: color .5s;
}
.login-form #restore:hover {
  text-decoration: none;
  color: #663d15;
  cursor: pointer;
  background: transparent;
}

.login-form .btn-login:hover {
  background: #663d15;
}
.login-form #login-checkbox {
  display: none;
}
input[type="checkbox"] + .checkbox-indicator {
  position: absolute;
  bottom: 110px;
  left: 80px;
  width: 17px;
  height: 17px;
  border: 2px solid #000;
  transition: all .5s;
}
input[type="checkbox"]:hover + .checkbox-indicator {
  border: 2px solid #663d15;
}
input[type="checkbox"]:checked + .checkbox-indicator::before,
input[type="checkbox"]:checked + .checkbox-indicator::after {
  content: "";
  position: absolute;
  top: 8px;
  left: 1px;
  width: 15px;
  height: 2px;
  background-color: #000;
}
input[type="checkbox"]:checked + .checkbox-indicator::before {
  transform: rotate(45deg);
}
input[type="checkbox"]:checked + .checkbox-indicator::after {
  transform: rotate(-45deg);
}
label[for="login-checkbox"] {
  color: #000;
  transition: all .5s;
  margin-left: 25px;
}
label[for="login-checkbox"]:hover {
  color: #663d15;
}
</style>
