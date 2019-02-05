<template>
  <div class="block">
    <el-date-picker
      v-model="value"
      :picker-options="pickerOptions"
      :disabled="disabled"
      :readonly="schema.readonly"
      type="datetime"
      placeholder="选择日期时间"
      align="right"/>
  </div>
</template>

<script>
import { abstractField } from 'vue-form-generator'

export default {
  name: 'FieldTimePicker',
  mixins: [abstractField],
  data() {
    return {
      pickerOptions: {
        shortcuts: [
          {
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date())
            }
          },
          {
            text: '昨天',
            onClick(picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24)
              picker.$emit('pick', date)
            }
          },
          {
            text: '一周前',
            onClick(picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', date)
            }
          }
        ]
      }
    }
  }
}
</script>
