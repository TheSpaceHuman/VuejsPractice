<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-toolbar color="amber accent-3" >
            <v-toolbar-title>Order</v-toolbar-title>
          </v-toolbar>
          <v-divider></v-divider>

          <v-list
            subheader
            three-line
          >

            <v-subheader>Add list</v-subheader>
            <v-list-tile
              v-for="order of orders"
              :key="order.id"
            >
              <v-list-tile-action>
                <v-checkbox
                 :input-value="order.done"
                 @change="markDone(order)"
                 color="orange darken-3"
                ></v-checkbox>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>{{ order.name }}</v-list-tile-title>
                <v-list-tile-sub-title>{{ order.phone }}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-btn
                class="amber"
                :to="'/ad/' + order.addId"
              >
                Open
              </v-btn>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      orders: [
        {
          id: '213',
          name: 'Vlad',
          phone: '8-800-55-35-35',
          addId: '944',
          done: false
        }
      ]
    }
  },
  methods: {
    markDone (order) {
      order.done = true
    }
  }
}
</script>

<style scoped>

</style>
