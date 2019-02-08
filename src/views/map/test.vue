<template>
  <div class="container  center-vertical center-horizontal">
    <swiper ref="swiperTop" :options="swiperOption" class="gallery-top swiper-wrapper">
      <swiper-slide
        v-for="(value, key) in picture"
        :key="key">
        <el-card class="box-card">
          <div class="slide-content">Slide {{ value }}</div>
        </el-card>
      </swiper-slide>
      <div slot="button-prev" class="swiper-button-prev"/>
      <div slot="button-next" class="swiper-button-next"/>
    </swiper>
    <swiper ref="swiperThumbs" :options="swiperOptionThumbs" class="gallery-thumbs swiper-wrapper">
      <swiper-slide
        v-for="(value, key) in picture"
        :key="key">
        <el-card class="box-card">
          <div class="slide-content">Slide {{ value }}</div>
        </el-card>
      </swiper-slide>
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
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperOptionThumbs: {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.swiper
      const swiperThumbs = this.$refs.swiperThumbs.swiper
      swiperTop.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperTop
    })
  }
}
</script>

<style scoped>
.container {
  width: 90%;
  padding: 5px;
  margin: 5px;
}

.box-card {
  height: 100px;
  width: 100%;
  padding: 5px
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
.gallery-top {
  height: 80%!important;
  width: 100%;
}
.gallery-thumbs {
  height: 20%!important;
  box-sizing: border-box;
  padding: 10px 0;
}
.gallery-thumbs .swiper-slide {
  width: 20%;
  height: 100%;
  opacity: 0.4;
}
.gallery-thumbs .swiper-slide-active {
  opacity: 1;
}
</style>
