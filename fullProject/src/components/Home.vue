<template>
  <div v-if="!loading">
    <v-container fluid>
      <v-layout row>
        <v-flex xs12>
          <template v-if="promoCounter > 0">
            <v-carousel>
              <v-carousel-item
                v-for="item in promoAds"
                :key="item.id"
                :src="item.imgSrc"
                :title="item.title"
                :description="item.description"
              >
                <div class="carousel-link">
                  <v-btn
                    flat
                    class="amber darken-2"
                    :to="'/add/' + item.id"
                  >{{ item.title }}</v-btn>
                </div>
              </v-carousel-item>
            </v-carousel>
          </template>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex
          v-for="item of ads"
          :key="item.id"
          xs12 sm6 md4 lg3
        >
          <v-card>
              <v-img
                class="white--text"
                height="200px"
                :src="item.imgSrc"
              >
                <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <span class="headline">{{ item.title }}</span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-img>
              <v-card-title>
                <div>
                  <!--<span class="grey&#45;&#45;text">ID: {{ item.id }}</span><br>-->
                  <span>{{ item.description }}</span>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat color="amber" :to="'/add/' + item.id">Info</v-btn>
                <v-btn flat color="amber darken-4">Buy</v-btn>
              </v-card-actions>
            </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
  <div v-else>
    <v-container>
      <v-layout row>
        <v-flex xs12 class="text-xs-center mt-5">
          <v-progress-circular
            :size="130"
            :width="8"
            color="amber"
            indeterminate
          ></v-progress-circular>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    promoAds () {
      return this.$store.getters.promoAds
    },
    promoCounter () {
      return this.$store.getters.promoCounter
    },
    ads () {
      return this.$store.getters.ads
    },
    loading () {
      return this.$store.getters.loading
    }
  }
}
</script>

<style scoped>
.carousel-link {
  position: absolute;
  bottom: 50px;
  left: 50%;
  background-color: rgba(0,0,0, .3);
  transform: translate(-50%, 0);
  padding: 10px 20px;
  border-radius: 4px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
</style>
