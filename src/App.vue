<template> <v-app>
    <v-navigation-drawer temporary absolute dark v-model="sideNav">
      <v-list>
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
     </v-navigation-drawer>
    <v-toolbar dark>
      <v-toolbar-side-icon @click.stop='sideNav = !sideNav'></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer" >Anish</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link">
          <v-icon left dark>
            {{ item.icon  }}
          </v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view> </router-view>
    </main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      sideNav: false,
      menuItems: [
        { icon: 'person_pin', title: 'About Me', link: '/aboutme' },
        { icon: 'book', title: 'Education', link: '/education' },
        { icon: 'work', title: 'Projects', link: '/projects' },
        { icon: 'description', title: 'Blog', link: '/blog' },
        { icon: 'contact_phone', title: 'Contact Me', link: '/contact' }
      ]
    }
  }
}
</script>
<style lang="stylus">
  @import './stylus/main'
</style>
