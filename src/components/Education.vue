<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex v-for="edu in education" :key="edu.id" xs12 sm4>
        <v-card dark>
          <v-card-text class="px-0">
            <v-card-title>
              {{ edu.institute }}
            </v-card-title>
            <p> {{ edu.description }} </p>
            <v-card-footer>
              {{ edu.period  }}
            </v-card-footer>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      education: [
        {
          institute: 'Tribhuvan University',
          description: 'I am currently enrolled at KCMIT.',
          period: '2016-Now'
        },
        {
          institute: 'Siddhartha College',
          description: 'Completed my High School.',
          period: '2012-2015'
        },
        {
          institute: 'Saptakoshi School',
          description: 'Completed School Level Education.',
          period: '2000-2012'
        }
      ]
    }
  }
}
</script>
