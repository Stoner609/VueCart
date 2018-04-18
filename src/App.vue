<template>
  <div>
    <Header />
    <div class="row">
      <LessonList />
      <About />
    </div>
  </div>
</template>

<script>
import Header from './Header.vue';
import LessonList from './LessonList.vue';
import About from './About.vue'

export default {
  components: {
    Header,
    LessonList,
    About,
  },
}
</script>

<style>
html, body{
  font-family: Microsoft JhengHei;
  padding: 0;
  margin: 0;
}

.row:after {
    content: "";
    display: table;
    clear: both;
}
</style>
