<template>
  <div>
    <v-container>
      <v-alert
        :value="alert"
        type="error"
       >
      Please fill all the required fields.
      </v-alert>
      <v-form @submit.prevent="submit">
      <v-text-field
        v-model="email"
        label="E-mail"
        required
      ></v-text-field>
       <v-text-field
        v-model="name"
        type="text"
        label="Name"
        required
      ></v-text-field>
      <v-textarea
        v-model="message"
        name="input-7-1"
        box
        label="Type your message here..."
        auto-grow
       ></v-textarea>
      <v-btn color="success" type="submit">Submit</v-btn>
      </v-form>
    </v-container>
  </div>
</template>
<script>
export default {
  data () {
    return {
      email: null,
      name: null,
      message: null,
      alert: false

    }
  },
  methods: {
    submit () {
      if (!this.email || !this.password || !this.message) {
        this.alert = true
      } else {
        this.alert = false
      }
    }
  }
}
</script>
