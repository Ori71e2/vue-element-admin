<template>
  <div>
    <el-popover placement="top" trigger="hover">
      <div>
        <el-row :gutter="20" type="flex" class="row-bg" justify="space-around">
          <el-col :span="2"><div><el-tag type="success">起点X</el-tag></div></el-col>
          <el-col :span="7"><el-input v-model="originX" placeholder="请输入内容"/></el-col>
          <el-col :span="2"><div><el-tag type="warning">终点X</el-tag></div></el-col>
          <el-col :span="7"><el-input v-model="destinationX" placeholder="请输入内容"/></el-col>
          <el-col :span="6"><el-switch :inactive-value="true" :active-value="false" v-model="activeSelectPoi" active-color="#dcdcdc" inactive-color="#13ce66" inactive-text="选点" class="el-switch" /></el-col>
          <el-col :span="4"><el-button type="primary" @click="toggleDrivingSearch">开始规划</el-button></el-col>
          <el-col :span="4"><el-button type="primary" @click="toggleDispalyDrivingNavPanel">显示文字</el-button></el-col>
        </el-row>
        <el-row :gutter="20" type="flex" class="row-bg" justify="space-around">
          <el-col :span="2"><div class="tag"><el-tag type="success">起点Y</el-tag></div></el-col>
          <el-col :span="7"><el-input v-model="originY" placeholder="请输入内容"/></el-col>
          <el-col :span="2"><div class="tag"><el-tag type="warning">终点Y</el-tag></div></el-col>
          <el-col :span="7"><el-input v-model="destinationY" placeholder="请输入内容"/></el-col>
          <el-col :span="6"><el-switch v-model="switchPoi" active-color="#13ce66" inactive-color="#ff4949" active-text="终点" inactive-text="起点" class="el-switch" /></el-col>
          <el-col :span="4"><el-button type="danger" @click="toggleClearDrivingSearch">取消规划</el-button></el-col>
          <el-col :span="4"><el-button type="danger" @click="toggleHideDrivingNavPanel">隐藏文字</el-button></el-col>
        </el-row>
      </div>
      <el-button slot="reference" type="primary">
        号航<i class="el-icon-arrow-up el-icon--right"/>
      </el-button>
    </el-popover>
    <custom-amap-driving-nav :origin-x="originX" :origin-y="originY" :destination-x="destinationX" :destination-y="destinationY" :panel-show="panelShow" :driving-search="drivingSearch" :driving-clear="drivingClear" :panel-id="drivingPanelId" />
    <custom-amap-select-poi :active="activeSelectPoi" @get-select-position="setSelectPoi" />
  </div>
</template>

<script>
import customAmapDrivingNav from '../amap-custom/DrivingNav'
import customAmapSelectPoi from '../amap-custom/SelectPoi'
import spreadAmapInstance from '../mixins/SpreadAmapInstance'
export default {
  components: {
    customAmapDrivingNav, customAmapSelectPoi
  },
  mixins: [spreadAmapInstance],
  props: {
    panelId: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      originX: 0,
      originY: 0,
      destinationX: 0,
      destinationY: 0,
      drivingPanelId: this.panelId,
      panelShow: '',
      drivingSearch: '',
      drivingClear: '',
      clickListener: '',
      activeSelectPoi: '',
      switchPoi: ''
    }
  },
  computed: {
  },
  mounted() {
  },
  activated() {
  },
  methods: {
    toggleDrivingSearch() {
      this.drivingSearch = true
    },
    toggleClearDrivingSearch() {
      this.drivingSearch = !this.drivingSearch
    },
    toggleHideDrivingNavPanel() {
      this.panelShow = true
    },
    toggleDispalyDrivingNavPanel() {
      this.panelShow = false
    },
    setSelectPoi(poi) {
      this.selectPoi = poi
      if (!this.switchPoi) {
        this.originX = poi.X
        this.originY = poi.Y
      } else {
        this.destinationX = poi.X
        this.destinationY = poi.Y
      }
    }
  }
}
</script>
<style scoped>
.panelMapNav {
  position: fixed;
  background-color: white;
  max-height: 70%;
  overflow-y: auto;
  top: -20px;
  right: 10px;
  width: 280px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.position-float-left {
  float: left;
}
.position-float-none {
  float: none;
}
.el-switch {
  top: 50%;
  transform: translate(0,-50%);
}
</style>
