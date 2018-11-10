<template>
  <div/>
</template>

<script>
import { createCustomComponent } from 'vue-amap'
const customAmapDrivingNav = createCustomComponent({
  data() {
    return {
      map: '',
      AMap: '',
      panelDrivingNavElement: '',
      flag: '',
      originX: '',
      originY: '',
      destinationX: '',
      destinationY: '',
      clickListener: '',
      data: 'Helllo'
    }
  },
  mounted() {
    // console.log("mapNav.flag " + this.mapNav.flag);
  },
  activated() {
    // this.dyLayer = new DyLayer(this.map, AMap);
  },
  computed: {
    ...mapState({
        mapNav: state => state.mapStateWatch.mapNav
    }),
    getMapNavFlag() {
        return this.mapNav.flag;
    },
    getNavState() {
    }
  },
  watch: {
    getMapNavFlag(newVal, oldVal) {
      console.log(this.mapNav.flag);
      this.originX = this.mapNav.origin.x;
      this.originY = this.mapNav.origin.y;
      this.destinationX = this.mapNav.destination.x;
      this.destinationY = this.mapNav.destination.y;
      // 判断是否加载完成以及是否是第一次
      if (this.drivingNav) {
          this.toggleDrivingSearch();
      }
    }
  },
  methods: {
    toggleDrivingSearch() {
      var errorMsg = ""
      // 根据起终点经纬度规划驾车导航路线
      // this.drivingNav.search(new this.AMap.LngLat(118.716087,33.720534), new this.AMap.LngLat(118.720623, 33.70349));
      if (this.originX < 0 || this.originX > 180) {
          errorMsg = " 起点经度 ";
      }
      if (this.originY < 0 || this.originY > 90) {
          errorMsg = errormsg + " 起点维度 ";
      }
      if (this.destinationX < 0 || this.destinationX > 180) {
          errorMsg = errorMsg + " 终点经度 ";
      }
      if (this.destinationY < 0 || this.destinationY > 90) {
          errorMsg = errorMsg + " 终点维度 ";
      }
      if (errorMsg != "") {
          errorMsg += "取值不在范围内！"
          alert(errormsg);
          return;
      } 
      console.log("this.originX" + this.originX);
      console.log("this.originX" + this.originY);
      console.log("this.originX" + this.destinationX);
      console.log("this.originX" + this.destinationY);
      this.removeClickListener();
      this.drivingNav.search(new this.AMap.LngLat(this.originX, this.originY), new this.AMap.LngLat(this.destinationX, this.destinationY))
    },
    toggleClearDrivingSearch() {
      this.drivingNav.clear()
    },
    toggleHideDrivingNavPanel() {
      this.panelDrivingNavElement.hidden = true
    },
    toggleDispalyDrivingNavPanel() {
      this.panelDrivingNavElement.hidden = false        
    },
    toggleGetPosition(data) {
      this.flag = data;
      this.removeClickListener(); //防止重复绑定
      this.clickListener = AMap.event.addListener(this.map, "click", function(e) {
          /*
          if (this.flag == 1) {
              this.originX = e.lnglat.getLng()
              this.originY = e.lnglat.getLat()
          } else {
              this.destinationX = e.lnglat.getLng()
              this.destinationY = e.lnglat.getLat()          
          }    
          */
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
        AMap.event.removeListener(this.clickListener) // 移除事件，以绑定时返回的对象作为参数
      }
    }
  }
})
export default customAmapDrivingNav
</script>
