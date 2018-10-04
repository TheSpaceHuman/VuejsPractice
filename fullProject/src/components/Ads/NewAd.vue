<template>
  <v-container>
    <v-layout justify-center>
      <v-flex xs12 sm6>
        <form>
          <v-text-field
            v-model="title"
            :error-messages="titleErrors"
            label="Ad title"
            color="orange"
            required
            @input="$v.title.$touch()"
            @blur="$v.title.$touch()"
            class="mb-4"
          ></v-text-field>
          <!--<v-text-field
            class="mb-3"
            v-model="description"
            :error-messages="descriptionErrors"
            multi-line
            label="Description"
            type="text"
            required
            @input="$v.description.$touch()"
            @blur="$v.description.$touch()"
          ></v-text-field>-->
          <v-textarea
            class="mb-3"
            v-model="description"
            auto-grow
            box
            outline
            color="orange"
            label="Description"
            rows="4"
            required
            :error-messages="descriptionErrors"
            @input="$v.description.$touch()"
            @blur="$v.description.$touch()"
          ></v-textarea>
              <v-btn
                block
                :loading="loading"
                :disabled="loading"
                color="yellow"
                class="mb-3"
                @click.native="loader = 'loading'"
              >
                Upload
                <v-icon right dark>cloud_upload</v-icon>
              </v-btn>
          <v-layout justify-center>
            <v-flex>
              <img src="https://cdn.vuetifyjs.com/images/carousel/bird.jpg" alt="" width="100%">
            </v-flex>
          </v-layout>

          <v-checkbox
            v-model="checkbox"
            color="orange"
            :error-messages="checkboxErrors"
            label="Ad to promo?"
            required
            @change="$v.checkbox.$touch()"
            @blur="$v.checkbox.$touch()"
          ></v-checkbox>

          <v-btn @click="submit" color="amber" :disabled="$v.title.$invalid || $v.description.$invalid">Create ad</v-btn>
          <v-btn @click="clear" color="yellow accent-1">clear</v-btn>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],

  validations: {
    title: { required, maxLength: maxLength(15) },
    description: { required },
    checkbox: { required }
  },

  data: () => ({
    title: '',
    description: '',
    checkbox: false,
    loader: null,
    loading: false
  }),

  computed: {
    checkboxErrors () {
      const errors = []
      if (!this.$v.checkbox.$dirty) return errors
      !this.$v.checkbox.required && errors.push('You must agree to continue!')
      return errors
    },
    titleErrors () {
      const errors = []
      if (!this.$v.title.$dirty) return errors
      !this.$v.title.maxLength && errors.push('Title must be at most 15 characters long')
      !this.$v.title.required && errors.push('Title is required.')
      return errors
    },
    descriptionErrors () {
      const errors = []
      if (!this.$v.description.$dirty) return errors
      !this.$v.description.required && errors.push('Description is required')
      return errors
    }
  },

  methods: {
    submit () {
      this.$v.$touch()
    },
    clear () {
      this.$v.$reset()
      this.title = ''
      this.description = ''
      this.checkbox = false
    },
    createAd () {
      //
    }
  },
  watch: {
    loader () {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 1000)

      this.loader = null
    }
  }
}
</script>

<style scoped>
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
