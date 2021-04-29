<template>
  <v-app>
    <navbar/>
    <v-main>
      <router-view/>
    </v-main>
    <app-footer/>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default {
  name: 'App',
  data: () => ({
    drawer: false
  }),
  components:{
    Navbar,
    appFooter : Footer
  }
};
</script>

<style lang="scss">
$primary: #00baa0;
* {
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

.v-toolbar__content {
  .link-item {
    color: #fff !important;
    font-weight: bold;
    transition: all 0.5s ease-in-out;
  }

  .link-item:hover,
  .link-item:active {
    border-bottom: 2px solid $primary;
    color: $primary !important;
    background: none;
  }
}

/* custom scroll bar */
::-webkit-scrollbar {
  width: 8px;
  border-radius: 10px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: $primary;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: $primary;
}
</style>
