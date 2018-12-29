<template>
  <div>
    <div class="adap-svg">
      <svg-icon-exp icon-class="pushpin"/>
    </div>
    <div class="adap-text adap-font">
      <span>{{ text }}</span>
    </div>
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
  width: 30px;
  height: 30px;
}
.adap-text {
  width: 90px;
  height: 30px;
}
.adap-font {
  font-size: 4px;
}
</style>
