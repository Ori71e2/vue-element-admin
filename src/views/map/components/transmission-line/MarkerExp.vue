<template>
  <div class="click">
    <div>
      <svg-icon-exp :style-name="svgStyle" :icon-class="iconClass" :rotate="rotate"/>
    </div>
    <!-- <div class="adap-text adap-font text-label">
      <p>{{ text }}</p>
    </div> -->
    <div :style="showButton" class="center">
      <!-- <el-popover placement="bottom" title="标题" trigger="click">
        <div>
          <p>这是一段内容这是一段内容确定删除吗？</p>
          <div style="text-align: right; margin: 0">
            <el-button size="mini" type="text" @click="visible = false">取消</el-button>
            <el-button type="primary" size="mini" @click="visible = false">确定</el-button>
          </div>
        </div>
        <el-button slot="reference" :style="buttonStyle" class="el-button-exp" size="mini">{{ iconContent }}</el-button>
      </el-popover> -->
      <el-button slot="reference" :style="buttonStyle" class="el-button-exp" size="mini" @click="centerDialogVisible = true">{{ iconContent }}</el-button>
      <el-dialog
        :visible.sync="centerDialogVisible"
        title="详情"
        width="300%"
        center>
        <div>
          <!-- <swiper :options="swiperOption">
            <swiper-slide
              v-for="(slide, index) in swiperSlides"
              :key="index">
              I'm Slide {{ slide }}
            </swiper-slide>
            <div slot="pagination" class="swiper-pagination"/>
          </swiper> -->
          <span>需要注意的是内容是默认不居中的</span>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import svgIconExp from './components/SvgIconExp'
import SICToSvgName from './components/SICToSvgName'
import CONSTANTS from './components/constant'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    svgIconExp,
    swiper,
    swiperSlide
  },
  props: {
    text: {
      type: String,
      default: ''
    },
    svgIconCode: {
      type: String,
      default: ''
    },
    zoom: {
      type: Number,
      default: 9
    },
    voltageClass: {
      type: Number,
      default: 35
    },
    draggable: {
      type: Boolean,
      default: false
    },
    change: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      },
      swiperSlides: [1, 2, 3, 4, 5],
      centerDialogVisible: false
    }
  },
  computed: {
    iconClass() {
      return SICToSvgName.searchEnName(this.svgIconCode)
    },
    iconContent() {
      return SICToSvgName.searchCnName(this.svgIconCode)
    },
    svgStyle() {
      const val = this.zoom
      return this.changeSvgStyle(val)
    },
    showButton() {
      const val = this.zoom
      return this.displayButton(val)
    },
    buttonStyle() {
      const val = this.voltageClass
      return this.changeButtonColor(val)
    },
    rotate() {
      return this.draggable
    }
  },
  watch: {
    svgIconCode(val) {
      this.SICToSvgName(val)
    }
  },
  mounted() {
    // setInterval(() => {
    //   console.log('simulate async data')
    //   if (this.swiperSlides.length < 10) {
    //     this.swiperSlides.push(this.swiperSlides.length + 1)
    //   }
    // }, 3000)
  },
  methods: {
    changeButtonColor(val) {
      let color = '#FF0'
      if (val === 110) {
        color = CONSTANTS.LINE_110_COLOR
      } else if (val === 220) {
        color = CONSTANTS.LINE_220_COLOR
      }
      return {
        'color': color,
        'border-color': color
      }
    },
    displayButton(val) {
      let style = {}
      if (val <= 12) {
        style = {
          'display': 'none'
        }
      }
      return style
    },
    changeSvgStyle(val) {
      let style = {}
      if (val <= 8) {
        style = {
          'width': '0px',
          'height': '0px'
        }
      } else if (val <= 9) {
        style = {
          'width': '5px',
          'height': '5px'
        }
      } else if (val <= 10) {
        style = {
          'width': '7px',
          'height': '7px'
        }
      } else if (val <= 12) {
        style = {
          'width': '12px',
          'height': '12px'
        }
      } else if (val <= 13) {
        style = {
          'width': '20px',
          'height': '20px'
        }
      } else if (val <= 15) {
        style = {
          'width': '30px',
          'height': '30px'
        }
      } else if (val <= 17) {
        style = {
          'width': '40px',
          'height': '40px'
        }
      }
      return style
    }
  }
}
</script>
<style scoped>
.click {
  width: 60px;
  height: 60px;
}
.center {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
}
.el-button-exp {
  padding: 6px 6px;
  font-size: 5px;
  border-radius: 4px;
}
.el-button-exp {
  display: inline-block;
  line-height: 0.5;
  white-space: nowrap;
  cursor: pointer;
  background:rgba(0,0,0,0);
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  -webkit-transition: .1s;
  transition: .1s;
  font-weight: 500;
  padding: 7px 15px;
  font-size: 1px;
  border-radius: 4px;
  border-width: 1;
  border-style: solid;
}
</style>
