
const FishingSpotList = {
  Spot1: [118.720366, 33.69942],
  Spot2: [118.720623, 33.70349],
  Spot3: [118.721053, 33.707703]
}
const ConstructionPlantList = {
  Plant1: [118.720967, 33.713343],
  Plant2: [118.71719, 33.719412],
  Plant3: [118.715044, 33.717484]
}

export default {
  getFishingSpotList: () => {
    return {
      data: FishingSpotList
    }
  },
  getConstructionPlantList: () => {
    return {
      data: ConstructionPlantList
    }
  }
}
