/* eslint-disable no-prototype-builtins */
import myApi from '~/api/api'

export default {
  getDreamDestinationsFromApi (state) {
    myApi.get('destinations').then((response) => {
      const laResponseData = response.data
      state.commit('setDreamDestinations', laResponseData)
    })
  },
  getTicketsForLocationCode (state, asLocationCode) {
    // Build filter object
    const loFilter = {
      offset: 0,
      limit: 100,
      skip: 0,
      where: {
        to: asLocationCode
      }
    }
    const lsFilter = encodeURI(JSON.stringify(loFilter))
    const lsUrlEndpoint = 'tickets?filter=' + lsFilter
    console.log(lsUrlEndpoint)
    myApi.get(lsUrlEndpoint).then((response) => {
      const laResponseData = response.data
      state.commit('setTickets', laResponseData)
    })
  }
}
