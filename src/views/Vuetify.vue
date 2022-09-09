<template>
  <body>
    <v-card color="transparent">  <img id="logo-crown" src="@/assets/vue.jpg" alt="logo" /></v-card>
  <v-card

    class="mx-auto"
  >
       <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card
            color="#385F73"
            dark
          >
            <v-card-title class="text-h5">
              Vuetify
            </v-card-title>

            <v-card-subtitle>
             <p> Vuetify is a Vue UI Library with beautifully handcrafted Material Components. No design skills required — everything you need to create amazing applications is at your fingertips.
              Vuetify is a component framework for Vue.js 2. It aims to provide clean, semantic and reusable components that make building your application a breeze. Vuetify utilizes Google's Material Design design pattern, taking cues from other popular frameworks such as Materialize.css, Material Design Lite, Semantic UI and Bootstrap 4.
              Vuetify is a tool in the Front-End Frameworks category of a tech stack.
            </p>
            </v-card-subtitle>

            <v-card-actions>
              <v-btn text>
               <a href="https://vuetifyjs.com/en/"> Reference </a>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="12"
        >
          <v-card
            :color="item.color"
            dark
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <v-card-title class="text-h5">
                What is Vuetify?
              </v-card-title>
  
              <v-card-subtitle>
               <p> Vuetify complies with the Material Design specification, meaning the core features of both Vue and Material are available by default and can be improved upon by both communities. In addition, Vuetify offers the following features: 
                Compatibility with Vue CLI-3 and RTL Templates for various frameworks, like Cordova, webpack, etc. Internationalization SSR and PWA
              </p>
              </v-card-subtitle>
  
              <v-card-actions>
                <v-btn text>
                 <a href="https://vuetifyjs.com/en/"> Reference </a>
                </v-btn>
              </v-card-actions>

              <v-avatar
                class="ma-3"
                size="125"
                tile
              >
                <v-img :src="item.src"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>

<br><br><br><br>
</body>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          color: '#1F7087',
          src: '/vue.jpg',
          title: 'What is Vuetify?',
          artist: 'asdas',
        },
        {
          color: '#952175',
          src: '/yt.png',
          title: 'Vuetify Turorial',
          artist: 'Click the play icon to go to the video',
        },
      ],
    }),
  }
</script>

<style scoped>
  body {
      background-image: linear-gradient(#aba19f, yellow);
    }

  p {
      text-indent: 50px;
      text-align: justify;
  }

</style>