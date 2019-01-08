<template>
  <div>
    <div>
      <svg-icon-exp :style-name="changeByZoom()" icon-class="mapTowerCrane"/>
    </div>
    <!-- <div class="adap-text adap-font text-label">
      <p class="no-break">{{ text }}</p>
      <el-popover placement="top-start" title="标题" width="200" trigger="hover" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
        <el-button slot="reference">{{ text }}</el-button>
      </el-popover>
    </div> -->
    <div :style="buttonDisplay()" class="center">
      <el-popover placement="bottom" title="标题" trigger="click">
        <div>
          <p>这是一段内容这是一段内容确定删除吗？</p>
          <div style="text-align: right; margin: 0">
            <el-button size="mini" type="text" @click="visible2 = false">取消</el-button>
            <el-button type="primary" size="mini" @click="visible2 = false">确定</el-button>
          </div>
        </div>
        <el-button slot="reference" :style="elButtonStyle()" class="el-button-exp" size="mini">{{ text }}</el-button>
      </el-popover>
    </div>
  </div>
</template>

<script>
import svgIconExp from './components/SvgIconExp'
import CONSTANTS from '../utils/constant'
export default {
  components: {
    svgIconExp
  },
  props: {
    text: {
      type: String,
      default: ''
    },
    type: {
      type: Number,
      default: 0
    },
    zoom: {
      type: Number,
      default: 0
    },
    voltageClass: {
      type: Number,
      default: 35
    }
  },
  data() {
    return {
      visible2: false
    }
  },
  watch: {
    zoom(val) {
      // this.changeByZoom(val)
    }
  },
  methods: {
    elButtonStyle() {
      let color = '#FF0'
      console.log(CONSTANTS.LINE_110_COLOR)
      if (this.voltageClass === 110) {
        color = CONSTANTS.LINE_110_COLOR
        console.log(this.voltageClass)
      } else if (this.voltageClass === 220) {
        color = CONSTANTS.LINE_220_COLOR
      }
      return {
        'color': color,
        'border-color': color
      }
    },
    buttonDisplay() {
      if (this.zoom <= 12) {
        return {
          'display': 'none'
        }
      } else {
        return {
        }
      }
    },
    changeByZoom() {
      if (this.zoom <= 8) {
        return {
          'width': '0px',
          'height': '0px'
        }
      } else if (this.zoom <= 9) {
        return {
          'width': '5px',
          'height': '5px'
        }
      } else if (this.zoom <= 10) {
        return {
          'width': '7px',
          'height': '7px'
        }
      } else if (this.zoom <= 12) {
        return {
          'width': '12px',
          'height': '12px'
        }
      } else if (this.zoom <= 13) {
        return {
          'width': '20px',
          'height': '20px'
        }
      } else if (this.zoom <= 15) {
        return {
          'width': '30px',
          'height': '30px'
        }
      } else if (this.zoom <= 17) {
        return {
          'width': '40px',
          'height': '40px'
        }
      }
    }
  }
}
</script>
<style scoped>
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
