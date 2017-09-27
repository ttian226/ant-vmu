<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Basic</p>
    <ul>
      <li><router-link to="/whitespace">white-space</router-link></li>
      <li><router-link to="/wingblank">wing-blank</router-link></li>
      <li><router-link to="/flex">flex</router-link></li>
      <li><router-link to="/list">list</router-link></li>
      <li><router-link to="/grid">grid</router-link></li>
    </ul>
    <p>Form</p>
    <ul>
      <li><router-link to="/button">button</router-link></li>
      <li><router-link to="/input">input</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Ant Vue Mobile UI'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hello {
  padding-left: 10px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
