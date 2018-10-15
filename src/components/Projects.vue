<template>
  <div>
    <template>
  <v-container
    fluid
    grid-list-lg
    fill-height
    style="min-height: 434px"
  >
    <v-fade-transition mode="out-in">
      <v-layout v-if="show" key="0" wrap>
        <v-flex xs6>
          <v-card>
            <v-img
              src="https://picsum.photos/350/165?random"
              height="125"
              contain
              class="grey darken-4"
            ></v-img>
            <v-card-title class="title">Saangai</v-card-title>
          </v-card>
        </v-flex>

        <v-flex xs6>
          <v-card>
            <v-img
              src="https://picsum.photos/350/165?random"
              height="125"
              contain
              class="grey darken-4"
            ></v-img>
            <v-card-title class="title">Kcmit Mag</v-card-title>
          </v-card>
        </v-flex>

        <v-flex xs6>
          <v-card>
            <v-img
              src="https://picsum.photos/350/165?random"
              height="125"
              contain
              class="grey darken-4"
            ></v-img>
            <v-card-title class="title">Samatwa</v-card-title>
          </v-card>
        </v-flex>

        <v-flex xs6>
          <v-card>
            <v-img
              src="https://picsum.photos/350/165?random"
               height="125"
              contain
              class="grey darken-4"
            ></v-img>
            <v-card-title class="title">Krrish.com</v-card-title>
          </v-card>
        </v-flex>
      </v-layout>

      <v-layout v-else key="1" justify-center>
        <v-btn flat @click="show = true">View My Projects</v-btn>
      </v-layout>
    </v-fade-transition>
  </v-container>
</template>
  </div>
</template>
<script>
export default {
  data: () => ({
    show: false
  })
}
</script>
