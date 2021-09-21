<template>
  <h2>{{ customTitle }}</h2>
  <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>

  <div>
    <button @click="changeValue(1)">+1</button>
    <button @click="changeValue(-1)">-1</button>
  </div>
</template>

<script>
export default {
  // props: ['name', 'start'],
  props: {
    name: String,
    start: {
      type: Number,
      // required: true,
      default: 100,
      validator(value) {
        if (value <= 0) {
          return false;
        }
        return true;
      }
    },
  },
  name: "Counter",
  data() {
    return {
      counter: this.start,
    };
  },
  methods: {
    getSquare() {
      return this.counter * this.counter;
    },
    changeValue(value) {
      this.counter += value;
    },
  },
  computed: {
    squareCounter() {
      return this.counter * this.counter;
    },
    customTitle() {
      if (this.name) {
        return this.name;
      }
      return "Counter";
    },
  },
};
</script>

<style scoped>
button {
  background-color: #64bb87;
  border-radius: 5px;
  border: 1px solid white;
  color: white;
  cursor: pointer;
  margin: 0 5px;
  padding: 5px 15px;
  transition: 0.3s ease-in-out;
}

button:hover {
  background-color: #5aa675;
}
</style>