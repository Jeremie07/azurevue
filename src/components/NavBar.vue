<template>
  <nav>
    <v-toolbar app color="#ABA19F">
      <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <span class="font-weight-light">Vuetify Azure </span>
        <span> Midterm Project</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- dropdown menu -->
      <v-menu open-on-hover>
        <template v-slot:activator="{ props }">
          <v-btn color="primary" v-bind="props"> Menu </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            router
            :to="item.path"
            :prepend-icon="item.icon"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn flat color="grey">
        <span>Home</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer" color="black">
      <br><br> <br><br><br><br><br><br>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        router
        :to="item.path"
        :prepend-icon="item.icon"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-navigation-drawer>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const drawer = ref(false);

const items = ref([
  { title: "About Me",
   icon: "mdi-account", 
   path: "/" },
  {
    title: "Calculator",
    icon: "mdi-calculator-variant-outline ",
    path: "/basicMath",
  },
  { title: "String Manipulation",
   icon: "mdi-ab-testing", 
   path: "/stringApp" },

    { title: "Quiz",
   icon: "mdi-frequently-asked-questions",
    path: "/quiz" },

    { title: "Vuetify",
   icon: "mdi-vuetify",
    path: "/vuetify" },

    { title: "About the project",
   icon: "mdi-information-outline",
    path: "/application" },
]);

function toggleDrawer() {
  return (drawer.value = !drawer.value);
}
</script>