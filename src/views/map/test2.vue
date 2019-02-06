<template>
  <div :style="gridWrapper">
    <el-button v-for="(value, index) in data" :key="index" class="el-button--custom"><svg-icon icon-class="bug" class="icon-class--custom"/><p>挖机施工{{ value }}</p></el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  },
  computed: {
    gridWrapper() {
      const count = this.data.length
      return {
        display: 'grid',
        gridTemplateColumns: '12.5% '.repeat(8),
        gridTemplateRows: '110px '.repeat(count / 8 + 1)
      }
    }
  }
}
</script>
<style scoped>
.el-button--custom {
  height: 100px !important;
}
.icon-class--custom {
  width: 65%;
  height: 65%;
}
</style>
