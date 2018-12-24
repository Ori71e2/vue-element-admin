<template>
  <div>
    <div>
      <svg-icon icon-class="pushpin"/>
    </div>
    <div>
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
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
