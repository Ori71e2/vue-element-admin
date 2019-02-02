<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide
        v-for="(slide, index) in swiperSlides"
        :key="index">
        I'm Slide {{ slide }}
      </swiper-slide>
      <div slot="pagination" class="swiper-pagination"/>
    </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper
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
