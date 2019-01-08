<template>
  <svg :class="svgClass" :style="svgStyle" aria-hidden="true">
    <!-- <use :xlink:href="iconName" filter="url(#spotlight)"/> -->
    <use :xlink:href="iconName"/>
    <!-- <defs>
      <filter id="spotlight">
        <feFlood result="floodFill" x="0" y="0" width="100%" height="50%" transform="translate(0 15)" flood-color="green" flood-opacity="1"/>
        <feBlend in="SourceGraphic" in2="floodFill" mode="multiply"/>
      </filter>
      <mask id="redmask" x="0" y="0" width="1" height="1" maskContentUnits="objectBoundingBox">
        <rect x="0" y="0" width="1" height="0.5" style="fill: #fff;"/>
        <rect x="0" y="0.5" width="1" height="0.5" style="fill: #00f;"/>
      </mask>
    </defs> -->
    <!-- <g style="mask: url(#redmask)">
      <circle cx="15" cy="15" r="15" style="fill: red;" />
    </g> -->
  </svg>
</template>

<script>
export default {
  name: 'SvgIconMul',
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    },
    styleName: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`
    },
    svgClass() {
      if (this.className) {
        return 'svg-icon ' + this.className
      } else {
        return 'svg-icon'
      }
    },
    svgStyle() {
      return this.styleName
    }
  }
}
</script>

<style scoped>
.svg-icon {
  width: 50px;
  height: 50px;
  vertical-align: -4.5px;
  overflow: hidden;
}
</style>
