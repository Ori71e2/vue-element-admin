const amap = {
  state: {
    // 采用反序列化对象，确保内容唯一
    markersMap: new Map(),
    // 被监听对象
    markersMapUpdate: 0,
    markersMapAdd: 0
  },
  mutations: {
    SET_MARKERSMAP: (state, markerData) => {
      state.markersMap.set(markerData.id, markerData)
    },
    SET_MARKERSMAPUPDATE: (state) => {
      state.markersMapUpdate = (new Date()).getTime()
    },
    SET_MARKERSADD: (state) => {
      state.markersMapAdd = (new Date()).getTime()
    }
  },
  actions: {
    setMarkersMap({ commit }, markerData) {
      commit('SET_MARKERSMAP', markerData)
    },
    setMarkersMapUpdate({ commit }) {
      commit('SET_MARKERSMAPUPDATE')
    },
    setMarkersMapAdd({ commit }) {
      commit('SET_MARKERSADD')
    }
  }
}

export default amap
