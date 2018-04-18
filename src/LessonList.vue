<template>
  <div class="list">
      <div class="divStyle">
        <input type="text" class="inputStyle" v-model="text" />
      </div>
      <LessionItem
        v-for="lesson in searchLessons"
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
        searchLessons() {
            return this.lessons.filter(x => {
                if (x.title.toLowerCase().indexOf(this.text.toLowerCase()) > -1) {
                    return x
                }
            });
        }
    },
    data() {
        return {
            text: '',
        }
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
  float: left;
  width: 95%;
}
.divStyle {
    padding: 15px;
    text-align: center;
}
input[type=text] {
    width: 300px;
    border: 1px solid transparent;
    background-color: #f1f1f1;
    padding: 10px;
    font-size: 16px;
}
</style>