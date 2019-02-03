<template>
  <div>
    <swiper :options="swiperOption" class="swiper-container swiper-wrapper">
      <!-- <swiper-slide><el-card>Slide 1</el-card></swiper-slide>
      <swiper-slide><el-card>Slide 1</el-card></swiper-slide>
      <swiper-slide><el-card>Slide 1</el-card></swiper-slide> -->
      <swiper-slide class="swiper-slide"><el-card class="box-card"><div class="slide-content center-vertical center-horizontal">Slide 1</div></el-card></swiper-slide>
      <swiper-slide class="swiper-slide"><el-card class="box-card"><div class="slide-content center-vertical center-horizontal">Slide 1</div></el-card></swiper-slide>
      <div slot="button-prev" class="swiper-button-prev"/>
      <div slot="button-next" class="swiper-button-next"/>
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
      swiperOption: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  }
}
</script>

<style scoped>
.swiper-container {
  width: 400px;
  height: 200px;
}
.box-card {
  height: 100%
}
.slide-content {
  padding: 10px
}
.center-vertical{
  position: relative;
  top:50%;
  transform:translateY(-50%);
}
.center-horizontal{
  position: relative;
  left:50%;
  transform:translateX(-50%);
}
</style>
