const CodeToName = [
  { code: 'SIC110100', enName: 'mapBuildingOther', cnName: '其他' },
  { code: 'SIC110101', enName: 'mapBuildingRoad', cnName: '道路' },
  { code: 'SIC110102', enName: 'mapBuildingPiping', cnName: '管道' },
  { code: 'SIC110103', enName: 'mapBuildingFloor', cnName: '楼房' },
  { code: 'SIC110104', enName: 'mapBuildingFactory', cnName: '厂房' },
  { code: 'SIC110200', enName: 'mapPlantOtherTree', cnName: '其他' },
  { code: 'SIC110201', enName: 'mapPlantPoplar', cnName: '杨树' },
  { code: 'SIC110202', enName: 'mapPlantAfforestationTree', cnName: '绿化树' },
  { code: 'SIC110203', enName: 'mapPlantWeedTree', cnName: '杂树' },
  { code: 'SIC110300', enName: 'mapFloaterOther', cnName: '其他' },
  { code: 'SIC110301', enName: 'mapFloaterAntiaircraftAdvertising', cnName: '高炮' },
  { code: 'SIC110302', enName: 'mapFloaterBillBoard', cnName: '广告牌' },
  { code: 'SIC110303', enName: 'mapFloaterBalloon', cnName: '气球' },
  { code: 'SIC110304', enName: 'mapFloaterInflatableObject', cnName: '充气物' },
  { code: 'SIC110305', enName: 'mapFloaterLargeGreenhouse', cnName: '大棚' },
  { code: 'SIC110400', enName: 'mapRiverOther', cnName: '其他' },
  { code: 'SIC110401', enName: 'mapRiverFish', cnName: '鱼塘' },
  { code: 'SIC110402', enName: 'mapRiverDitch', cnName: '河流' },
  { code: 'SIC110403', enName: 'mapRiverCrab', cnName: '螃蟹塘' },
  { code: 'SIC110404', enName: 'mapRiverLobster', cnName: '龙虾塘' },
  { code: 'SIC110405', enName: 'mapRiverCannal', cnName: '运河' },
  { code: 'SIC110406', enName: 'mapRiverYellowRiver', cnName: '废黄河' },
  { code: 'SIC120100', enName: 'mapMachOtherCar', cnName: '其他' },
  { code: 'SIC120101', enName: 'mapMachCrane', cnName: '吊车' },
  { code: 'SIC120102', enName: 'mapMachTowerCrane', cnName: '塔吊' },
  { code: 'SIC120103', enName: 'mapMachExcavator', cnName: '挖机' },
  { code: 'SIC120104', enName: 'mapMachTrack', cnName: '货车' },
  { code: 'SIC210100', enName: 'mapTowerOther', cnName: '其他' },
  { code: 'SIC210101', enName: 'mapTowerBase', cnName: '基础' },
  { code: 'SIC210202', enName: 'mapTowerMaterial', cnName: '塔材' },
  { code: 'SIC210303', enName: 'mapTowerArmourClamp', cnName: '金具' },
  { code: 'SIC210404', enName: 'mapTowerBolt', cnName: '螺栓' },
  { code: 'SIC220100', enName: 'mapMonitorOther', cnName: '其他' },
  { code: 'SIC220101', enName: 'mapMonitorPicture', cnName: '图像监控' },
  { code: 'SIC220102', enName: 'mapMonitorVideo', cnName: '视频监控' },
  { code: 'SIC220103', enName: 'mapMonitorFault', cnName: '故障监测仪' },
  { code: 'SIC220200', enName: 'mapSignOtherBoard', cnName: '其他' },
  { code: 'SIC220201', enName: 'mapSignHighVoltageWarning', cnName: '高压警示牌' },
  { code: 'SIC220202', enName: 'mapSignProhibitionOfConstruction', cnName: '禁止施工牌' },
  { code: 'SIC220203', enName: 'mapSignNoFishing', cnName: '钓鱼牌' },
  { code: 'SIC220300', enName: 'mapProtectOther', cnName: '其他' },
  { code: 'SIC220301', enName: 'mapProtectCrashBearer', cnName: '防撞墩' },
  { code: 'SIC220302', enName: 'mapProtectCrashBarrier', cnName: '防撞围栏' },
  { code: 'SIC220303', enName: 'mapProtectRail', cnName: '围栏' },
  { code: 'SIC220304', enName: 'mapProtectHeightLimit', cnName: '限高架' }
]
class SICToSvgName {
  constructor() {
    this.codeMap = new Map()
    CodeToName.map((value, key) => {
      this.codeMap.set(key, value)
    })
  }
  static getCodeList() {
    return CodeToName
  }
  static searchEnName(code) {
    return this.codeMap.get(code).enName
  }
  static searchCnName(code) {
    return this.codeMap.get(code).cnName
  }
}
export default SICToSvgName
