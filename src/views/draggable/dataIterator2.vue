<template>
  <div class="app-container">
    <div class="draggable-container">
      <el-card class="card-header">
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
        <draggable v-model="fatherList" :options="fatherDragOptions" :move="onMove" element="el-col" @start="fatherStart" @end="fatherEnd">
          <el-col v-for="childElement in fatherList" :key="childElement.order" :span="12">
            <div>
              <draggable v-model="childElement.list" :options="childDragOptions" :move="onMove" :style="gridWrapper2(childElement.list)" element="div" @start="childStart" @end="childEnd">
                <transition v-for="element in childElement.list" :key="element.order" name="fade" >
                  <div class="list-group-item text-position">
                    <el-card class="box-card">
                      <i>
                        <svg-icon v-show="element.fixed" icon-class="anchor" @click.native="element.fixed=! element.fixed" />
                        <svg-icon v-show="!element.fixed" icon-class="pushpin" @click.native="element.fixed=! element.fixed" />
                      </i>
                      {{ element.name }}
                      <span class="badge">{{ element.order }}</span>
                    </el-card>
                  </div>
                </transition>
              </draggable>
            </div>
          </el-col>
        </draggable>
      </el-row>
    </div>
    <div>
      <pre>{{ isDragging }}</pre>
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
      fatherList: [
        {
          list: message.map((name, index) => {
            return { name, order: index + 1, fixed: false }
          }),
          order: 1
        },
        {
          list: [],
          order: 2
        }
      ],
      groupList1: [],
      groupList2: [],
      editable: true,
      childEditable: true,
      fatherEditable: true,
      isDragging: false,
      delayedDragging: false
    }
  },
  computed: {
    childDragOptions() {
      return {
        animation: 0,
        group: 'description',
        // disabled: true,
        disabled: !this.childEditable,
        ghostClass: 'ghost'
      }
    },
    fatherDragOptions() {
      return {
        animation: 0,
        group: 'description',
        disabled: !this.fatherEditable,
        ghostClass: 'ghost'
      }
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
      this.list1 = this.list1.sort((one, two) => {
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
    fatherStart() {
      this.childEditable = !this.childEditable
    },
    fatherEnd() {
      this.childEditable = !this.childEditable
    },
    childStart() {
      this.fatherEditable = !this.fatherEditable
    },
    childEnd() {
      this.fatherEditable = !this.fatherEditable
    },
    gridWrapper2(list) {
      const count = this.count(list)
      return {
        display: 'grid',
        gridTemplateColumns: '33% 33% 33%',
        gridTemplateRows: '100px '.repeat(Math.ceil(count / 3) ? Math.ceil(count / 3) : 1) // 该处元素不能为空，否则无法拖拽进入新元素
      }
    },
    count(o) {
      const t = typeof o
      if (t === 'string') {
        return o.length
      } else if (t === 'object') {
        let n = 0
        let i = null // eslint-disable-line no-unused-vars
        for (i of o) {
          n++
        }
        return n
      }
      return false
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
  background-color: #FFFFFd;
  border-radius: 4px;
  box-shadow: 0px 0px 2px #dddddd;
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
.grid-wrapper {
  display: grid;
  /*
  grid-template-columns: 200px 200px 200px;
  grid-template-rows: 100px 100px 100px;
  */
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: 100px 100px 100px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active 在低于版本 2.1.8 中 */ {
  opacity: 0;
}
.box-card {
  width: 90%;
  height: 90%;
  margin: 5%;
}
</style>
