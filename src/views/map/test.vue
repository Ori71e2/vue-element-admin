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
                readonly: true,
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
                required: true
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Type',
                model: 'type',
                placeholder: 'Marker\'s Type'
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
                type: 'select',
                label: 'Skills',
                model: 'skills',
                values: ['Javascript', 'VueJS', 'CSS3', 'HTML5']
              },
              {
                type: 'checkbox',
                label: 'Status',
                model: 'status',
                default: true
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
