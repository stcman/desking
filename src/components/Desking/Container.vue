<template>
    <div id="DeskContainer">
      <div id="deal-config-grid" class="desk-sections">
        <DealConfig />
      </div>
      <div id="fin-grid" class="desk-sections">
        <FinanceSection />
      </div>
      <div id="lease-grid" class="desk-sections">
        <LeaseSection />
      </div>
      <div id="deal-sec-grid" class="desk-sections">
        <DealerSection />
      </div>
    </div>
  </template>
  
  <script>
  import DealConfig from "./DealConfig.vue";
  import FinanceSection from "./FinanceSection.vue";
  import LeaseSection from './LeaseSection.vue';
  import DealerSection from './DealerSeciton.vue';

  export default {
    name: 'DeskingContainer',
    components: {
      DealConfig,
      FinanceSection,
      LeaseSection,
      DealerSection
    },
    data () {
      return {
        deskTypeTab: null,
        dealTypes: [
          'Cash', 'Finance', 'Lease'
        ],
      }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  #DeskContainer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    background: #e0e2e4;
  }

  @media only screen and (max-width: 1800px){
    #deal-config-grid {
      grid-area: deal-config;
    }

    #fin-grid {
      grid-area: fin;
    }

    #lease-grid {
      grid-area: lease;
    }
    
    #deal-sec-grid {
      grid-area: deal-sec;
    }

    #DeskContainer {
      grid-template-areas: 
      "deal-config deal-config deal-sec deal-sec"
      "fin fin lease lease"
    }
  }
    
  
  .desk-sections {
    margin: 10px;
    height: 90vh;
    background: #FFF;
    border-radius: 5px;
  }
  </style>
  