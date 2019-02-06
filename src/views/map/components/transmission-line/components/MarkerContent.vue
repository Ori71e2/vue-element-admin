<template>
  <div class="panel-body">
    <form>
      <vue-form-generator :schema="schema" :model="model" :options="formOptions"/>
    </form>
  </div>
</template>
<script>

export default {
  components: {},
  data() {
    return {
      dialogVisible: false,
      model: {
        id: 1,
        name: 'John Doe',
        position: '',
        type: 'SIC',
        company: '',
        contactOne: '',
        phoneOne: '',
        contactTwo: '',
        phoneTwo: '',
        description: '',
        findTime: null,
        writeOffTime: null,
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
                type: 'SelectIcon',
                label: 'Type',
                model: 'type',
                values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
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
              },
              {
                type: 'timePicker',
                label: 'FindTime',
                model: 'findTime'
              },
              {
                type: 'timePicker',
                label: 'WriteOffTime',
                model: 'writeOffTime'
              }
            ]
          },
          {
            legend: 'Buttons',
            fields: [
              {
                type: 'input',
                inputType: 'hidden',
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
  width: 100%;
}
</style>
