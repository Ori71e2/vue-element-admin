<template>
  <div>
    <div>
      <line-phytower />
    </div>
    <div>
      <el-button slot="reference" type="primary">
        线路<i class="el-icon-arrow-up el-icon--right"/>
      </el-button>
    </div>
  </div>
</template>
<script>
import spreadAmapInstance from '../mixins/SpreadAmapInstance'

export default {
  mixins: [spreadAmapInstance],
  data() {
    return {

    }
  },
  computed: {
    zoom() {
      return this.$store.getters.currentZoom
    }
  },
  watch: {

  },
  mounted() {

  },
  activated() {

  },
  methods: {
  }
}
</script>
<style scoped>

</style>
