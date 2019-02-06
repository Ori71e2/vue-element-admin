<template>
  <div class="click">
    <div>
      <svg-icon-exp :style-name="svgStyle" :icon-class="iconClass" :rotate="rotate"/>
    </div>
    <!-- <div class="adap-text adap-font text-label">
      <p>{{ text }}</p>
    </div> -->
    <div :style="showButton" class="center">
      <el-dialog
        :visible.sync="outerDialogVisible"
        width="30%"
        append-to-body>
        <span slot="title"><i class="el-icon-info"/> Info</span>
        <div>
          <picture-swiper/>
          <el-dialog
            :visible.sync="innerDialogVisible"
            width="30%"
            title="内层 Dialog"
            append-to-body>
            <div/>
          </el-dialog>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="innerDialogVisible = true">打开内层 Dialog</el-button>
          <el-button @click="outerDialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="outerDialogVisible = false">Confirm</el-button>
        </span>
      </el-dialog>
      <el-button :style="buttonStyle" class="el-button-exp" size="mini" @click="showDialog">{{ iconContent }}</el-button>
      <!-- <el-button slot="reference" :style="buttonStyle" class="el-button-exp" size="mini" @click="popDialog">{{ iconContent }}</el-button> -->
    </div>
  </div>
</template>

<script>
import svgIconExp from './components/SvgIconExp'
import SICToSvgName from './components/util/SICToSvgName'
import CONSTANTS from './components/util/constant'
import pictureSwiper from './components/PictureSwiper'
export default {
  components: {
    svgIconExp,
    pictureSwiper
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
      outerDialogVisible: false,
      innerDialogVisible: false
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
  },
  methods: {
    popDialog() {
      this.$dialog({
        title: 'dialog',
        width: '30%',
        showClose: false,
        component: () => <pictureSwiper />
      })
    },
    showDialog() {
      this.outerDialogVisible = true
      console.log(this.outerDialogVisible)
    },
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
