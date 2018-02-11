<template>
  <div id='info'>
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
.info {
  display: block;
  height: 300px;
}
</style>
