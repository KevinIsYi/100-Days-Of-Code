<template>
  <Indecision />
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <Counter name="Padre" :start="10" />
  <Counter name="Hijo" :start="15" /> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <hello-world msg="Welcome to Your Vue.js App" /> -->
</template>

<script>
// import Counter from "./components/Counter.vue";
import Indecision from "./components/Indecision.vue";
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  components: {
    // Counter,
    Indecision,
  },
  name: "App",
};
</script>

<style>
body,
html {
  background-color: black;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
