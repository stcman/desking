<template>
    <div id="lease-section">
        <div class="top">
            <h3 class="ml-4 mt-2">LEASE</h3>
            <div class="rate-boxes-cont mt-2">
                <div class="rate-outer">
                    <div class="rate-inner">
                        <span class="mths-rate">36 MTH. 0.00%</span>
                        <span class="total-rate">$309.28</span>
                    </div>
                    <span class="label-down">$0 down</span>
                </div>
                <div class="rate-outer">
                    <div class="rate-inner">
                        <span class="mths-rate">48 MTH. 0.00%</span>
                        <span class="total-rate">$257.73</span>
                    </div>
                    <span class="label-down">$2,000 down</span>
                </div>
                <div class="rate-outer">
                    <div class="rate-inner">
                        <span class="mths-rate">60 MTH. 0.00%</span>
                        <span class="total-rate">$220.91</span>
                    </div>
                    <span class="label-down">$4,000 down</span>
                </div>
            </div>
        </div>
        <div class="bottom px-4">
            <h3 class="pt-3 mb-5">LEASE OPTIONS</h3>
            <v-autocomplete
                :value="'Hyundai Motor Finance'"
                outlined
                hide-details
                dense
                clearable
                :items="['Hyundai Motor Finance']"
            ></v-autocomplete>
            <div class="options-rates mt-10 mb-10">
                <div class="rate-boxes">
                    <div class="font-weight-bold">60 Mont Rate</div>
                    <div class="num-box font-weight-bold">0.00 %</div>
                    <div class="rate-opts">
                        <v-btn outlined width="100%" prepend-icon><v-icon small class="ml-0">mdi-check</v-icon>HMF Rate</v-btn>
                        <v-btn outlined width="100%">Bank Rate</v-btn>
                        <v-btn outlined width="100%">Override</v-btn>
                    </div>
                </div>
                <div class="rate-boxes">
                    <div class="font-weight-bold">72 Mont Rate</div>
                    <div class="num-box font-weight-bold">0.00 %</div>
                    <div class="rate-opts">
                        <v-btn outlined width="100%" prepend-icon><v-icon small class="ml-0">mdi-check</v-icon>HMF Rate</v-btn>
                        <v-btn outlined width="100%">Bank Rate</v-btn>
                        <v-btn outlined width="100%">Override</v-btn>
                    </div>
                </div>
                <div class="rate-boxes">
                    <div class="font-weight-bold">84 Mont Rate</div>
                    <div class="num-box font-weight-bold">0.00 %</div>
                    <div class="rate-opts">
                        <v-btn outlined width="100%" prepend-icon><v-icon small class="ml-0">mdi-check</v-icon>HMF Rate</v-btn>
                        <v-btn outlined width="100%">Bank Rate</v-btn>
                        <v-btn outlined width="100%">Override</v-btn>
                    </div>
                </div>
            </div>
            <div class="fin-config">
                <div class="row" justify="center">
                    <v-col class="col "><span>Payment Schedule</span><v-select :value="'Monthly'" :items="['Monthly']" outlined dense hide-details></v-select></v-col>
                    <v-col class="col "><span>Lease Program</span><v-select :value="'Standard'" :items="['Standard']" outlined dense hide-details></v-select></v-col>
                </div>
                <div class="row mt-5">
                    <v-col class="col"><span>Base Down Payment</span><v-text-field :value="'$0'" outlined dense hide-details></v-text-field></v-col>
                    <v-col class="col"><span>Down Increment</span><v-text-field :value="'$2,000'" outlined dense hide-details></v-text-field></v-col>
                </div>
                <v-divider class="mt-8"></v-divider>
                <div class="row mt-4">
                    <v-col class="col"><span>Start Term</span><v-text-field :value="'60'" outlined dense hide-details></v-text-field></v-col>
                    <v-col class="col"><span>Term Increment</span><v-text-field :value="'12'" outlined dense hide-details></v-text-field></v-col>
                </div>
                <v-divider class="mt-5"></v-divider>
                <div class="row mt-0">
                    <v-col class="col "><span>Annual Mileage</span><v-select :value="'24,000km'" :items="['24,000km']" outlined dense hide-details></v-select></v-col>
                    <v-col class="col "><span>Security Deps.</span><v-select :value="'0'" :items="['0']" outlined dense hide-details></v-select></v-col>
                    <v-col class="col"><span>Bank Rate</span><v-text-field :value="'6.99 %'" outlined dense hide-details></v-text-field></v-col>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  import { mapState } from "vuex";
  
  export default {
    name: 'LeaseSection',
    data () {
      return {
      }
    },
    computed: {
        ...mapState(['vista'])
    }
  }
  </script>
  
  <style scoped>

  #lease-section {
    background: #e0e2e4;
  }

  #lease-section .top {
    margin-bottom: 10px;
    background: #FFF;
    border-radius: 5px;
  }

  #lease-section .bottom {
    background: #FFF;
    border-radius: 5px;
  }
  
  .rate-boxes-cont {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .rate-inner span {
    display: block;
    color: #FFF;
    text-align: center;
    padding: 10px;
    background: #000;
  }

  span.label-down {
    text-align: center;
    display: block;
    padding: 10px;
  }

  .mths-rate {
    font-size: 18px;
  }

  .total-rate {
    padding-top: 0 !important;
    font-size: 30px;
  }

  .options-rates {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 15px;
  }

  .rate-boxes {
    text-align: center;
  }

  .rate-opts{
    padding: 5px 0px;
  }

  div.num-box {
    border: 1px solid #d8d8d8;
    background: #f7f7f7;
    padding: 5px 0px;
  }

  .rate-boxes  >>> button {
    border-radius: 0;
    border-color: #d8d8d8;
  }

  .bottom >>> .v-input__control{
    border-radius: 0;
    background: #f7f7f7;
  }
  </style>
  