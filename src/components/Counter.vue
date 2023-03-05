<template>
  <div class="app">
    <h1>Count Mate</h1>
    <h1 class="display-1">{{ counter }}</h1>
    <div class="d-flex justify-content-center align-items-center mb-3">
    <button class="btn btn-primary mr-2" @click="decrement(parseInt(value))">-</button>
    <button class="btn btn-secondary mr-2" @click="reset()">Reset</button>
    <input type="number" v-model="value"  class="form-control mr-2"/>
    <button class="btn btn-primary mr-2" @click="setValue(parseInt(value))">Set Value</button>
    <button  class="btn btn-primary" @click="increment(parseInt(value))">+</button>
  </div>
  <footer class="fixed-bottom bg-dark text-white p-3">
      <p>&copy; 2023 My Counter App</p>
      <p>
  <a href="https://github.com/Ottaht1" class="text-white">github.com/Ottaht1</a></p>
    </footer>
</div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      value: 0,
    };
  },
  computed: {
    ...mapState(["counter"]),
  },
  methods: {
    ...mapMutations(["increment", "decrement", "reset", "setValue"]),
  },
};
</script>

<style>
body {
  background-color: #A2A2A1FF;
}

h1{
  color: #333;
  font-size: 50px;
  margin: 20px;
text-align: center;
}


.display-1 {
  color: red;
  font-size: 50px;
  margin: 50px;

}

button {
  font-size: 30px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}

.form-control  {
  font-size: 30px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: gray;
}
.d-flex {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  gap: 20px;
}
button:hover,
input:hover{
  background-color: #195190FF;
  color: white;
}

footer {
  position: fixed;
   left: 0;
   bottom: 0;
   width: 100%;
  background-color: #333;
  color: #fff;
  padding: 3px;
  text-align: center;
}
a:link, a:visited{
  color: #A2A2A1FF;
  text-decoration: none;
  display: inline-block;
  padding: 10px 20px;
  text-align: center;
}

a:hover, a:active {
  background-color: #195190FF;
}

</style>
