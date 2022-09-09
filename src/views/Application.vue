<template>

    <body style="background-color: #f3ea7a">
      <div class="main">
        <br /><br />
        <h1>About the Application</h1>
        <br /><br />
       
  
        <div class="vcard1">
          <v-card class="ma-15" max-width="544" color="yellow">
            <v-card-title align="center" justify="center">
              Calculator
            </v-card-title>
            <v-card-tex>
                <p>The calculator in this web application can be used like a literal calculator in the phone or the calculator itself.
                    In this Application I have used an vuetify. It has a V-card, v-card-text, v-card-title, and more.
                </p>

            </v-card-tex>
            
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
            <v-card-title> String Manipulation </v-card-title>
            <v-card-tex>
                <p>The String Manipulation in this web application has different button on each function that the user want.
                    I have used different button in every function for the user to have more clearer result or can know what is the result
                    of the coverted message or counted strings. 
                    Then I have used also an vueity in here.
                </p>

            </v-card-tex>
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
              About Me
            </v-card-title>
            <v-card-tex>
                <p>The about me page in this web application contains the educational background of the author or creator of this web application 
                    which is me Jereme E. Gapasin. It has also vuetify in this web page.
                </p>

            </v-card-tex>
            <br />
          </v-card>
        </div>
  
        <div class="vcard4">
          <v-card class="ma-15" max-width="544" color="#30E66A">
            <v-card-title align="center" justify="center">
              Quiz
            </v-card-title>
            <v-card-tex>
                <p>The Quiz in this page has vuetify design it has a lot of v-card. Then for the function of creating the quiz it self it has 
                    an v-if, v-for, v-html, for creating a functional quiz or an interactive quiz.
                </p>

            </v-card-tex>
            <br />
          </v-card>
        </div>
      </div>
  
      <br /><br />
      <br /><br /><br />
      <br /><br />
    </body>
  </template>
  
  
  
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