<template>
  <div class="container">
    <el-form ref="form" :model="form" :label-position="labelPosition" label-width="120px">
      <el-form-item label="Marke ID">
        <el-tag>{{ form.id }}</el-tag>
      </el-form-item>
      <el-form-item label="Marker Name">
        <el-input v-model="form.name"/>
      </el-form-item>
      <el-form-item label="Marker Type">
        <el-input v-model="form.typeCode" placeholder="Select SICCODE">
          <i slot="prefix" class="el-input__icon el-icon-menu" @click="openDialog"/>
        </el-input>
        <el-dialog :visible.sync="dialogVisible" width="60%" append-to-body @close="closeDialog">
          <span slot="title"><i class="el-icon-info"/> Icon</span>
          <div class="dialog-container">
            <div :style="gridWrapper">
              <el-button v-for="(type, index) in markerType" :key="index" class="el-button--custom" @click="form.typeCode = type.code">
                <svg-icon :icon-class="type.enName" class="icon-class--custom"/>
                <p>{{ type.thirdClass }}: {{ type.cnName }}</p>
              </el-button>
            </div>
          </div>
          <span slot="footer" class="dialog-footer">
            <el-button @click="cancelSelect">Cancel</el-button>
            <el-button type="primary" @click="confirmSelect">Confirm</el-button>
          </span>
        </el-dialog>
      </el-form-item>
      <el-form-item label="Marker Position">
        <el-input v-model="form.position"/>
      </el-form-item>
      <el-form-item label="Belongs To Line">
        <el-input v-model="form.line"/>
      </el-form-item>
      <el-form-item label="Tower One">
        <el-input v-model="form.towerOne"/>
      </el-form-item>
      <el-form-item label="Tower Two">
        <el-input v-model="form.towerTwo"/>
      </el-form-item>
      <el-form-item label="Company">
        <el-input v-model="form.company"/>
      </el-form-item>
      <el-form-item label="Contact One">
        <el-input v-model="form.contactOne"/>
      </el-form-item>
      <el-form-item label="Phone One">
        <el-input v-model="form.phoneOne"/>
      </el-form-item>
      <el-form-item label="Contact Two">
        <el-input v-model="form.contactTwo"/>
      </el-form-item>
      <el-form-item label="Phone Two">
        <el-input v-model="form.phoneTwo"/>
      </el-form-item>
      <el-form-item label="Device Owner">
        <el-input v-model="form.deviceOwner"/>
      </el-form-item>
      <el-form-item label="Description">
        <el-input v-model="form.description"/>
      </el-form-item>
      <el-form-item label="Remark">
        <el-input v-model="form.remark"/>
      </el-form-item>
      <el-form-item label="FindTime">
        <el-col :span="10">
          <el-date-picker v-model="form.findTime" type="datetime" placeholder="Select Time" style="width: 100%;"/>
        </el-col>
        <el-col :span="4" class="line"><span style="padding-left: 60px; font-weight: bold;">WriteOffTime</span></el-col>
        <el-col :span="10">
          <el-date-picker v-model="form.writeOffTime" type="datetime" placeholder="Select Time" style="width: 100%;"/>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Submit</el-button>
        <el-button>Cancle</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import SICToSvgName from '../util/SICToSvgName'
export default {
  data() {
    return {
      form: {
        id: 1,
        name: '',
        typeCode: '',
        position: '',
        line: '',
        towerOne: '',
        towerTwo: '',
        compant: '',
        contactOne: '',
        phoneOne: '',
        contactTwo: '',
        phoneTwo: '',
        deviceOwner: '',
        findTime: '',
        writeOffTime: '',
        description: '',
        remark: ''
      },
      labelPosition: 'right',
      dialogVisible: false
    }
  },
  computed: {
    markerType() {
      const codeList = SICToSvgName.getCodeList()
      return codeList
    },
    gridWrapper() {
      const count = this.markerType.length
      return {
        display: 'grid',
        gridTemplateColumns: '12.5% '.repeat(8),
        gridTemplateRows: '110px '.repeat(count / 8 + 1)
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    },
    cancelSelect() {
    },
    confirmSelect() {
      this.dialogVisible = false
    },
    openDialog() {
      this.dialogVisible = true
    },
    closeDialog() {
    }
  }
}
</script>
<style scoped>
.container {
  width: 100%;
  padding: 4px;
}
.dialog-container {
  width: 100%;
  height: 100%;
}
.el-button--custom {
  width: 95%;
  height: 95%;
  margin-left: -0%;
}
.icon-class--custom {
  width: 75%;
  height: 75%;
}
</style>
