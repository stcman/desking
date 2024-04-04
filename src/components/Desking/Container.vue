<template>
    <div id="DeskContainer">
      <div class="desk-sections">Test</div>
      <div class="desk-sections">Test</div>
      <div class="desk-sections">Test</div>
      <div class="desk-sections">Test</div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DeskingContainer',
    props: {
      msg: String
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  #DeskContainer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  h3 {
    margin: 40px 0 0;
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
  