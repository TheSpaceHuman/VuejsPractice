<template>
  <v-container>
    <v-layout justify-center>
      <v-flex xs12 sm6>
        <v-form  ref="form" validation v-model="valid">
          <v-text-field
            name="title"
            label="Ad title"
            type="text"
            v-model="title"
            required
            :rules="[v => !!v || 'Title is required']"
            color="orange"
            class="mb-4"
          ></v-text-field>
          <v-textarea
            class="mb-3"
            name="description"
            type="text"
            v-model="description"
            auto-grow
            box
            outline
            color="orange"
            label="Description"
            rows="4"
            required
            :rules="[v => !!v || 'Description is required']"
          ></v-textarea>
              <v-btn
                block
                color="yellow"
                class="mb-3"
                @click="triggerUpload"
              >
                Upload
                <v-icon right dark>cloud_upload</v-icon>
              </v-btn>
            <input
              ref="fileInput"
              type="file"
              style="display: none;"
              @change="onFileChange"
              accept="image/*">
          <v-layout justify-center>
            <v-flex>
              <img :src="imageSrc" alt="" width="100%" v-if="imageSrc">
            </v-flex>
          </v-layout>

          <v-switch
            label="Ad to promo?"
            v-model="promo"
            color="orange"
          ></v-switch>

          <v-btn
            @click="createAd"
            color="amber"
            :loading="loading"
            :disabled="!valid || !image || loading">
            Create ad
          </v-btn>

        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  data: () => ({
    title: '',
    description: '',
    promo: false,
    valid: false,
    image: null,
    imageSrc: ''
  }),

  computed: {
    loading () {
      return this.$store.getters.loading
    }
  },

  methods: {
    createAd () {
      if (this.$refs.form.validate() && this.image) {
        const ad = {
          title: this.title,
          description: this.description,
          promo: this.promo,
          image: this.image
        }
        // console.log(ad)
        this.$store.dispatch('createAd', ad)
          .then(() => {
            this.$router.push('/list')
          })
          .catch(() => {})
      }
    },
    triggerUpload () {
      this.$refs.fileInput.click()
    },
    onFileChange (event) {
      const file = event.target.files[0]
      const reader = new FileReader()
      reader.onload = e => {
        this.imageSrc = reader.result
      }
      reader.readAsDataURL(file)
      this.image = file
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
