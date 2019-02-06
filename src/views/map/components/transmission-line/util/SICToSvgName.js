const CodeToName = {
  SIC110100: { enName: 'mapBuildingOther', cnName: '其他' },
  SIC110101: { enName: 'mapBuildingRoad', cnName: '道路' },
  SIC110102: { enName: 'mapBuildingPiping', cnName: '管道' },
  SIC110103: { enName: 'mapBuildingFloor', cnName: '楼房' },
  SIC110104: { enName: 'mapBuildingFactory', cnName: '厂房' },
  SIC110200: { enName: 'mapPlantOtherTree', cnName: '其他' },
  SIC110201: { enName: 'mapPlantPoplar', cnName: '杨树' },
  SIC110202: { enName: 'mapPlantAfforestationTree', cnName: '绿化树' },
  SIC110203: { enName: 'mapPlantWeedTree', cnName: '杂树' },
  SIC110300: { enName: 'mapFloaterOther', cnName: '其他' },
  SIC110301: { enName: 'mapFloaterAntiaircraftAdvertising', cnName: '高炮' },
  SIC110302: { enName: 'mapFloaterBillBoard', cnName: '广告牌' },
  SIC110303: { enName: 'mapFloaterBalloon', cnName: '气球' },
  SIC110304: { enName: 'mapFloaterInflatableObject', cnName: '充气物' },
  SIC110305: { enName: 'mapFloaterLargeGreenhouse', cnName: '大棚' },
  SIC110400: { enName: 'mapRiverOther', cnName: '其他' },
  SIC110401: { enName: 'mapRiverFish', cnName: '鱼塘' },
  SIC110402: { enName: 'mapRiverDitch', cnName: '河流' },
  SIC110403: { enName: 'mapRiverCrab', cnName: '螃蟹塘' },
  SIC110404: { enName: 'mapRiverLobster', cnName: '龙虾塘' },
  SIC110405: { enName: 'mapRiverCannal', cnName: '运河' },
  SIC110406: { enName: 'mapRiverYellowRiver', cnName: '废黄河' },
  SIC120100: { enName: 'mapMachOtherCar', cnName: '其他' },
  SIC120101: { enName: 'mapMachCrane', cnName: '吊车' },
  SIC120102: { enName: 'mapMachTowerCrane', cnName: '塔吊' },
  SIC120103: { enName: 'mapMachExcavator', cnName: '挖机' },
  SIC120104: { enName: 'mapMachTrack', cnName: '货车' },
  SIC210100: { enName: 'mapTowerOther', cnName: '其他' },
  SIC210101: { enName: 'mapTowerBase', cnName: '基础' },
  SIC210202: { enName: 'mapTowerMaterial', cnName: '塔材' },
  SIC210303: { enName: 'mapTowerArmourClamp', cnName: '金具' },
  SIC210404: { enName: 'mapTowerBolt', cnName: '螺栓' },
  SIC220100: { enName: 'mapMonitorOther', cnName: '其他' },
  SIC220101: { enName: 'mapMonitorPicture', cnName: '图像监控' },
  SIC220102: { enName: 'mapMonitorVideo', cnName: '视频监控' },
  SIC220103: { enName: 'mapMonitorFault', cnName: '故障监测仪' },
  SIC220200: { enName: 'mapSignOtherBoard', cnName: '其他' },
  SIC220201: { enName: 'mapSignHighVoltageWarning', cnName: '高压警示牌' },
  SIC220202: { enName: 'mapSignProhibitionOfConstruction', cnName: '禁止施工牌' },
  SIC220203: { enName: 'mapSignNoFishing', cnName: '钓鱼牌' },
  SIC220300: { enName: 'mapProtectOther', cnName: '其他' },
  SIC220301: { enName: 'mapProtectCrashBearer', cnName: '防撞墩' },
  SIC220302: { enName: 'mapProtectCrashBarrier', cnName: '防撞围栏' },
  SIC220303: { enName: 'mapProtectRail', cnName: '围栏' },
  SIC220304: { enName: 'mapProtectHeightLimit', cnName: '限高架' }
}
class SICToSvgName {
  constructor(code) {
    this.code = code
  }
  static searchEnName(code) {
    return CodeToName[code].enName
  }
  static searchCnName(code) {
    return CodeToName[code].cnName
  }
}
export default SICToSvgName
