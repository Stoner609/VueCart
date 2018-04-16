<template>
  <div class="list">
      <LessionItem
        v-for="lesson in lessons"
        :lesson=lesson
        :key=lesson.id
      />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import LessionItem from './LessonItem.vue'

export default {
//   computed: {
//       lessons() {
//            return this.$store.state.lessons;
//       },
//   },
//   mounted() {
//     this.$store.dispatch('fetchLessons');
//   },
    components: {
        LessionItem,
    },
    computed: {
        ...mapState(['lessons']),
    },
    methods: {
        ...mapActions(['fetchLessons']),
    },
    mounted() {
        this.fetchLessons();
    },
}
</script>

<style scoped>
.list{
  padding-top: 30px;
  text-align: center;
}
</style>