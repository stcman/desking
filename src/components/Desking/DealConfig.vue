<template>
    <div id="vehicle-section">
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
            <v-card flat>
              <h3 class="mt-5">NEW VEHICLE INFORMATION</h3>
              <h2 class="mt-1">2018 Hyundai Elantra Sedan</h2>
              <h3>2.0L GL 6AT AB00</h3>

              <div class="row mt-0" justify="center">
                <v-col class="col info-label">MSRP</v-col>
                <v-col class="col" align="end"><span class="num-box fee-info">$20,349.00</span></v-col>
              </div>
              <div class="row mt-0">
                <v-col class="col info-label">Freight & PDI</v-col>
                <v-col class="col" align="end"><span class="num-box fee-info">$1,705.00</span></v-col>
              </div>
              <v-divider class="mt-5"></v-divider>
              <h3 class="mt-5">PRICING</h3>
              <div class="row mt-0">
                <v-col class="col info-label">Sales Amount</v-col>
                <v-col class="col" align="end"><span class="num-box fee-info">$22,054.00</span></v-col>
              </div>
              <div class="row mt-0">
                <v-col class="col info-label">Discount</v-col>
                <v-col class="col" align="end"><span class="num-box fee-info">$0.00</span></v-col>
              </div>
              <v-divider class="mt-5"></v-divider>
              <div class="row mt-0">
                <v-col class="col info-label"><h3>BEFORE-TAX REBATES</h3></v-col>
                <v-col class="col" align="end"><span class="fee-info">$0.00</span></v-col>
              </div>
              <v-divider class="mt-5"></v-divider>
              <div class="row mt-0">
                <v-col class="col info-label"><h3>ACCESSORIES</h3></v-col>
                <v-col class="col" align="end"><span class="fee-info">$0.00</span></v-col>
              </div>
              <v-divider class="mt-5"></v-divider>
              <div class="row mt-0">
                <v-col class="col info-label"><h3>OPTIONS & FEES</h3></v-col>
                <v-col class="col" align="end"><span class="fee-info">$619.00</span></v-col>
              </div>
              <v-divider class="mt-5"></v-divider>
              <div class="row mt-0">
                <v-col class="col info-label"><h3>EXTENDED WARRANTY</h3></v-col>
                <v-col class="col" align="end"><span class="fee-info">$0.00</span></v-col>
              </div>
              <v-divider class="mt-5"></v-divider>
              <h3 class="mt-5" style="color: #5e17eb;">TRADE-IN VEHICLE</h3>
              <div class="row mt-0">
                <v-col class="col info-label font-weight-black">2010 Hyundai Elantra</v-col>
                <v-col class="col" align="end"><span class="fee-info">115,000 km</span></v-col>
              </div>
              <div class="row mt-0">
                <v-col class="col info-label">Trade Amount</v-col>
                <v-col class="col" align="end"><span class="num-box fee-info">$0.00</span></v-col>
              </div>
              <div class="row mt-0">
                <v-col class="col info-label">Trade Lien</v-col>
                <v-col class="col" align="end"><span class="num-box fee-info">$0.00</span></v-col>
              </div>
              <v-divider class="mt-5"></v-divider>
              <div class="row mt-0">
                <v-col class="col info-label"><h3>TAXES</h3></v-col>
                <v-col class="col" align="end"><span class="fee-info">$1,113.65</span></v-col>
              </div>
              <v-divider class="mt-5"></v-divider>
              <div class="row mt-0">
                <v-col class="col info-label"><h3>AFTER-TAX REBATES</h3></v-col>
                <v-col class="col" align="end"><span class="fee-info">$0.00</span></v-col>
              </div>
              <v-divider class="mt-5"></v-divider>
              <div class="row mt-0">
                <v-col class="col info-label"><h3>TOTAL AFTER TAX</h3></v-col>
                <v-col class="col" align="end"><span class="fee-info">$23,806.65</span></v-col>
              </div>
            </v-card>
          </v-tab-item>
      </v-tabs-items>
    </div>
  </template>
  
  <script>
  import { mapState } from "vuex";
  
  export default {
    name: 'DealConfig',
    data () {
      return {
        deskTypeTab: null,
        dealTypes: [
          'Cash', 'Finance', 'Lease'
        ],
      }
    },
    computed: {
        ...mapState(['cars'])
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

  #vehicle-section {
    padding: 10px;
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
  