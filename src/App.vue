<template>
  <div>
    <Header />
    <LessonList />
  </div>
</template>

<script>
import Header from './Header.vue';
import LessonList from './LessonList.vue';

export default {
  components: {
    Header,
    LessonList,
  },
}
</script>

<style>
html, body{
  font-family: Microsoft JhengHei;
  padding: 0;
  margin: 0;
}
</style>
