<template>
  <body>
    <div class="main">
      <div class="me">
        <br />
        <v-card-title><h1>About Me</h1></v-card-title>
      </div>
      <br />

      <div class="about-section">
        <v-row align="center" justify="center" dense>
          <v-card width="200" height="200">
            <img alt="Profile" src="/Jeremie.png" width="200" height="200" />
          </v-card>
        </v-row>

        <v-card-title
          ><h1><u>Jeremie E. Gapasin</u></h1></v-card-title
        >
        <v-card-tex>
          My name is Jeremie E. Gapasin, 4th Year Student, Taking Bachelor of
          Science in Information Technology in Technological Institut of the
          Philippines - Manila Campus.
        </v-card-tex>
      </div>
      <br />

      <v-card-title
        ><h2>
          <v-row align="center" justify="center" dense>
            Educational Background
          </v-row>
        </h2></v-card-title
      >

      <br /><br /><br />

      <div class="row">
        <div class="vcard1">
          <v-row align="center" justify="center" dense>
            <v-card class="justify-center" max-width="544">
              <div class="card">
                <img
                  src="/logo.png"
                  alt="TIP"
                  style="width: 60%"
                  class="center"
                />
                <div class="container">
                  <h2>College School</h2>
                  <v-card-subtitle>
                    Technological Institute of the Philippines - Manila
                  </v-card-subtitle>

                  <v-card-tex>
                    I am Currently Studying in Technological Institute of the
                    Philippines - Manila as a 4th year student. That taking a
                    program of Bachelor of Science in Information Technology
                    (BSIT)
                  </v-card-tex>

                  <br />
                  <br />
                  <p>mjegapasin@tip.edu.ph</p>
                  <p><button class="button"></button></p>
                </div>
              </div>
            </v-card>
          </v-row>
        </div>

        <div class="vcard2">
          <v-row align="center" justify="center" dense>
            <v-card class="justify-center" max-width="544">
              <div class="card">
                <img
                  src="/NN.png"
                  alt="Mike"
                  style="width: 60%"
                  class="center"
                />
                <div class="container">
                  <h2>High School</h2>
                  <p class="title">Natividad National High School</p>
                  <p>I have studied here for 4 years from freshmen to junior</p>
                  <br /><br />
                  <br />

                  <p>gapasinjeremie7@gmail.com</p>

                  <p><button class="button"></button></p>
                </div>
              </div>
            </v-card>
          </v-row>
        </div>

        <div class="vcard3">
          <v-row align="center" justify="center" dense>
            <v-card class="justify-center" max-width="544">
              <div class="card">
                <img
                  src="/Central.jpg"
                  alt="deped"
                  style="width: 60%"
                  class="center"
                />
                <div class="container">
                  <br />
                  <h2>Elementary School</h2>
                  <p class="title">Natividad Central School</p>
                  <p>
                    Natividad Central School is where I have study for 7 years.
                  </p>
                  <br /><br />
                  <br /><br /><br />

                  <p><button class="button"></button></p>
                </div>
              </div>
            </v-card>
          </v-row>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
</script>

<style scoped>
.vcard1 {
  margin-top: -50px;
  margin-left: -1200px;
}
.vcard2 {
  margin-top: -535px;
  margin-left: 5px;
}
.vcard3 {
  margin-top: -540px;
  margin-left: 1200px;
}

.main {
  margin-left: 60px;
  padding-right: 60px;
}

.me {
  text-align: center;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  background-image: linear-gradient(#aba19f, yellow);
}

html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

.column {
  float: left;
  width: 33.3%;
  margin-bottom: 16px;
  padding: 0 8px;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 8px;
}

.about-section {
  padding: 50px;
  text-align: center;
  background-color: #474e5d;
  color: white;
}

.container {
  padding: 0 16px;
}

.container::after,
.row::after {
  content: "";
  width: auto;
  clear: both;
  display: table;
}

.title {
  color: grey;
}

.button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
}

.button:hover {
  background-color: #555;
}

@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>