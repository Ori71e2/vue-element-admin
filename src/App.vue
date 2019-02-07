<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default{
  name: 'App'
}
</script>
<style>
.form-group {
  display: grid !important;
  grid-template-columns: 30% 70%;
  grid-template-rows: 30px;
}
</style>
