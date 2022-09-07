<template>
  <body style="background-color: #f3ea7a">
    <div class="main">
      <br /><br />
      <h1>String Manipulation</h1>
      <br /><br />
      <v-text-field label="Enter a Text here" v-model="message"></v-text-field>

      <div class="vcard1">
        <v-card class="ma-15" max-width="544" color="yellow">
          <v-card-title align="center" justify="center">
            String Manipulator for Counting Vowel
          </v-card-title>
          <v-card-actions>
            <v-btn rounded color="white" @click="buttonV" class="button">
              Count Vowel
            </v-btn>
          </v-card-actions>
          <p>Result: {{ vowels }}</p>
          <br />
        </v-card>
      </div>

      <div class="vcard2">
        <v-card
          class="ma-15"
          max-width="544"
          color="orange"
          align="center"
          justify="center"
        >
          <v-card-title> String Manipulator for Counting Numbers </v-card-title>
          <v-card-actions>
            <v-btn rounded @click="buttonN" color="white" class="button">
              Count number
            </v-btn>
          </v-card-actions>
          <p>Result: {{ number }}</p>
          <br />
        </v-card>
      </div>

      <div class="vcard3">
        <v-card
          class="ma-15"
          max-width="544"
          color="blue"
          align="center"
          justify="center"
        >
          <v-card-title>
            String Manipulator for Counting Consonants
          </v-card-title>
          <v-card-actions>
            <v-btn rounded @click="buttonC" color="white" class="button">
              Count consonants
            </v-btn>
          </v-card-actions>
          <p>Result: {{ consonant }}</p>
          <br />
        </v-card>
      </div>

      <div class="vcard4">
        <v-card class="ma-15" max-width="544" color="#30E66A">
          <v-card-title align="center" justify="center">
            String Manipulator for Converting the Vowel to "*"
          </v-card-title>
          <v-card-actions>
            <v-btn rounded @click="buttonConv" color="white" class="button">
              Convert
            </v-btn>
          </v-card-actions>
          <p>Result: {{ convert }}</p>
          <br />
        </v-card>
      </div>
    </div>

    <br /><br />
    <br /><br /><br />
    <br /><br />
  </body>
</template>

<script setup>
import { ref } from "vue";

const message = ref("");
const vowels = ref(0);
const number = ref(0);
const consonant = ref(0);
const convert = ref(0);

function buttonV() {
  vowels.value = message.value.match(/[aeiou]/gi).length;
  return vowels.value;
}
function buttonN() {
  number.value = message.value.match(/[0-9]/gi).length;
  return number.value;
}
function buttonC() {
  consonant.value = message.value.match(/[bcdfghjklmnpqrstvwxyz]/gi).length;
  return consonant.value;
}
function buttonConv() {
  convert.value = message.value.replace(/[aeiou]/gi, "*");
  return convert.value;
}
</script>


<style scoped>
body {
  background-image: linear-gradient(#aba19f, yellow);
}

.vcard3 {
  margin-top: -460px;
  margin-left: 900px;
}
.vcard4 {
  margin-top: -5px;
  margin-left: 900px;
}

.main {
  margin-left: 60px;
  padding-right: 60px;
}

h1 {
  text-align: center;
  background-color: powderblue;
}

p {
  text-align: center;
  font-size: 30px;
}

.button {
  background-color: black;
}
</style>