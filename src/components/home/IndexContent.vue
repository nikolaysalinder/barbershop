<template>
  <div class="index-content clearfix">
    <slot name="index-content-left"></slot>
    <slot name="index-content-right"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.index-content {
  padding: 23px 80px;
  padding-bottom: 50px;
  font-weight: 700;
  color: #000;
  background-image: url("../../assets/img/shadow-thick.png"),
    url("../../assets/img/inner-bg.png");
  background-position: 465px 50px, 0 0;
  background-repeat: no-repeat, repeat;
  margin-left: auto;
  margin-right: auto;
  max-width: 960px;
  margin-bottom: 35px;
}
.index-content-title {
  font-size: 28px;
  letter-spacing: 1.15pt;
  line-height: 1.46em;
}
.index-content-left {
  width: 380px;
  float: left;
  line-height: 1.7em;
  letter-spacing: 0.178pt;
}
.index-content ul {
  padding: 0;
  margin-bottom: 32px;
}
.index-content time {
  text-transform: lowercase;
}
.index-content li {
  list-style: none;
  margin-bottom: 24px;
}
.index-content p {
  margin-bottom: 0px;
  margin-top: 0;
}
.index-content-right {
  width: 300px;
  float: right;
}
p.index-content-contacts {
  margin-bottom: 22px;
}
#index-contacts {
  min-height: 340px;
  position: relative;
}
.index-content-open {
  display: block;
}
#index-contacts .btn-map {
  display: inline-block;
  margin-top: 74px;
  margin-right: 17px;
  padding-right: 30px;
  padding-left: 29px;
}
#index-contacts .btn-feedback {
  display: inline-block;
  right: 300px;
  padding-left: 24px;
  padding-right: 24px;
}
</style>
