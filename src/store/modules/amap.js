const amap = {
  state: {
    // 采用反序列化对象，确保内容唯一
    markerData: ''
  },
  mutations: {
    SET_MARKERDATA: (state, markerData) => {
      state.markerData = markerData
    }
  },
  actions: {
    setMarkerData({ commit }, markerData) {
      commit('SET_MARKERDATA', markerData)
    }
  }
}

export default amap
