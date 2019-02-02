<template>
  <div class="wraper-container">
    <swiper :options="swiperOption">
      <swiper-slide
        v-for="(slide, index) in swiperSlides"
        :key="index">
        I'm Slide {{ slide }}
      </swiper-slide>
      <div slot="pagination" class="swiper-pagination" />
      <div slot="button-prev" class="swiper-button-prev" />
      <div slot="button-next" class="swiper-button-next" />
      <div slot="scrollbar" class="swiper-scrollbar" />
    </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  props: {
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      },
      swiperSlides: [1, 2, 3, 4, 5]
    }
  }
}
</script>

<style scoped>
.wraper-container {
  height: 100px
}
</style>
