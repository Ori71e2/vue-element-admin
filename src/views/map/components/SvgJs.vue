<template>
  <div id="drawing"/>
</template>

<script>
import { createCustomComponent } from 'vue-amap'
import SVG from 'svg.js'
const customMapSvgJs = createCustomComponent({
  data() {
    return {
      svg: null,
      path: null,
      svgDraw: null
    }
  },
  init(_options, map) {
    console.log('svg init')

    return new Promise(resolve => {
      window.AMap.plugin('AMap.CustomLayer', () => {
        var size = this.$amap.getSize()
        console.log('SvgJs 1')
        var draw = SVG('drawing').size(size.width, size.height)
        console.log(draw)
        this.svgCanvas = draw
        // 使用draw.node获取svg元素
        // 图层之间的层级决定事件是否会被捕获
        var customLayer = new window.AMap.CustomLayer(draw.node, { zIndex: 400 })
        console.log('svgjs customLayer')
        console.log(customLayer)
        customLayer.render = this.onRender
        this.$amap.add(customLayer)

        this.path = draw.rect(100, 100).attr({ fill: '#f06' })
        this.path.on('click', function() {
          console.log('svg path clicked')
        })
        draw.rect(50, 200).attr({ fill: '#f56' }).click(function() {
          console.log('svg path clicked')
        })
        draw.line(0, 0, 200, 200).stroke({ width: 1 }).click(function() {
          console.log('svg path clicked')
        })
        resolve(this.customLayer)
      })
    })
  },
  contextReady() {
    console.log('Context Ready')
  },
  created: () => {
    console.log('Created Svg')
  },
  mounted: () => {
    console.log('Mounted Svg')
  },
  methods: {
    onRender() {

    },
    buildPath() {
      var path = []
      var center = this.$amap.lngLatToContainer([118.716184, 33.720615])

      for (var k = 0; k < 6; k += 1) {
        var ag = Math.PI * 60 / 180 * k
        var x = center.x + Math.cos(ag) * 50
        var y = center.y + Math.sin(ag) * 50
        path.push((k === 0 ? 'M' : 'L') + x + ' ' + y)
      }
      return path.join(' ') + ' Z'
    }
  }
})

export default customMapSvgJs
</script>
