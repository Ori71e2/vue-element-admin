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
      width="60%"
      append-to-body
      @close="closeDialog">
      <span slot="title"><i class="el-icon-info"/> Icon</span>
      <div :style="gridWrapper">
        <el-button v-for="(type, index) in schema.values" :key="index" class="el-button--custom" @click="value = type">
          <svg-icon icon-class="bug" class="icon-class--custom"/>
          <p>挖机施工{{ type }}</p>
        </el-button>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancelSelect">Cancel</el-button>
        <el-button type="primary" @click="confirmSelect">Confirm</el-button>
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
  computed: {
    gridWrapper() {
      console.log(this.schema.values)
      const count = this.schema.values.length
      return {
        display: 'grid',
        gridTemplateColumns: '12.5% '.repeat(8),
        gridTemplateRows: '110px '.repeat(count / 8 + 1)
      }
    }
  },
  methods: {
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
.el-button--custom {
  height: 100px !important;
}
.icon-class--custom {
  width: 65%;
  height: 65%;
}
</style>
