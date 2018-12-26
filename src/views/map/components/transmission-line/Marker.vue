<template>
  <div>
    <div class="blend">
      <svg-icon-mul icon-class="pushpin"/>
    </div>
    <div>
      {{ text }}
    </div>
  </div>
</template>

<script>
import svgIconMul from '../transmission-line-components/SvgIconMul'
export default {
  components: {
    svgIconMul
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

</style>
