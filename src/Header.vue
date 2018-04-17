<template>
  <div class="header">
      <span class="cart">
          <span>購物車內：</span>
          <span class="lessons">{{ lessons }}</span>
          <span> 套課程，共 </span>
          <span class="price">${{ price }}</span>
      </span>
      <span class="link" @click="clearCart">
        <span>清除</span>
      </span>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
      ...mapGetters({
          lessons: 'lessonsInCart',
          price: 'priceInCart',
      }),
  },
  methods: {
    ...mapMutations(['clearCart']),
  },
}
</script>

<style scoped>
.header{
  position: fixed;
  width: 100%;
  padding: 6px 8px;
  box-sizing: border-box;
  background-color: #41b883;
  font-size: .9em;
  color: white;
  text-shadow: 1px 1px 1px rgba(0,0,0,.7);

  display: flex;
  justify-content: space-between;
}
.lessons, .price{
  font-weight: bolder;
  color: #ffc;
}
.link {
  padding: 2px;
  font-size: 0.9em;
  border-radius: 3px;
  cursor: pointer;
}
.link:hover {
  background-color: #cee;
}
</style>