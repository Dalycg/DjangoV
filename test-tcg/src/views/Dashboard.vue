<template>
  <v-app id="inspire">
    <MySideBar/>
    <MyAppBar/>

    <v-main>
        <v-row dense >
          <v-col cols="9">
            <v-row dense >
              <v-col cols="4">
                <ActivitiesSummary/>
              </v-col>
    
              <v-col cols="8">
                
                
                
              </v-col>
            </v-row>
            <v-row dense >
              <v-col cols="7">
                
                <AreaChart/>
                
              </v-col>

              <v-col cols="5">
                
                <ActivitiesInfo/>
                
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="3">
            
            <AlertsContainer/>
            
          </v-col>
        </v-row>
    </v-main>
  </v-app>


    

    <v-main>
      

    </v-main>

</template>

<script>

import { defineComponent } from 'vue';

// Components

import MySideBar from '../components/MySideBar.vue';
import MyAppBar from '../components/MyAppBar.vue';
import AlertsContainer from '../components/AlertsContainer.vue';
import ActivitiesSummary from '../components/ActivitiesSummary.vue';
import AreaChart from '../components/AreaChart.vue';
import ActivitiesInfo from '../components/ActivitiesInfo.vue';
export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Dashboard',

  components: {
    MySideBar,
    MyAppBar,
    AlertsContainer,
    ActivitiesSummary,
    AreaChart,
    ActivitiesInfo
    

  },
});
</script>
   
