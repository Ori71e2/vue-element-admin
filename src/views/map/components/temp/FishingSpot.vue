<template>
  <div/>
</template>
<script>
import { createCustomComponent } from 'vue-amap'

const customMapFishingSpotMarkers = createCustomComponent({
  name: 'custom-map-fishing-spot-markers',
  props: [
    'visible',
    'zIndex',
    'data',
    'getPosition',
    'getHoverTitle',
    'compareDataItem',
    'autoSetFitView',
    'renderOptions',
    'maxChildrenOfQuadNode',
    'maxDepthOfQuadTree',
    'badBoundsAspectRatio'
  ],
  contextReady() {
  },
  init(options, map) {
    // console.log('init')
    return new Promise((resolve, reject) => {
      window.AMapUI.loadUI(['misc/PointSimplifier'], PointSimplifier => {
        // console.log('init')
        // const { renderConstructor: renderStr, renderOptions } = options
        const { renderConstructor: renderStr } = options
        if (renderStr) options.renderConstructor = renderStr.split('.').reduce((pre, cur) => pre[cur], { PointSimplifier })
        if (options.renderOptions && options.renderOptions.pointStyle) {
          const { pointStyle } = options.renderOptions
          if (pointStyle.contentImg) pointStyle.content = PointSimplifier.Render.Canvas.getImageContent(pointStyle.contentImg, () => this.$amapComponent.renderLater(), (e) => console.error(e))
        }
        resolve(new PointSimplifier(options))
      })
    })
  },
  converters: {},
  handlers: {
    zIndex(index) {
      this.setzIndex(index)
    },
    visible(flag) {
      flag === false ? this.hide() : this.show()
    }
  }
})
export default customMapFishingSpotMarkers
</script>
    this.marker1 = new window.AMap.Marker({
      map: this.showMarker ? this.$amap : null,
      draggable:true,
      topWhenClick: true,
      visible: this.showMarker,
      position: new window.AMap.LngLat(origin.X, origin.Y)
    })
    this.marker2 = new window.AMap.Marker({
      map: this.showMarker ? this.$amap : null,
      draggable:true,
      topWhenClick: true,
      visible: this.showMarker,
      position:new window.AMap.LngLat(destination.X, destination.Y)
    })
