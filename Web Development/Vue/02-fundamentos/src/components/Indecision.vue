<template>
  <img v-if="image" :src="image" alt="bg" />
  <div class="bg-dark"></div>
  <div class="indecision-container">
    <input v-model="question" type="text" placeholder="Ask me a question" />
    <p>Remember to end your question with ?</p>
    <div v-if="isValidQuestion">
      <h2>{{ question }}</h2>
      <h1>{{ answer }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Indecision",
  data() {
    return {
      question: null,
      answer: null,
      image: null,
      isValidQuestion: false,
    };
  },
  watch: {
    question(value /*, oldValue */) {
      if (value[value.length - 1] === "?") {
        this.getAnswer();
        this.isValidQuestion = true;
      }
      else {
        this.isValidQuestion = false;
      }
    },
  },
  methods: {
    async getAnswer() {
      this.answer = "Hmmm...";
      const req = await fetch("https://yesno.wtf/api");
      const { answer, image } = await req.json();
      this.answer = answer;
      this.image = image;
    },
  },
};
</script>

<style scoped>
img,
.bg-dark {
  height: 100vh;
  left: 0px;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  top: 0px;
  width: 100vw;
}

.bg-dark {
  background-color: rgba(0, 0, 0, 0.4);
}

.indecision-container {
  position: relative;
  z-index: 99;
}

input {
  width: 250px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
}
input:focus {
  outline: none;
}

p {
  color: white;
  font-size: 20px;
  margin-top: 0px;
}

h1,
h2 {
  color: white;
}

h2 {
  margin-top: 150px;
}
</style><style>
</style>