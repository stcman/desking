<template>
    <div id="dealer-section">
      <v-card class="top pa-4" flat>
        <h3>CUSTOMER INFORMATION</h3>
        <h2 class="mt-1">Brayden Jones</h2>

        <div class="row mt-0 customer-details" justify="center">
          <v-col class="col info-label">Cell Phone</v-col>
          <v-col class="col" align="end"><span class="fee-info">647-123-1234</span></v-col>
        </div>
        <v-divider class="mt-5"></v-divider>
        <h3 class="mt-5">DEAL INFORMATION</h3>
        <div class="row mt-0">
          <v-col class="col info-label">Deal Status</v-col>
          <v-col class="col "><v-select :value="'Quote'" :items="['Quote']" outlined dense hide-details></v-select></v-col>
        </div>
        <div class="row mt-0">
          <v-col class="col info-label">Program Period</v-col>
          <v-col class="col "><v-select :value="'Apr 2018'" :items="['Apr 2018']" outlined dense hide-details></v-select></v-col>
        </div>
        <v-divider class="mt-5"></v-divider>
        <h3 class="mt-5">DEALER INFORMATION</h3>
        <div class="row mt-0">
          <v-col class="col info-label">Dealer</v-col>
          <v-col class="col "><v-select :value="'Demo Hyundai'" :items="['Demo Hyundai']" outlined dense hide-details></v-select></v-col>
        </div>
        <div class="row mt-0">
          <v-col class="col info-label">Sales Manager</v-col>
          <v-col class="col "><v-select :value="'John Wick'" :items="['John Wick']" outlined dense hide-details></v-select></v-col>
        </div>
        <div class="row mt-0">
          <v-col class="col info-label">Salesperson</v-col>
          <v-col class="col "><v-text-field outlined dense hide-details></v-text-field></v-col>
        </div>
        <v-divider class="mt-5"></v-divider>
        <h3 class="mt-5">NOTES</h3>
      </v-card>
      <v-card flat class="bottom mt-3 pa-4">
        <v-tabs
          v-model="deskTypeTab"
          align-tabs="title"
          grow
        >
          <v-tab
            v-for="(deal, dealIdx) in dealTypes"
            :key="deal"
            :value="dealIdx"
          >
            <h3>{{ deal }}</h3>
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="deskTypeTab">
          <v-tab-item
            v-for="(deal) in dealTypes"
            :key="deal"
          >
            <h3 class="mt-5">GROSS PROFIT</h3>
            <div class="row mt-0">
              <v-col class="col info-label">Vehicle Cost</v-col>
              <v-col class="col" align="end"><span class="fee-info">$20,956.00</span></v-col>
            </div>
            <div class="row mt-0">
              <v-col class="col info-label">Trade +/- Allowance</v-col>
              <v-col class="col" align="end"><span class="num-box fee-info">$0.00</span></v-col>
            </div>
            <div class="row mt-0">
              <v-col class="col info-label">Cost Additions</v-col>
              <v-col class="col" align="end"><span class="num-box fee-info">$0.00</span></v-col>
            </div>
            <div class="row mt-0">
              <v-col class="col info-label">Rebate Cost</v-col>
              <v-col class="col" align="end"><span class="fee-info">$20,956.00</span></v-col>
            </div>
            <div class="row mt-0">
              <v-col class="col info-label">Dealer Gross</v-col>
              <v-col class="col" align="end"><span class="num-box fee-info">$848.00</span></v-col>
            </div>
          </v-tab-item>
      </v-tabs-items>
      </v-card>
    </div>
  </template>
  
  <script>
  import { mapState } from "vuex";
  
  export default {
    name: 'DealerSection',
    data () {
      return {
        deskTypeTab: null,
        dealTypes: [
          'Cash', 'Finance', 'Lease'
        ],
      }
    },
    computed: {
        ...mapState(['vista'])
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

  #dealer-section {
    background: #e0e2e4;
  }

  #dealer-section >>> .v-input__control{
    border-radius: 0;
    background: #f7f7f7;
  }

  span.fee-info{
    width: 60%;
    display: inline-block;
    font-weight: bold;
  }

  span.num-box {
    border: 1px solid #d8d8d8;
    background: rgb(247 247 247);
    padding: 5px 10px;
  }

  .info-label {
    display: flex;
    align-items: center;
  }
  </style>
  