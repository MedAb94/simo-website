<template>
  <div>
    <v-navigation-drawer absolute temporary v-model="drawer">
      <v-list-item link>
        <v-img src="../assets/logo.png"></v-img>
      </v-list-item>
      <v-divider></v-divider>
      <v-list>
        <v-list-item>
          <v-list-item-title>
            <a href="#about" v-smooth-scroll>
              <v-btn text class="link-item text-subtitle-1 mx-3">{{ $t('nav.about') }}</v-btn>
            </a>
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>
            <a href="#services" v-smooth-scroll>
              <v-btn text class="link-item text-subtitle-1 mx-3">{{ $t('nav.services') }}</v-btn>
            </a>
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>
            <a href="#projects" v-smooth-scroll>
              <v-btn text class="link-item text-subtitle-1 mx-3">{{ $t('nav.projects') }}</v-btn>
            </a>
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>
            <a href="#contact" v-smooth-scroll>
              <v-btn text class="link-item text-subtitle-1 mx-3">{{ $t('nav.contact') }}</v-btn>
            </a>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
        class="black"
        elevate-on-scroll
        scroll-target="#scrolling-techniques-7"
        app
        fixed
    >

      <v-img src="../assets/logo.png" max-width="80"/>
      <v-spacer/>
      <v-layout class="justify-center align-center hidden-sm-and-down">
        <a href="#about" v-smooth-scroll>
          <v-btn text class="link-item text-subtitle-1 mx-3">{{ $t('nav.about') }}</v-btn>
        </a>
        <a href="#services" v-smooth-scroll>
          <v-btn text class="link-item text-subtitle-1 mx-3">{{ $t('nav.services') }}</v-btn>
        </a>
        <a href="#projects" v-smooth-scroll>
          <v-btn text class="link-item text-subtitle-1 mx-3">{{ $t('nav.projects') }}</v-btn>
        </a>
        <a href="#contact" v-smooth-scroll>
          <v-btn text class="link-item text-subtitle-1 mx-3">{{ $t('nav.contact') }}</v-btn>
        </a>
      </v-layout>
      <v-spacer/>
      <v-btn text class="link-item text-subtitle-1 ml-4" @click="$i18n.locale='ar';$vuetify.rtl=true" v-if="$i18n.locale === 'fr'">العربية
      </v-btn>
      <v-btn text class="link-item text-subtitle-1 ml-4" @click="$i18n.locale='fr';$vuetify.rtl=false" v-if="$i18n.locale === 'ar'">FR
      </v-btn>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"/>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({drawer: false})
}
</script>

<style scoped>

</style>
