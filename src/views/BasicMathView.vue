<template>
  <body style="background-color: gray">
    <div class="main">
      <br /><br />

      <v-card>
        <v-row align="center" justify="center" dense>
          <h1>Calculator</h1>
          <br /><br />

          <v-container fluid>
            <v-text-field
              label="First Input"
              v-model.number="fNumber"
            ></v-text-field>
            <v-text-field
              label="Second Input"
              v-model.number="sNumber"
            ></v-text-field>

            <div class="button1">
              <v-btn @click="doSum">Sum</v-btn>
            </div>
            <div class="button2">
              <br />
              <v-btn @click="doDifference">Difference</v-btn>
            </div>
            <div class="button3">
              <v-btn @click="doProduct">Product</v-btn>
            </div>
            <div class="button4">
              <br />
              <v-btn @click="doQuotient">Quotient</v-btn>
            </div>
            <div class="button5">
              <v-btn @click="doAverage">Average</v-btn>
            </div>

            <div class="button6">
              <v-btn @click="doClear">Clear</v-btn>
            </div>

            <br />
            <h2>Result: {{ result }}</h2>
          </v-container>
        </v-row>
      </v-card>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    
  </body>
</template>

<script setup>
import { ref } from "vue";

const fNumber = ref("");
const sNumber = ref("");

const result = ref(0);

function doSum() {
  result.value = fNumber.value + sNumber.value;
  return result.value;
}
function doDifference() {
  result.value = fNumber.value - sNumber.value;
  return result.value;
}
function doProduct() {
  result.value = fNumber.value * sNumber.value;
  return result.value;
}
function doQuotient() {
  result.value = fNumber.value / sNumber.value;
  return result.value;
}
function doAverage() {
  result.value = fNumber.value + sNumber.value / 2;
  return result.value;
}
function doClear() {
  return (fNumber.value = ""), (sNumber.value = ""), (result.value = "");
}
</script>


<style scoped>
.main {
  margin-left: 60px;
  padding-right: 60px;
}

body {
  background-image: linear-gradient(#aba19f, yellow);
}

h1 {
  text-align: center;
  background-color: powderblue;
}

h2 {
  text-align: center;
  background-color: yellow;
}
.button1 {
  margin-top: -5px;
  margin-left: -300px;
  text-align: center;
}
.button2 {
  margin-top: -5px;
  margin-left: -250px;
  text-align: center;
}
.button3 {
  margin-top: -90px;
  margin-left: 100px;
  text-align: center;
}
.button4 {
  margin-top: -60px;
  margin-left: 550px;
  text-align: center;
}
.button5 {
  margin-top: 18px;
  margin-left: 100px;
  text-align: center;
}
.button6 {
  margin-top: -35px;
  margin-left: 520px;
  text-align: center;
}
</style>