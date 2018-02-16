<template>
  <div id="app">
    <app-header :isIndex="isIndex"></app-header>
    <main class="container clearfix">
      <router-view></router-view>
    </main>
    <iframe v-if="isContacts" src="https://yandex.ru/map-widget/v1/?um=constructor%3Aecd1452e974fd4ce0e372fbf0afc5df4b17e5df1d975aaa87ac4a7c19456b9a4&amp;source=constructor" width="100%" height="450" frameborder="0"></iframe>
    <app-footer></app-footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
    };
  },
  computed: {
    isIndex() {
      return this.$route.name === 'Index';
    },
    isContacts() {
      return this.$route.name === 'Contacts';
    },
  },
};
</script>

<style>
/*стили для разработки*/
/*a, div, li, nav, ul, header,
footer, .container, figure, form,
label, h1, h2 {
  outline: 1px solid green;
}*/
/*стили для разработки*/
html {
  margin: 0;
  padding: 0;
}
.overflow {
  overflow: hidden;
}
body {
  font-family: "PT Sans Narrow", "Arial", sans-serif;
  font-size: 14px;
  line-height: 24px;
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
  margin: 0;
  padding: 0;
  background: #000;
}
#app {
 min-width: 960px;
}
.inner {
  background: #f8f3f0 url('./assets/img/inner-bg.png');
  color: #000;
}
.container {
  width: 940px;
  padding: 0 10px;
  margin: 0 auto;
}
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}
.btn {
  display: inline-block;
  padding: 10px 33px;
  color: #fff;
  background: #000;
  border: 0;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  transition: background .5s;
  cursor:default;
}
.btn:hover {
  background: #663d15;
}
.disabled {
  opacity:.5;
  cursor:default;
}
.disabled:hover {
  background: #000;
}
input:hover {
  border: 2px solid #663d15;
}
</style>

