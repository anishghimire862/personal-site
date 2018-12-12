<template>
  <div>
    <v-layout>
    <v-flex container xs12 sm6 offset-sm3>
      <v-card
        class="my-2"
        v-for="article in articles"
        :key="article.id"
      >
        <h4
          class="headline pa-3"
        >
          {{ article.title}}
        </h4>
        <v-card-title>
          <div style="margin-top: -20px;">
            <span
              class="grey--text"
            >
              {{ article.date}}
            </span>
            <br>
            <span
              v-show="showDemo"
            >
              {{ article.demo }} ...
            </span>
            <span
              v-show="showArticle"
              class="article text-xs-right"
              v-html="article.content"
            >
            </span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn
            style="margin-top: -20px;"
            v-if="showDemo"
            flat
            color="orange"
            @click="displayArticle"
          >
            Read More
          </v-btn>

          <v-btn
            style="margin-top: -20px;"
            v-else
            flat
            color="orange"
            @click="displayArticle"
          >
            Close
          </v-btn>
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
      showDemo: true,
      showArticle: false,
      articles: [
        {
          title: 'She, an Angel',
          date: '2018-11-22',
          image: require('../assets/anish-ghimire.jpg'),
          demo: 'She, an angel. Princess',
          content: 'untold stories<br/>' +
            'hidden scars,<br/>' +
            'pain behind her smile.<br/>' +
            'tried to kill herself,<br/>' +
            'still alive,<br/>' +
            'maybe god has something more to give.<br/>' +
            'she, an angel.<br/>' +
            'princess of her dad.<br/>' +
            'unfortunately,<br/>' +
            'he thought her a bitch.<br/>' +
            'used her body,<br/>' +
            'ditched her<br/>' +
            'and she is now a slut.<br/>' +
            'twinkling stars,<br/>' +
            'she stares at,<br/>' +
            'tears fall from her eyes.<br/>' +
            'nobody to hold her hand,<br/>' +
            'he is at the bar.<br/>' +
            'perplexed you,<br/>' +
            'still in remorse.<br/>' +
            'how can i make you understand,<br/>' +
            'unrequited love kills?<br/>' +
            'smile suits you,<br/>' +
            'better than those tears.<br/>' +
            'now, hide your pain.<br/>' +
            'conceal your scars.<br/>' +
            'show him your real worth.<br/>' +
            'dont feel so cold,<br/>' +
            'be bold.<br/>' +
            'its time to move on<br/>' +
            'alot more is yet to come.<br/>'
        }
      ]
    }
  },
  methods: {
    displayArticle: function () {
      this.showDemo = !this.showDemo
      this.showArticle = !this.showArticle
    }
  }
}
</script>
