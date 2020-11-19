<template>
  <div class="container">
    <div class="toolbar">
      <Logo />
    </div>
    <div class="content">
      <div>
        <div class="links">
          <div>
            <button v-on:click="loadTicketIntoData(ticket)" class="ticket" v-for="ticket in computedTickets" :key="ticket.to"> {{ ticket.passenger}}'s ticket for flight {{ ticket.flight }} from {{ ticket.from }} to {{ ticket.to }} </button>
          </div>
        </div>
        <boarding-ticket
            v-if="isTicketSelected"
            :passenger="selectedTicket.passenger"
            :flight="selectedTicket.flight"
            :from="selectedTicket.from"
            :destination="selectedTicket.destination"
            :flightClass="selectedTicket.flightClass"
            :gate="selectedTicket.gate"
            :time="selectedTicket.time"
            :seat="selectedTicket.seat"
            :number="selectedTicket.number" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BoardingTicket from '~/components/BoardingTicket.vue'
export default {
  components: { BoardingTicket },
  name: 'Tickets',
  data () {
    return {
      isTicketSelected: false,
      selectedTicket: {}
    }
  },
  computed: mapGetters({
    computedTickets: 'index/getTickets'
  }),
  mounted () {
    // Récupération des tickets à partir du querystring
    const lsLocationCode = this.$route.query.locationCode
    this.$store.dispatch('index/getTicketsForLocationCode', lsLocationCode)
  },
  methods: {
    loadTicketIntoData (asTicket) {
      this.isTicketSelected = true
      this.selectedTicket = {
        passenger: asTicket.passenger,
        flight: asTicket.flight,
        from: asTicket.from,
        destination: asTicket.to,
        flightClass: asTicket.class,
        gate: asTicket.gate,
        time: asTicket.time,
        seat: asTicket.seat,
        number: asTicket.number
      }
    }
  }
}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.toolbar {
  height: 80px;
  background-color: #35495e;
  align-self: flex-start;
  width: 100%;
}

.content {
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-image: url('~assets/airplane.jpg');
  background-size: cover;
}

.title {
  font-weight: 500;
  font-size: 58px;
  color: #fff;
  letter-spacing: 1px;
  text-shadow: 1px 1px 4px #000;
  text-align: center;
}

.links {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  padding-top: 15px;
  & > * {
    margin: 5px;
  }
}

.ticket {
  margin: 50px;
  border: 2px solid grey;
  color: black;
  background-color: white;
  padding: 25px;
}
</style>
