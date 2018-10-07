import * as fb from 'firebase'

class Ad {
  constructor (title, description, ownerId, imgSrc = '', promo = false, id = null) {
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
    },
    loadAds (state, payload) {
      state.ads = payload
    }
  },
  actions: {
    async createAd ({commit, getters}, payload) {
      commit('clearError')
      commit('setLoading', true)

      const image = payload.image
      const imageExt = image.name.slice(image.name.lastIndexOf('.'))

      const fileData = await fb.storage().ref(`ads/${ad.key}.${imageExt}`).put(image)
      const imgSrc = fileData.metadata.downloadURLs[0]

      await fb.database().ref('ads').child(ad.key).update({
        imgSrc
      })
      try {
        const newAd = new Ad(
          payload.title,
          payload.description,
          getters.user.id,
          '',
          payload.promo
        )

        const ad = await fb.database().ref('ads').push(newAd)

        commit('setLoading', false)
        commit('createAd', {
          ...newAd,
          id: ad.key,
          imgSrc
        })
        // console.log(fbValue)
      } catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
        throw error
      }
    },
    async fetchAds ({commit}, playload) {
      commit('clearError')
      commit('setLoading', true)

      const resultAds = []

      try {
        const fbVal = await fb.database().ref('ads').once('value')
        // console.log(fbVal)
        const ads = fbVal.val()
        console.log(ads)

        Object.keys(ads).forEach(key => {
          const ad = ads[key]
          resultAds.push(
            new Ad(ad.title, ad.description, ad.ownerId, ad.imgSrc, ad.promo, key)
          )
        })
        commit('loadAds', resultAds)
        commit('setLoading', false)
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
    promoCounter (state) {
      let promoCounter = 0
      const arrPromo = state.ads
      for (let itemPromo of arrPromo)
        if (itemPromo.promo === true) {
          promoCounter++
        }
      return promoCounter
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
