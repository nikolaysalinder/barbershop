<template>
  <div>
    <div class="gallery">
      <figure>
        <transition name="fade">
          <img
          :src="imgSource"
          alt="Фото галерея"
          height="164"
          width="286">
        </transition>
      </figure>
      <button
        class="btn btn-gallery-prev"
        type="button"
        @click.prevent="prevImage">Назад</button>
        <button
        class="btn btn-gallery-next"
        type="button"
        @click.prevent="nextImage">Вперед</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      images: [
        './static/img/gallery-1.jpg',
        './static/img/gallery-2.jpg',
        './static/img/gallery-3.jpg',
        './static/img/gallery-4.jpg',
      ],
    };
  },
  computed: {
    imgSource() {
      return this.images[this.index];
    },
  },
  methods: {
    nextImage() {
      this.index += 1;
      if (this.index > 3) {
        this.index = 0;
      }
    },
    prevImage() {
      this.index -= 1;
      if (this.index < 0) {
        this.index = 3;
      }
    },
  },
};
</script>

<style>
.gallery {
  height: 260px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
}
.gallery figure {
  border: 7px solid #fff;
  width: 286px;
  height: 165px;
  margin: 0;
}
.btn-gallery-prev {
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 10px 33px;
  width: 138px;
  height: 44px;
  font-size: 13px;
}
.btn-gallery-next {
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 10px 42px;
  height: 44px;
}
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
  opacity: 0;
}
.fade-move {
  transition: all 1s;
}
</style>
