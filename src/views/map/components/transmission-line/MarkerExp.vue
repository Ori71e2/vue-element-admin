<template>
  <div>
    <div class="adap-svg">
      <svg-icon-exp icon-class="mapTowerCrane"/>
    </div>
    <!-- <div class="adap-text adap-font text-label">
      <p class="no-break">{{ text }}</p>
      <el-popover placement="top-start" title="标题" width="200" trigger="hover" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
        <el-button slot="reference">{{ text }}</el-button>
      </el-popover>
    </div> -->
    <!-- <div>
      <el-popover placement="top-start" title="标题" trigger="hover" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
        <el-button slot="reference" class="el-button-exp" size="mini"><span class="adap-font">{{ text }}</span></el-button>
      </el-popover>
    </div> -->
  </div>
</template>

<script>
import svgIconExp from '../transmission-line-components/SvgIconExp'
export default {
  components: {
    svgIconExp
  },
  props: {
    text: {
      type: String,
      default: ''
    },
    zoom: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
    }
  }
}
</script>
<style scoped>
.adap-svg {
  width: 1px;
  height: 1px;
}
.adap-text {
  /* width: auto; */
  display: inline-block !important;
  display: inline;
  /* height: 30px; */
}
.adap-font {
  font-size: 0.1px;
}
.no-break {
  display: inline-block;
  white-space: nowrap;
  width: 100%;
  line-height: 9px;
  min-height: 1px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.text-label {
  border-width: 1;
  border-style: solid;
  border-color: #F00;
}
.el-button-exp {
  padding: 6px 10px;
  font-size: 5px;
  border-radius: 4px;
}
.el-button-exp {
  display: inline-block;
  line-height: 0.5;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
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
  font-size: 5px;
  border-radius: 4px;
}
</style>
