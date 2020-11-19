<template>
  <div class="ticket-container">
  <div class="header blue">
    <div class="left blue">
      <div class="slightly-bigger">Boarding Ticket</div>
      <div> {{ flightClass }} </div>
    </div>
    <div class="right blue">
      <div class="slightly-bigger">Boarding Ticket</div>
      <div> {{ flightClass }} </div>
    </div>
    <br/>
    <br/>
    <br/>
  </div>
  <div class="center all-caps">
    <div class="left">
      <div class="light-gray"> Passenger </div>
      <div> {{ passenger }} </div>
      <br/>
      <table>
        <tr>
          <td class="light-gray">Flight</td>
          <td class="light-gray">From</td>
          <td class="light-gray">To</td>
          <td class="light-gray">Class</td>
        </tr>
        <tr>
          <td> {{ flight }}</td>
          <td> {{ from }}</td>
          <td> {{ destination }}</td>
          <td> {{ flightClass }}</td>
        </tr>
      </table>
      <br/>
      <table>
        <tr>
          <td class="light-gray"> Gate </td>
          <td class="light-gray"> Time </td>
          <td class="light-gray"> Seat </td>
        </tr>
        <tr>
          <td class="monospaced"> {{ gate }} </td>
          <td class="monospaced"> {{ time }} </td>
          <td class="monospaced"> {{ seat }} </td>
        </tr>
      </table>
    </div>
    <div class="right dash">
      <div class="light-gray"> Passenger </div>
      <div> {{ passenger }} </div>
      <br/>
      <div>
        <table>
          <tr>
            <td class="light-gray">GATE</td>
            <td class="light-gray">TIME</td>
            <td class="light-gray">SEAT</td>
          </tr>
          <tr>
            <td class="monospaced"> {{ gate }} </td>
            <td class="monospaced"> {{ time }} </td>
            <td class="monospaced"> {{ seat }} </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
  <div class="bottom blue">
  </div>
</div>

</template>

<script>
export default {
  name: 'BoardingTicket',
  props: [
    'passenger',
    'flight',
    'from',
    'destination',
    'flightClass',
    'gate',
    'time',
    'seat',
    'number'
  ]
}
</script>

<style scoped>

.header {
  color: white;
  padding: 10px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.blue {
  background-color: #34a7dd;
}

.all-caps {
  text-transform: uppercase;
}

.slightly-bigger {
  font-size: 140%;
}

.left {
  float: left;
}

.right {
  float: right;
}

.dash {
  padding-left: 10px;
  border-left: 2px dashed gray;
}

.dashleft {
  padding-right: 10px;
  border-right: 2px dashed gray;
}

.center {
  background-color: white;
  padding: 10px;
  height: 200px;
}

.bottom {
  color: white;
  padding: 10px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}
.light-gray {
  color: lightgray;
}
.monospaced {
  border: 1px solid gray;
  padding: 5px;
  font-family: monospace;
}
</style>
