<template>
  <div>
    <!-- <Header /> -->
    <Header2 />
    <div class="row">
      <LessonList />
      <CartDetail />
    </div>
  </div>
</template>

<script>
import Header from './Header.vue';
import Header2 from './Header2.vue';
import LessonList from './LessonList.vue';
import CartDetail from './CartDetail.vue'

export default {
  components: {
    Header,
    Header2,
    LessonList,
    CartDetail,
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
