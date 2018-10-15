<template>
 <v-container grid-list-md text-xs-center id="app-4">
  <v-layout row wrap>
    <v-flex v-for="i in 2" :key="`6${i}`" xs6>
      <v-card dark color="secondary">
        <v-card-text class="px-0"><About education="Saptakoshi"/></v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
 </v-container>
</template>
<script>
import About from '@/components/About.vue'
export default {
  name: 'about',
  components: {
    About
  }
}
</script>
