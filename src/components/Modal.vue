<template>
  <transition name="modal">
    <div
    class="modal-overlay"
    @click.self="$emit('close')">
      <div
      :class="['modal', {'modal-login': showLogin }, {'modal-map': showMap }]">
        <button
        class="modal-content-close"
        type="button"
        title="Закрыть"
        @click="$emit('close')">Закрыть</button>
          <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ['showLogin', 'showMap'],
  data() {
    return {
    };
  },
  created() {
    const html = document.body.parentElement;
    const body = document.body;
    const scrollWidth = window.innerWidth - html.clientWidth;
    html.style.marginLeft = `${-1 * scrollWidth}px`;
    html.classList.add('overflow');
    body.classList.add('body-overflow');
  },
  beforeDestroy() {
    const html = document.body.parentElement;
    const body = document.body;
    html.style.marginLeft = 0;
    html.classList.remove('overflow');
    body.classList.remove('body-overflow');
  },
};
</script>

<style>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,.3);
  width: 100%;
  height: 100%;
  z-index: 10;
}
.model-overlay:after {
  display: inline-block;
  width:  0;
  height: 100%;
  vertical-align: middle;
  content: '';
}
.modal {
  position: fixed;
  box-shadow: 0px 10px 50px 5px #000;
}
.modal-login {
  top: 20%;
  left: 50%;
  margin-left: -230px;
  width: 300px;
  padding: 50px 80px;
  color: #000;
  background: #f8f3f0 url('../assets/img/inner-bg.png');
}
.modal-map {
  top: 50%;
  left: 50%;
  z-index: 20;
  width: 765px;
  height: 560px;
  margin-top: -280px;
  margin-left: -390px;
  border: 7px solid white;
  background: #f8f3f0;
}
.modal-content-close {
  position: absolute;
  top: 0;
  right: -34px;
  width: 22px;
  height: 22px;
  font-size: 0;
  border: 0;
  cursor: pointer;
  background: transparent;
}
.modal-content-close::before,
.modal-content-close::after {
  content: "";
  position: absolute;
  top: 10px;
  left: 2px;
  width: 19px;
  height: 3px;
  background-color: #d0d0d0;
  border-radius: 1px;
}
.modal-content-close::before {
  transform: rotate(45deg);
}

.modal-content-close::after {
  transform: rotate(-45deg);
}
.modal-enter {
  opacity: 0;
  transform: translateY(-50px);
}
.modal-enter-active {
  transition: all 0.5s;
}
.modal-leave {

}
.modal-leave-active {
  transform: translateX(-50px);
  opacity: 0;
  transition-delay: 1s;
  transition: all .5s;
}
</style>
