<template>
  <div class="info">
    <app-page-title
    :pageTitle="pageTitle"
    :breadcrumbs="breadcrumbs"></app-page-title>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageTitle: 'Информация',
      breadcrumbs: [
        { path: '/', page: 'Главная' },
        { path: '/informations', page: 'Информация' },
      ],
    };
  },
};
</script>

<style>
</style>
