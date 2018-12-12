<template>
  <div>
    <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <v-card
          v-for="project in projects"
          :key="project.id"
          class="mt-3"
        >
          <v-img
            class="white--text"
            height="200px"
            :src="project.image"
            contain
            alt="Anish Ghimire - Project"
          >
          </v-img>
          <v-card-title>
            <div>
              <h4 class="">{{project.name}}</h4>
              <span>{{project.description}}</span><br>
            </div>
          </v-card-title>
          <p class="ml-3"><b>Technologies Used</b>:
            <i> {{ project.technologies }} </i>
          </p>
          <p class="ml-3">
            <b>Status</b>:
            <i> {{ project.status }} </i>
          </p>
          <v-card-actions style="margin-top: -20px;">
            <v-btn flat color="orange"
              :href="'//' + project.link" target="_blank"
            >
              Explore
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  data () {
    return {
      projects: [
        {
          name: 'Saangai - frontend developer',
          link: 'www.saangai.com',
          image: require('../assets/saangai.png'),
          description: 'Saangai is a concept, concept of bringing ' +
            'families and friends together, approach of knowing ' +
            'likeminded people in ' +
            'an easier way, playing travelling and investing together.',
          technologies: 'Vuejs, Vuetify, Java',
          status: 'Underconstruction'
        },
        {
          name: 'College Magazine',
          link: 'college-magazine.000webhostapp.com',
          image: require('../assets/college-magazine.png'),
          description: 'As the world is getting advanced with new ' +
            'innovations and technological inventions, we are still ' +
            'wasting so much' +
            'of investment and effort on paper . This project is a ' +
            'small initiation to make the world more digitized.',
          technologies: 'PHP, Bootstrap,Javascript,Ajax',
          status: 'Completed'
        },
        {
          name: 'Blog',
          link: 'www.bikramghimire.com.np',
          image: require('../assets/blog.png'),
          description: 'Personal blog to share articles instantly.',
          technologies: 'PHP, MaterializeCSS',
          status: 'Completed'
        },
        {
          name: 'Samatwa Nepal',
          link: 'samatva.000webhostapp.com',
          image: require('../assets/samatwa.png'),
          description: 'SAMATVA is a nonprofit organization with ' +
            'dedicated team members who are committed to build an ' +
            'environment where ' +
            'every child feels safe and is equal regardless of their ' +
            'social class, ' +
            'ethnicity and background, where they enhance their ' +
            'foundation skills as ' +
            'well as learn some important moral values and norms. ',
          technologies: 'Wordpress',
          status: 'Completed'
        },
        {
          name: 'Krrish',
          link: 'www.krrish.com.np',
          image: require('../assets/krrish.png'),
          description: 'Personal Website of a Friend.',
          technologies: 'CSS,HTML',
          status: 'Completed'
        }
      ]
    }
  }
}
</script>
