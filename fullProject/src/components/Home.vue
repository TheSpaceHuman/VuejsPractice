<template>
  <div>
    <v-container fluid>
      <v-layout row>
        <v-flex xs12>
          <v-carousel>
            <v-carousel-item
              v-for="item in items"
              :key="item.id"
              :src="item.imgSrc"
              :title="item.title"
              :description="item.description"
            >
              <div class="carousel-link">
                <v-btn
                  class="amber darken-2"
                  :to="'/add/' + item.id"
                >{{ item.title }}</v-btn>
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex
          v-for="item of items"
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
                  <span class="grey--text">ID: {{ item.id }}</span><br>
                  <span>{{ item.description }}</span>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat color="amber">Share</v-btn>
                <v-btn flat color="amber darken-4">Buy</v-btn>
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
      items: [
        {
          title: 'Goods 1',
          description: 'Description 1',
          promo: false,
          imgSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          id: '001'
        },
        {
          title: 'Goods 2',
          description: 'Description 2',
          promo: false,
          imgSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          id: '002'
        },
        {
          title: 'Goods 3',
          description: 'Description 3',
          promo: true,
          imgSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          id: '003'
        },
        {
          title: 'Goods 4',
          description: 'Description 3',
          promo: true,
          imgSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          id: '004'
        }
      ]
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
