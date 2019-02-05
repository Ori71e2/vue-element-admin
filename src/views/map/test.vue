<template>
  <div class="panel-body">
    <form>
      <vue-form-generator :schema="schema" :model="model" :options="formOptions"/>
    </form>
  </div>
</template>
<script>
import Vue from 'vue'
import VueFormGenerator from 'vue-form-generator'
import 'vue-form-generator/dist/vfg.css'

Vue.use(VueFormGenerator)

/* optional custom validators treated as 'built-in'
Vue.use(VueFormGenerator, {
  validators: objectWithCustomValidatorFunctions
});
*/

export default {
  data() {
    return {

      model: {
        id: 1,
        name: 'John Doe',
        position: '',
        skills: ['Javascript', 'VueJS'],
        type: 'SIC',
        company: '',
        contactOne: '',
        phoneOne: '',
        contactTwo: '',
        phoneTwo: '',
        description: '',
        buttons: '',
        status: true
      },

      schema: {
        groups: [
          {
            legend: 'Marker Info',
            fields: [
              {
                type: 'input',
                inputType: 'text',
                label: 'ID (disabled text field)',
                model: 'id',
                // readonly: true,
                disabled: true
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Name',
                model: 'name',
                // id: 'user_name',
                placeholder: 'Marker name',
                // featured: true,
                required: true,
                readonly: true
              },
              {
                type: 'slect',
                inputType: 'text',
                label: 'Type',
                model: 'type',
                values: ['Javascript', 'VueJS', 'CSS3', 'HTML5']
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Position',
                model: 'position',
                required: true
              }
            ]
          },
          {
            legend: 'Details',
            fields: [
              {
                type: 'input',
                inputType: 'text',
                label: 'Company',
                model: 'company',
                placeholder: 'Company'
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Contact One',
                model: 'contactOne',
                placeholder: 'Contact One'
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Phone One',
                model: 'phoneOne',
                placeholder: 'Phone One'
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Contact Two',
                model: 'contactTwo',
                placeholder: 'Contact Two'
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Phone One',
                model: 'phoneOne',
                placeholder: 'Phone One'
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Device Owner',
                model: 'deviceOwner',
                placeholder: 'Device Owner'
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Description',
                model: 'description',
                placeholder: 'Dscription'
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Remark',
                model: 'remark',
                placeholder: 'Remark'
              },
              {
                type: 'checkbox',
                label: 'Status',
                model: 'status',
                default: true
              }
            ]
          },
          {
            legend: 'Buttons',
            fields: [
              {
                type: 'input',
                // inputType: 'text',
                // label: 'Button',
                model: 'button',
                buttons: [
                  {
                    classes: 'btn-location',
                    label: 'Current location',
                    onclick: function(model) {
                      console.log('click')
                    }
                  },
                  {
                    classes: 'btn-clear',
                    label: 'Clear',
                    type: 'reset',
                    onclick: function(model, field) {
                      console.log(field)
                    }
                  }
                ]
              }
            ]
          }
        ]
      },

      formOptions: {
        validateAfterLoad: false,
        validateAfterChanged: true,
        validateAsync: true
      }
    }
  }
}
</script>

<style scoped>
.panel-body {
  width: 600px;
}
</style>
