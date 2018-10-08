<template>
  <v-container >
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <h1 class="text--accent-2 mb-3 text-xs-center">My Ads</h1>

          <v-card
            v-for="ad in myAds"
            :key="ad.id"
            class="elevation-12 mb-4">
            <v-layout row>
              <v-flex xs4>
                <v-img
                  width="100%"
                  height="100%"
                  :alt="ad.title"
                  :src="ad.imageSrc">
                </v-img>
              </v-flex>
              <v-flex xs8>
                <v-card-text>
                  <h2 class="orange--text">{{ ad.title }}</h2>
                  <p class="text--darken-4">{{ ad.description }}</p>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn class="amber" :to="'add/' + ad.id">Open</v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    myAds () {
      return this.$store.getters.myAds
    }
  }
}
</script>

<style scoped>

</style>
