import * as fb from 'firebase'

class Ad {
  constructor (title, description, ownerId , imgSrc = '', promo = false, id = null) {
    this.title = title
    this.description = description
    this.ownerId = ownerId
    this.imgSrc = imgSrc
    this.promo = promo
    this.id = id
  }
}

export default {
  state: {
    ads: [
      {
        title: 'Goods 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, quasi.',
        promo: true,
        imgSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        id: '1'
      },
      {
        title: 'Goods 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, quasi.',
        promo: true,
        imgSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        id: '2'
      },
      {
        title: 'Goods 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, quasi.',
        promo: true,
        imgSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        id: '3'
      },
      {
        title: 'Goods 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, quasi.',
        promo: false,
        imgSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        id: '4'
      }
    ]
  },
  mutations: {
    createAd (state, payload) {
      state.ads.push(payload)
    }
  },
  actions: {
    async createAd ({commit, getters}, payload) {
      commit('clearError')
      commit('setLoading', true)

      try {
        const newAd = new Ad (payload.title, payload.description, getters.user.id, payload.imgSrc, payload.promo)
        const fbValue = await fb.database().ref('ads').push(newAd)
        console.log(fbValue)
      } catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
        throw error
      }
    }
  },
  getters: {
    ads (state) {
      return state.ads
    },
    promoAds (state) {
      return state.ads.filter(ad => {
        return ad.promo
      })
    },
    myAds (state) {
      return state.ads
    },
    adById (state) {
      return adId => {
        return state.ads.find(ad => ad.id === adId)
      }
    }
  }
}
