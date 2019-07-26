<template>
  <footer class="main-footer">
    <div class="container clearfix">
      <div class="footer-contacts">
        <p class="footer-adress">
          Барбершоп «Бородинский»<br>
          адрес: г. Санкт-Петербург,ул. Б.Конюшенная, д. 19/8<br>
          <a href="#" @click.prevent="showMap = true">Как нас найти?</a><br>
          <app-modal
          v-if="showMap"
          :showMap="showMap"
          @close="showMap = false">
            <img src="./../assets/img/map.png" height="560" width="765">
          </app-modal>
          телефон: +7 (495) 666-02-66
        </p>
      </div>
      <div class="footer-socials">
        <p>Давайте дружить!</p>
        <a href="https://vk.com/nikolay.salinder" class="social-btn social-vk">Вконтакте</a>
        <a href="https://www.facebook.com/nikolay.salinder/" class="social-btn social-fb">Facebook</a>
        <a href="https://www.instagram.com/nikolaysalinder/" class="social-btn social-in">Instagram</a>
      </div>
      <div class="footer-developer">
        <p>Разработано:</p>
        <a class="developer" href="http://www.salinder.ru">Salinder.ru</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      showMap: false,
    };
  },
};
</script>

<style>
.main-footer {
  color: #fff;
  margin-top: 33px;
  background:
    #000 url("../assets/img/footer-bg.png");
  padding-top: 42px;
  padding-bottom: 40px;
  letter-spacing: 0.2pt;
  box-shadow: inset 0px 20px 40px -5px #000;
}
.main-footer a {
  color: #fff;
}
.footer-contacts {
  float: left;
  margin-right: 60px;
  width: 320px;
}
.footer-contacts a {
  text-decoration: underline;
}
.footer-contacts a:hover {
  text-decoration: none;
}
.footer-socials {
  float: left;
  width: 180px;
  text-align: center;
  font-size: 0;
}
a.social-vk {
  margin-left: 20px;
  background:#000 url("../assets/img/sprite/sprites.png");
  background-position: -51px -2px;
  transition: 1s;
}
a.social-vk:hover {
  background: white url("../assets/img/sprite/sprites.png");
  background-position: -2px -1px;
}
a.social-fb {
  background: #000 url("../assets/img/sprite/sprites.png");
  background-position: -152px -6px;
  transition: 1s;
}
a.social-fb:hover {
  background: #fff url("../assets/img/sprite/sprites.png");
  background-position: -103px -5px ;
}
a.social-in {
  background: #000 url("../assets/img/sprite/sprites.png");
  background-position: -247px -6px;
  transition: 1s;
}
a.social-in:hover {
  background: #fff url("../assets/img/sprite/sprites.png");
  background-position: -199px -6px;
}
.social-btn {
  display: inline-block;
  float: left;
  width: 43px;
  height: 43px;
  background: #000;
  margin-right: 5px;
}
.footer-developer {
  text-align: center;
  float: right;
  width: 180px;
}
.footer-developer .developer {
  display: block;
  padding: 10px 0;
  text-decoration: none;
  background: #000;
  transition: 1s;
}
.footer-developer a:hover {
  background: #fff;
  color: #000;
}
</style>
