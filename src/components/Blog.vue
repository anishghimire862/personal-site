<template>
  <div>
    <v-layout>
    <v-flex container xs12 sm6 offset-sm3>
      <v-card class="my-2">
        <v-img
          class="white--text"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">Title</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
        <v-card-title>
          <div>
            <span class="grey--text">Date</span><br>
            <span>
              Content
            </span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Read More</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
    </v-layout>
  </div>
</template>
