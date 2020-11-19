/* eslint-disable no-prototype-builtins */
import myApi from '~/api/api'

export default {
  getDreamDestinationsFromApi (state) {
    myApi.get('destinations').then((response) => {
      const responseData = response.data
      state.commit('setDreamDestinations', responseData)
    })
  }
}
