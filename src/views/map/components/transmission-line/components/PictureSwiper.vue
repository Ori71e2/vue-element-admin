<template>
  <div class="container">
    <swiper ref="swiperTop" :options="swiperOption" class="swiper-inner">
      <swiper-slide v-for="(value, key) in picture" :key="key">
        <el-card class="box-card">
          <div class="slide-content">Slide {{ value }}</div>
        </el-card>
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
    swiper,
    swiperSlide
  },
  data() {
    return {
      picture: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      swiperOption: {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        },
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev'
        // },
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  mounted() {
  }
}
</script>

<style scoped>
.container {
  width: 90%;
  padding: 5px;
  margin: 5px;
}
.swiper-inner {
  width: 100%;
  height: 300px;
  padding-top: 10px;
  padding-bottom: 10px;
}
.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 280px;
  height: 280px;
}
.box-card {
  width: 100%;
  height: 100%;
}
</style>
