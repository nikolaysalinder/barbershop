<template>
  <div class="inner-page-title">
    <h1>{{ pageTitle }}</h1>
    <ul class="breadcrumbs">
      <li v-for="breadcrumb in breadcrumbs" :key="breadcrumb.path">
        <router-link
        :to="breadcrumb.path">{{ breadcrumb.page }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['pageTitle', 'breadcrumbs'],
  data() {
    return {
    };
  },
};
</script>

<style>
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
  margin-bottom: 10px;
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
.breadcrumbs li:last-child a{
  color: #aba9a7;
}
.breadcrumbs li:last-child a:hover {
  text-decoration: none;
  cursor: default;
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
</style>
