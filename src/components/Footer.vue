<template>
  <!--    Footer-->
  <v-footer class="black_ pa-10">
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="12" sm="6" md="3">
          <div class="pa-2 text-center">
            <v-img src="../assets/logo.png" max-width="80" height=""/>
          </div>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <div class="pa-2 text-center">
            <h3>Quick links</h3>
            <v-list class="transparent">
              <v-list-item link>
                <v-list-item-title>About Us</v-list-item-title>
              </v-list-item>
              <v-list-item link>
                <v-list-item-title>Our Services</v-list-item-title>
              </v-list-item>
            </v-list>
          </div>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <div class="pa-2 text-center">
            <v-list class="transparent">
              <v-list-item link>
                <v-list-item-title>Projects</v-list-item-title>
              </v-list-item>
              <v-list-item link>
                <v-list-item-title>Contact</v-list-item-title>
              </v-list-item>
            </v-list>
          </div>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <div class="pa-2 text-center">
            <h3>Contact Info</h3>
            <v-list class="transparent">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-phone</v-icon>
                </v-list-item-icon>
                <v-list-item-title>514-865-8488</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-email</v-icon>
                </v-list-item-icon>
                <v-list-item-title>info@sitewebart.ca</v-list-item-title>
              </v-list-item>
            </v-list>
          </div>
        </v-col>
      </v-row>
      <v-row class="justify-lg-space-between">
        <v-col cols="12"  class="text-center">
          &copy;Simo.digital .all right are reserved
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

</style>
