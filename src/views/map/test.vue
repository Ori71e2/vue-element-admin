<template>
  <div class="container">
    <swiper ref="swiperTop" :options="swiperOption" class="swiper-inner">
      <swiper-slide v-for="(value, key) in virtualData.slides" :key="key" :style="{left: `${virtualData.offset}px`}">
        <div class="box-card">
          <div class="slide-content">Slide {{ value }}</div>
          <!-- <img :data-src="`${value}`" class="swiper-lazy"> -->
          <img data-src="/static/images/surmon-1.jpg" class="swiper-lazy">
          <div class="swiper-lazy-preloader swiper-lazy-preloader-white"/>
        </div>
      </swiper-slide>
      <div slot="pagination" class="swiper-pagination"/>
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
      virtualData: {
        slides: []
      },
      swiperOption: {
        lazy: true,
        effect: 'coverflow',
        // grabCursor: true,
        centeredSlides: true,
        // 虚拟slide必须确定数字
        slidesPerView: 7,
        // rotate：slide做3d旋转时Y轴的旋转角度。默认50。
        // stretch：每个slide之间的拉伸值，越大slide靠得越紧。 默认0。
        // depth：slide的位置深度。值越大z轴距离越远，看起来越小。 默认100。
        // modifier：depth和rotate和stretch的倍率，相当于depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。默认1。
        // slideShadows：开启slide阴影。默认 true。
        coverflowEffect: {
          rotate: 10,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        virtual: {
          slides: (function() {
            const slides = []
            for (let i = 0; i < 600; i += 1) {
              slides.push('/static/images/surmon-1.jpg')
            }
            return slides
          }()),
          // 弄了半天，这个和下面的选项冲突，不能同时存在
          // renderSlide: function(slide, index) {
          //   // <div class="swiper-slide"></div> 这个结构必须包含，不能缺少
          //   return '<div class="swiper-slide"">索引是' + index + '+内容是内容是内容是内容是内容是内容是内容是' + slide + '</div>'
          // },
          renderExternal: this.virtualRenderExternal
        }
      }
    }
  },
  mounted() {
  },
  methods: {
    virtualRenderExternal(data) {
      this.virtualData = data
    }
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
  text-align: center;
  background: #444!important;
}
.swiper-slide img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  position: absolute;
  left: 50%;
  top: 50%;
}
.box-card {
  width: 100%;
  height: 100%;
}
</style>
