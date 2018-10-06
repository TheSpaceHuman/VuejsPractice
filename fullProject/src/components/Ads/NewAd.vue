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
            v-model="promo"
            color="orange"
            :error-messages="promoErrors"
            label="Ad to promo?"
            required

            @change="promoChange"
            @blur="$v.promo.$touch()"
          ></v-checkbox>

          <v-btn @click="createAd" color="amber" :disabled="$v.title.$invalid || $v.description.$invalid">Create ad</v-btn>
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
    promo: { required }
  },

  data: () => ({
    title: '',
    description: '',
    promo: false,
    loader: null,
    loading: false
  }),

  computed: {
    promoErrors () {
      const errors = []
      if (!this.$v.promo.$dirty) return errors
      !this.$v.promo.required && errors.push('You must agree to continue!')
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
      this.promo = false
    },
    createAd () {
      const ad = {
        title: this.title,
        description: this.description,
        promo: this.promo,
        imgSrc: 'https://cdn-images-1.medium.com/max/1600/1*WNPicrz6DJegizpj4VY58Q.jpeg'
      }
      // console.log(ad)
      this.$store.dispatch('createAd', ad)
    },
    promoChange () {
      this.promo = true
      this.$v.promo.$touch()
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
