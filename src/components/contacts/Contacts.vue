<template>
  <div class="contacts">
   <app-page-title
    :pageTitle="pageTitle"
    :breadcrumbs="breadcrumbs"></app-page-title>
    <div class="inner-content">
      <h2 class="contacts-title">Наш адрес</h2>
        <p class="contacts-adress">
          Барбершоп «Бородинский»<br>
          адрес: г. Санкт-Петербург, Б. Конюшенная,д. 19/8<br>
          телефон: +7 (495) 666-02-66<br>
          Спросить Бороду!
        </p>
        <p class="contacts-open">
          Время работы:<br>
          Пн: с 10:00 до 21:00<br>
          Вт: с 10:00 до 21:00<br>
          Ср: c 11:00 до 21:00<br>
          Чт: c 10:00 до 22:00<br>
          Пт: c 10:00 до 24:00<br>
          Сб: c 10:00 до 24:00<br>
          Вс: с 10:00 до 19:00
        </p>
        <p> В понедельник с 10 до 12 Крафтовое в подарок! Ну так на всякий!</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageTitle: 'Контакты',
      breadcrumbs: [
        { path: '/', page: 'Главная' },
        { path: '/contacts', page: 'Контакты' },
      ],
    };
  },
  beforeCreate() {
    document.body.classList.remove('inner');
  },
};
</script>

<style>
.contacts .inner-content {
  height: 200px;
}
.contacts p {
  float: left;
  margin-right: 50px;
}
</style>
