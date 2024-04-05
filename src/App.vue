<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      height="100"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="./assets/true_logo.png"
          width="150"
        />
      </div>
    </v-app-bar>

    <v-main>
      <DeskingContainer/>
    </v-main>
  </v-app>
</template>

<script>

import DeskingContainer from './components/Desking/Container.vue';

export default {
  name: 'App',

  components: {
    DeskingContainer,
  },

  data: () => ({
    //
  }),
};
</script>
