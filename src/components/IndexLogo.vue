<template>
    <div class="index-logo clearfix">
      <img :src="src[0]" alt="Барбершоп «Бородинский»">
    </div>
</template>

<script>
export default {
  data() {
    return {
      src: ['./assets/img/sprite/index-logo.png'],
    };
  },
};
</script>


<style>
.index-logo {
  width: 359px;
  height: 202px;
  margin: 0 auto;
  margin-bottom: 30px;
}
</style>
