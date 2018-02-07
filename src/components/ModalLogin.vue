<template>
  <transition name="modal">
    <div class="modal-login-overlay">
      <div class="modal-login">
        <button
          class="modal-content-close"
          type="button" title="Закрыть">Закрыть</button>
      </div>
    </div>
  </transition>
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
.modal-login-overlay {
  position: static;
  top: 0;
  left: 0;
  overflow: hidden;
  background-color: rgba(0,0,0,0.3);
  width: 100%;
  height: 100%;
}
.modal-login {
  position: fixed;
  top: 50%;
  left: 50%;
  margin-left: -230px;
  width: 300px;
  padding: 50px 80px;
  color: #000;
  background: #f8f3f0 url('../assets/img/sliced-bg.png');
  box-shadow: 0px 10px 50px 5px #000;
}
.modal {

}
</style>
