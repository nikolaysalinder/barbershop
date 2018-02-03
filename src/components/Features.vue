<template>
  <section class="features clearfix">
        <div class="features-item">
          <b>Быстро</b>
          <p>
            Мы делаем свою работу быстро! Два часа<br>
            пролетят незаметно и Вы &#8212; счастливый<br>
            обладатель стильной стрижки-минутки!
          </p>
        </div>
        <div class="features-item">
          <b>Круто</b>
          <p>
            Забудьте, как Вы стриглись раньше.<br>
            Мы сделаем из Вас звезду футбола или кино!<br>
            Во всяком случае внешне.
          </p>
        </div>
        <div class="features-item">
          <b>Дорого</b>
          <p>
            Наши мастера &#8212; профессионалы своего дела  и<br>
            не могут стоить дешево. К тому же, разве цена<br>
            не дает определеный статус?
          </p>
        </div>
      </section>
</template>

<script>
export default {
  data() {
    return {

    };
  },
};
</script>

<style>
  .features {
    margin-bottom: 65px;
  }
  .features-item {
    float: left;
    margin-right: 20px;
    width: 300px;
    font-weight:700;
    font-size: 14px;
    text-align: center;
    background:
      url("../assets/img/romb.svg") no-repeat 129px 35px;
    background-size: 40px;
  }
  .features-item b {
    display: block;
    text-align: center;
    font-weight:700;
    font-size: 28px;
    margin-bottom: 69px;
    letter-spacing: 1.27pt;
  }
  .features-item p {
    letter-spacing: 0.02em;
  }
  .features-item:last-child {
    margin-right: 0;
  }
</style>
