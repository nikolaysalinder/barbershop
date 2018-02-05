<template>
  <div>
    <transition name="fade" mode="out-in">
      <div v-if="!isSend" class="index-signing" key="notSend">
        <h2 class="index-content-title">Записаться</h2>
        <p class="index-signing-text">
          Укажите желаемую дату и время и мы свяжемся
          с вами для подтверждения брони
        </p>
        <form class="appointment-form" action="" method="post">
          <label for="form-date">Дата</label>
          <label for="form-time">Время</label>
          <input
          id="form-date"
          name="date"
          type="text" placeholder="11.11.11"
          v-model="appointment.date">
          <input
          id="form-time"
          name="time"
          type="text" placeholder="11:12"
          v-model="appointment.time">
          <label for="form-name">Ваше имя</label>
          <label for="form-phone">Телефон</label>
          <input
          id="form-name"
          name="name"
          type="text"
          placeholder="Борода"
          v-model="appointment.name">
          <input
          id="form-phone"
          name="phone"
          type="text"
          placeholder="8 911 111 11 11"
          v-model="appointment.phone">
          <button class="btn btn-sign" type="submit" @click.prevent="sendForm">Отправить</button>
        </form>
      </div>
      <div v-if="isSend" class="index-signing-send" key="send">
        <h2>Здравствуйте, {{ appointment.name }}</h2>
        <p>Вы предварительно записаны {{ appointment.date }}<br>
          в {{ appointment.time }}!<br>
          Ваш номер {{ appointment.phone }}<br>
          Наш менеджер свяжется с Вами в ближайшее время.<br><br>
          Чтобы побрить Вас!
        </p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSend: false,
      appointment: {
        date: '',
        time: '',
        name: '',
        phone: '',
      },
    };
  },
  methods: {
    sendForm() {
      this.isSend = true;
      setTimeout(() => {
        this.isSend = false;
        this.appointment.date = '';
        this.appointment.time = '';
        this.appointment.name = '';
        this.appointment.phone = '';
      }, 6000);
    },
  },
};
</script>

<style>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-leave {

}
.fade-leave-active {
  transition: opacity 1s;
  opacity: 1;
}
.index-content p {
  margin-bottom: 0px;
  margin-top: 0;
}
.index-content-title {
  font-size: 28px;
  letter-spacing: 1.15pt;
  line-height: 1.46em;
}
.index-signing-text {
  line-height: 1.65;
  letter-spacing: 0.20pt;
}
.index-signing {
  position: relative;
  min-height: 340px;
}
.index-signing label {
  display: block;
  float: left;
}
.index-signing input{
  float: left;
  width: 106px;
  margin-right: 20px;
  padding: 7px 15px;
  font-size: 14px;
  line-height: 24px;
  color: #000000;
  text-transform: uppercase;
  background-color: #f9f6f3;
  border: 2px solid #000;
}
.index-signing label{
  display: block;
  float: left;
  margin-right: 36px;
  padding-top: 11px;
  padding-left: 18px;
  padding-bottom: 7px;
  width: 106px;
}
.index-signing input:hover {
  border: 2px solid;
}
.index-signing input:nth-child(2n),
.index-signing label:nth-child(2n) {
  margin-right: 0;
}
.index-signing .btn-sign{
  display: block;
  padding: 11px 107px;
  position: absolute;
  bottom: 0;
  left: 0;
}
.index-signing-send {
  padding: 37px;
  width: 300px;
  height: 363.23px;
  box-sizing: border-box;
}
.index-signing-send h2{
  text-align: center;
  margin-bottom: 50px;
}
.index-signing-send p {
}
</style>
