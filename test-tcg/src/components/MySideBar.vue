<template>
    
    <v-navigation-drawer class="bg-grey-darken-2" theme="dark" width="105" v-model="drawer">
      <div> 
      <v-img
          class="bg-white mt-3 ml-5"
          width="60"
          :aspect-ratio="1"
          src="../assets/Logo.png"
          cover
        ></v-img>
      </div> 
      <br><br><br>
      <div>
      <v-list>
        <v-list-item class="text-center sidebar-item" v-for="[icon, text] in links" :key="icon" link>
          
          <v-icon color="white">{{ icon }}</v-icon> 
          
          <br>
          <v-list-item-title style="font-size: 10px">{{ text }}</v-list-item-title>
          
        </v-list-item>
      </v-list>
    </div>
    </v-navigation-drawer>


   

    <!-- <v-main>
      <v-container class="py-8 px-6" fluid>
        <v-row>
          <v-col v-for="card in cards" :key="card" cols="12">
            <v-card>
              <v-list lines="two">
                <v-list-subheader>{{ card }}</v-list-subheader>
                <template v-for="n in 6" :key="n">
                  <v-list-item>
                    <template v-slot:prepend>
                      <v-avatar color="grey-darken-1"></v-avatar>
                    </template>

                    <v-list-item-title>Message {{ n }}</v-list-item-title>

                    <v-list-item-subtitle>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Nihil repellendus distinctio similique
                    </v-list-item-subtitle>
                  </v-list-item>

                  <v-divider
                    v-if="n !== 6"
                    :key="`divider-${n}`"
                    inset
                  ></v-divider>
                </template>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main> -->
</template>
  

<script>

export default {
  name: "MySideBar",

  data: () => ({
    drawer: null,
    links: [
      ["mdi-view-dashboard", "Panel Principal"],
      ["mdi mdi-file-multiple", "Expedientes"],
      ["mdi mdi-map-marker-radius", "Ubicación"],
      ["mdi mdi-email", "Emails"],
      ["mdi mdi-map-search-outline", "Mapa Perito"],
      ["mdi mdi-text-box-outline", "Facturación"],
      ["mdi mdi-logout", "Cerrar"],
    ],
  }),


computed : {
 
}

};

</script>

<style scoped>

  .sidebar-item:active {
    color: #ccff33;
  }
</style>