
<template>
  <div class="app-container draggable-container">
    <div>
      <div>
        <h3 class="panel-title">Sortable control</h3>
      </div>
      <div>
        <div>
          <el-checkbox v-model="editable">Enable drag and drop</el-checkbox>
        </div>
        <el-button @click="orderList">Sort by original order</el-button>
      </div>
    </div>

    <el-row :gutter="20" type="flex" class="row-bg" justify="space-around">
      <el-col :span="6">
        <div>
          <draggable v-model="list" :options="dragOptions" :move="onMove" class="list-group" element="ul" @start="isDragging=true" @end="isDragging=false">
            <transition-group :name="'flip-list'" type="transition">
              <el-table :data="list">
                <el-table-column
                  prop="name"
                  label="name"
                  width="180"/>
                <el-table-column
                  prop="order"
                  label="order"
                  width="180"/>
                <el-table-column
                  prop="fixed"
                  label="fixed"
                  width="180"/>
              </el-table>
            </transition-group>
          </draggable>
        </div>
      </el-col>

      <el-col :span="6">
        <div>
          <draggable :move="onMove" v-model="list2" :options="dragOptions" element="span">
            <transition-group name="no" class="list-group" tag="ul">
              <li v-for="element in list2" :key="element.order">
                <i :class="element.fixed? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'" aria-hidden="true" @click="element.fixed=! element.fixed" />
                {{ element.name }}
                <span class="badge">{{ element.order }}</span>
              </li>
            </transition-group>
          </draggable>
        </div>
      </el-col>

      <el-col :span="6">
        <div>
          <pre>{{ listString }}</pre>
        </div>
      </el-col>

      <el-col :span="6">
        <div>
          <pre>{{ list2String }}</pre>
        </div>
      </el-col>

    </el-row>
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
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.draggable-container {
  margin: 50px;
}
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
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
</style>
