import * as fb from 'firebase'

class Ad {
  constructor (title, description, ownerId, imageSrc = '', promo = false, id = null) {
    this.title = title
    this.description = description
    this.ownerId = ownerId
    this.imageSrc = imageSrc
    this.promo = promo
    this.id = id
  }
}

export default {
  state: {
    ads: [
      {
        title: 'Porsche 2018',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, quasi.',
        promo: false,
        imageSrc: 'http://www.cartube.co.il/images/stories/porche/p-911/2017/2018-Porsche911GT2RS-970px.jpg',
        id: '1'
      },
      {
        title: 'Audi 2018',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, quasi.',
        promo: false,
        imageSrc: 'http://www.easterimagess.com/images/audi-a8-wallpaper/Audi-A8-Wide-2018.jpg',
        id: '2'
      },
      {
        title: 'BMW 2018',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, quasi.',
        promo: false,
        imageSrc: 'http://www.droomtalk.com/wp-content/uploads/2018/01/4-2.jpg',
        id: '3'
      },
      {
        title: 'Ford Mustang GT-H',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, quasi.',
        promo: false,
        imageSrc: 'https://www.topgear.com/sites/default/files/styles/16x9_1280w/public/images/news-article/2016/03/e68f15778c8387dcbe6c2c7c87dfe3c9/2016-ford-shelby-gt-h-hertz-001-1.jpg?itok=bOvEszGq',
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

      try {
        const newAd = new Ad(
          payload.title,
          payload.description,
          getters.user.id,
          '',
          payload.promo
        )

        const ad = await fb.database().ref('ads').push(newAd)
        const imageExt = image.name.slice(image.name.lastIndexOf('.'))

        const fileData = await fb.storage().ref(`ads/${ad.key}.${imageExt}`).put(image)
        const imageSrc = fileData.metadata.downloadURLs[0]

        await fb.database().ref('ads').child(ad.key).update({
          imageSrc
        })

        commit('setLoading', false)
        commit('createAd', {
          ...newAd,
          id: ad.key,
          imageSrc
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
            new Ad(ad.title, ad.description, ad.ownerId, ad.imageSrc, ad.promo, key)
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
      for (let itemPromo of arrPromo) {
        if (itemPromo.promo === true) {
          promoCounter++
        }
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
