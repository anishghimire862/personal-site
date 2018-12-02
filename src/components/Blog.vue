<template>
  <div>
    <v-layout>
    <v-flex container xs12 sm6 offset-sm3>
      <v-card class="my-2" v-for="article in articles"
        :key="article.id">
        <v-img
          class="white--text"
          height="200px"
          :src="article.image"
          alt="Anish Ghimire - Blog"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">{{ article.title}}</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
        <v-card-title>
          <div>
            <span class="grey--text">{{ article.date}}</span><br>
            <span>
              {{article.content}} ...
            </span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange">Read More</v-btn>
        </v-card-actions>
      </v-card> 
    </v-flex>
    </v-layout>
  </div>
</template>
<script>
export default {
  data () {
    return {
      articles: [
        {
          title: 'She, an Angel',
          date: '2018-11-22',
          image: require('../assets/anish-ghimire.jpg'),
          content: 'she an angel princess of her dad used her body'
        }
      ]
    }
  }
}
</script>
