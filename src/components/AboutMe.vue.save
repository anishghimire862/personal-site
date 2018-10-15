<template>
  <div>
    <v-layout row>
    <v-flex xs12 sm6 offset-sm3 mt-2>
      <v-card>
        <v-toolbar dark>
          <v-toolbar-title>More About Me</v-toolbar-title>

          <v-spacer></v-spacer>

        </v-toolbar>

        <v-list>
          <v-list-group
            v-for="item in items"
            v-model="item.active"
            :key="item.title"
            :prepend-icon="item.action"
            no-action
          >
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile
              v-for="subItem in item.items"
              :key="subItem.title"
              @click=""
            >
              <v-list-tile-content>
                <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-icon>{{ subItem.action }}</v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
  </div>
</template>
<script>
export default {
  data () {
  return {
    items: [
      {
         action: 'person',
         title: 'Name',
         active: true,
         items: [
           { title: 'Anish Ghimire' }
         ]
      },
      {
        action: 'email',
        title: 'Email',
        items: [
          { title: 'anishghimire862 at gmail dot com' }
        ]
      },
      {
        action: 'phone',
        title: 'Phone',
        items: [
          { title: '+9779844680862' }
        ]
      },
      {
        action: 'web',
        title: 'Website',
        items: [
          { title: 'www.anishghimire.com.np' }
        ]
       },
       {
         action: 'work',
         title: 'Project',
         items: [
           { title: 'www.saangai.com' }
         ]
       },
       {
         action: 'add',
         title: 'Permanent Address',
         items: [
           { title: 'Urlabari-4, Morang, Nepal' }
         ]
       },
       {
         action: 'add',
         title: 'Address',
         items: [
           { title: 'Koteswor, Kathmandu' }
         ]
       }

        ]
      }
    }
  }
</script>
