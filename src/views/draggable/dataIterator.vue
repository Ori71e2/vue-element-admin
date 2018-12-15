<template>
  <div class="app-container">
    <div class="draggable-container">
      <el-card class="box-card card-header">
        <div slot="header" class="clearfix">
          <div>
            <span>Sortable control</span>
          </div>
        </div>
        <div>
          <div style="margin: 10px 0px">
            <el-checkbox v-model="editable">Enable drag and drop</el-checkbox>
          </div>
          <el-button @click="orderList">Sort by original order</el-button>
        </div>
      </el-card>
      <el-row :gutter="20" type="flex" class="row-bg" style="margin-left: 0px; margin-right: 0px;">
        <el-col :span="6">
          <div>
            <draggable v-model="list" :options="dragOptions" :move="onMove" class="list-group" element="ul" @start="isDragging=true" @end="isDragging=false">
              <transition-group :name="'flip-list'" type="transition">
                <li v-for="element in list" :key="element.order" class="list-group-item">
                  <i>
                    <svg-icon v-show="element.fixed" icon-class="anchor" @click.native="element.fixed=! element.fixed" />
                    <svg-icon v-show="!element.fixed" icon-class="pushpin" @click.native="element.fixed=! element.fixed" />
                  </i>
                  {{ element.name }}
                  <span class="badge">{{ element.order }}</span>
                </li>
              </transition-group>
            </draggable>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
const message = [
  'vue.draggable',
  'draggable',
  'component',
  'for',
  'vue.js 2.0',
  'based',
  'on',
  'Sortablejs'
]
export default {
  name: 'Draggable',
  components: {
    draggable
  },
  data() {
    return {
      list: message.map((name, index) => {
        return { name, order: index + 1, fixed: false }
      }),
      list2: [],
      editable: true,
      isDragging: false,
      delayedDragging: false
    }
  },
  computed: {
    dragOptions() {
      return {
        animation: 0,
        group: 'description',
        disabled: !this.editable,
        ghostClass: 'ghost'
      }
    },
    listString() {
      return JSON.stringify(this.list, null, 2)
    },
    list2String() {
      return JSON.stringify(this.list2, null, 2)
    }
  },
  watch: {
    isDragging(newValue) {
      if (newValue) {
        this.delayedDragging = true
        return
      }
      this.$nextTick(() => {
        this.delayedDragging = false
      })
    }
  },
  methods: {
    orderList() {
      this.list = this.list.sort((one, two) => {
        return one.order - two.order
      })
    },
    onMove({ relatedContext, draggedContext }) {
      const relatedElement = relatedContext.element
      const draggedElement = draggedContext.element
      return (
        (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
      )
    },
    iconalert() {
      alert('xx')
    }
  }
}
</script>
<style>
.card-header .el-card__header {
  background-color:#d3dce6;
}
</style>
<style scoped>
.draggable-container {
  width: 100%;
  height: 100%;
  padding: 5px 200px 5px 200px;
}
.row-bg {
  margin: 10px 20px;
  background-color: #dFFFFd;
}
.bg-purple {
  background: #d3dce6;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.list-group {
  min-height: 20px;
}
.list-group-item {
  cursor: move;
}
.list-group-item i {
  cursor: pointer;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.text-position {
  text-align: center;
  align-items:center;
  display: -webkit-flex;
  justify-content:center;
  display: -webkit-flex;
}
</style>
