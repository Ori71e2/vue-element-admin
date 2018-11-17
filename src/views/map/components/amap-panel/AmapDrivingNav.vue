<template>
  <div>
    <div>
      <el-popover placement="top" trigger="hover">
        <div>
          <el-row :gutter="20" type="flex" class="row-bg" justify="space-around">
            <el-col :span="2">
              <div class="tag">
                <el-tag type="success">起点X</el-tag>
              </div>
            </el-col>
            <el-col :span="8">
              <div>
                <el-input v-model="originX" placeholder="请输入内容"/>
              </div>
            </el-col>
            <el-col :span="2">
              <div class="tag">
                <el-tag type="warning">终点X</el-tag>
              </div>
            </el-col>
            <el-col :span="8">
              <div>
                <el-input v-model="destinationX" placeholder="请输入内容"/>
              </div>
            </el-col>
            <el-col :span="4">
              <div>
                <el-button type="success" icon="el-icon-location" @click="toggleGetPosition(1)">选取起点</el-button>
              </div>
            </el-col>
            <el-col :span="4">
              <div>
                <el-button type="primary" @click="toggleDrivingSearch">开始规划</el-button>
              </div>
            </el-col>
            <el-col :span="4">
              <div>
                <el-button type="primary" @click="toggleDispalyDrivingNavPanel">显示文字</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20" type="flex" class="row-bg" justify="space-around">
            <el-col :span="2">
              <div class="tag">
                <el-tag type="success">起点Y</el-tag>
              </div>
            </el-col>
            <el-col :span="8">
              <div>
                <el-input v-model="originY" placeholder="请输入内容"/>
              </div>
            </el-col>
            <el-col :span="2">
              <div class="tag">
                <el-tag type="warning">终点Y</el-tag>
              </div>
            </el-col>
            <el-col :span="8">
              <div>
                <el-input v-model="destinationY" placeholder="请输入内容"/>
              </div>
            </el-col>
            <el-col :span="4">
              <div>
                <el-button type="warning" icon="el-icon-location" @click="toggleGetPosition(2)">选取终点</el-button>
              </div>
            </el-col>
            <el-col :span="4">
              <div>
                <el-button type="danger" @click="toggleClearDrivingSearch">取消规划</el-button>
              </div>
            </el-col>
            <el-col :span="4">
              <div>
                <el-button type="danger" @click="toggleHideDrivingNavPanel">隐藏文字</el-button>
              </div>
            </el-col>
          </el-row>
        </div>
        <el-button slot="reference" type="primary">
          号航<i class="el-icon-arrow-up el-icon--right"/>
        </el-button>
      </el-popover>
      <custom-amap-driving-nav
        :origin-x="originX"
        :origin-y="originY"
        :destination-x="destinationX"
        :destination-y="destinationY"
        :panel-id="panelId"
        :panel-show="panelShow"
        :driving-sarch="drivingSearch"
        :driving-clear="drivingClear"
      />
      <custom-amap-select-poi :active="activeSelectPoi"/>
    </div>
  </div>
</template>

<script>
import customAmapDrivingNav from '../amap-custom/DrivingNav'
import customAmapSelectPoi from '.,/amap-custom/SelectPoi'
import spreadAmapInstance from '../mixins/SpreadAmapInstance'
export default {
  components: {
    customAmapDrivingNav, customAmapSelectPoi
  },
  mixins: [spreadAmapInstance],
  data() {
    return {
      originX: '',
      originY: '',
      destinationX: '',
      destinationY: '',
      panelId: '',
      panelShow: '',
      drivingSearch: '',
      drivingClear: '',
      clickListener: '',
      activeSelectPoi: ''
    }
  },
  mounted() {
  },
  activated() {
  },
  computed: {
  },
  methods: {
    toggleDrivingSearch() {
      this.removeClickListener()
      this.drivingSearch = true
    },
    toggleClearDrivingSearch() {
      this.removeClickListener()
      this.drivingSearch = false
    },
    toggleHideDrivingNavPanel() {
      this.panelDrivingNavElement.hidden = true
    },
    toggleDispalyDrivingNavPanel() {
      this.panelDrivingNavElement.hidden = false
    },
    toggleGetPosition(data) {
      this.flag = data
      this.removeClickListener() // 防止重复绑定
      this.clickListener = window.AMap.event.addListener(this.$amap, 'click', function(e) {
        this.setPosition(e)
      }, this)
    },
    setPosition(e) {
      if (this.flag == 1) {
        this.originX = e.lnglat.getLng()
        this.originY = e.lnglat.getLat()
      } else {
        this.destinationX = e.lnglat.getLng()
        this.destinationY = e.lnglat.getLat()
      }
    },
    removeClickListener() {
      if (this.clickListener) {
        AMap.event.removeListener(this.clickListener)
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
.tag {
  margin-top: 5px;
}
</style>
