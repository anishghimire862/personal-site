<template>
  <div>
    <v-img
      :src="'http://anishghimire.com.np/images/anishGhimire.jpg'"
      aspect-ratio="1.9" alt="Anish Ghimire"
    >
    </v-img>
    <v-container grid-list-xs text-xs-center>
      <v-flex xs12>
        <v-card dark>
          <v-card-title primary-title>
          <div>
            <div class="headline">Anish Ghimire</div>
            <p class="grey--text ml-0">Urlabari, Morang</p>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_up' :
'keyboard_arrow_down' }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-slide-y-transition>
          <v-card-text v-show="show">
            Hello I am Anish Ghimire <br/>
            <b><code>&#65308; Web Developer&#65295;&#65310;</code>
</b>
          </v-card-text>
        </v-slide-y-transition>
        </v-card>
      </v-flex>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    show: false
  })
}
</script>
