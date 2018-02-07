<template>
  <div id="app" :class='{ app: isIndex }'>
    <app-header :isIndex="isIndex"></app-header>
    <main class="container clearfix">
      <router-view></router-view>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    isIndex() {
      return this.$route.name === 'Index';
    },
  },
};
</script>

<style>
/*стили для разработки*/
a, div, li, nav, ul, header, footer, .container, figure {
  outline: 1px solid green;
}
/*стили для разработки*/

body {
  font-family: "PT Sans Narrow", "Arial", sans-serif;
  font-size: 14px;
  line-height: 24px;
  font-weight: 700;
  font-kerning: none;
  text-transform: uppercase;
  color: #fff;
  margin: 0;
  padding: 0;
  min-width: 960px;
}
div.app {
  background: #000 url("~/../assets/img/index-bg.jpg");
  background-position: 50% 40px;
  background-size: 2520px;
  background-repeat: no-repeat;
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
}
.btn:hover {
  background: #663d15;
}
input:hover {
  border: 3px #663d15;
}
</style>

