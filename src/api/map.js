import request from '@/utils/request'

export function fetchFishingSpotList(query) {
  return request({
    url: '/map/FishingSpotList',
    method: 'get'
  })
}

export function fetchConstructionPlantList(id) {
  return request({
    url: '/article/ConstructionPlantList',
    method: 'get'
  })
}

