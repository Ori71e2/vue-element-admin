<template>
  <div class="block">
    <el-input
      v-model="value"
      :disabled="disabled"
      :readonly="schema.readonly"
      placeholder="Select SICCODE">
      <i slot="prefix" class="el-input__icon el-icon-menu" @click="openDialog"/>
    </el-input>
    <el-dialog
      :visible.sync="dialogVisible"
      width="30%"
      append-to-body>
      <span slot="title"><i class="el-icon-info"/> Icon</span>
      <div>
        <picture-swiper/>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="CancelSelect">Cancel</el-button>
        <el-button type="primary" @click="ConfirmSelect">Confirm</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { abstractField } from 'vue-form-generator'

export default {
  name: 'FieldSelectIcon',
  mixins: [abstractField],
  data() {
    return {
      dialogVisible: false,
      pickerOptions: {
      }
    }
  },
  methods: {
    ConfirmSelect() {
      this.dialogVisible = false
    }
  }
}
</script>
<style scoped>
.el-button--custom {
  height: 100px !important;
}
.icon-class--custom {
  width: 65%;
  height: 65%;
}
</style>
