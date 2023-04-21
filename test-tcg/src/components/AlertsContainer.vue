<template>
  <v-card class="mx-auto h-screen" max-width="500" elevation="11">
    <h2 class="text-end mr-5 mt-5">Alertas</h2>

    <div class="alerts-subtitles">
      <span>
        <v-icon class="alerts-icon-subtitles ml-2 mr-2"
          >mdi mdi-file-plus-outline</v-icon
        >Agendamiento</span
      >
    </div>
    <v-container>
      <v-row dense class="mx-auto">
        <v-col v-for="file in alerts.files" :key="file">
          <v-card width="295" max-height="70" class="mx-auto">
            <div class="alerts-cards-header">
              <h5 class="alerts-cards-header-title">
                <v-icon size="25" color="black"
                  >mdi mdi-file-plus-outline</v-icon
                >
                EXPEDIENTE EN AGENDAMIENTO
              </h5>
            </div>

            <div>
              <v-row>
                <v-col cols="9" class="d-flex align-center">
                  <h5 class="ml-5" style="color: grey">Expediente {{ file }} agendamiento</h5>
                </v-col>
                <v-col cols="3">
                  <v-checkbox
                    color="lime-accent-3"
                    value=""
                    hide-details
                    density="compact">
                  </v-checkbox>
                </v-col>
              </v-row>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <div class="alerts-subtitles">
        <span>
          <v-icon class="alerts-icon-subtitles ml-2 mr-2"
            >mdi mdi-text-box-plus-outline</v-icon
          >Informes</span
        >
      </div>
      <v-container>
        <v-row dense class="mx-auto">
          <v-col v-for="report in alerts.reports" :key="report.num">
            <v-card width="295" max-height="70" class="mx-auto">
              <div class="alerts-cards-header">
                <h5 class="alerts-cards-header-title">
                  <v-icon size="25" color="black"
                    >mdi mdi-text-box-plus-outline</v-icon
                  >
                  INFORMES ASIGNADOS
                </h5>
              </div>
  
              <div>
                <v-row>
                  <v-col cols="9" class="d-flex align-center text-center">
                    <h5 class="ml-5" style="color: grey">Informe {{ report.num }} asigando a {{ report.to }} </h5>
                  </v-col>
                  <v-col cols="3">
                    <v-checkbox
                      color="lime-accent-3"
                      value=""
                      hide-details
                      density="compact">
                    </v-checkbox>
                  </v-col>
                </v-row>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <div class="alerts-subtitles">
        <span>
          <v-icon class="alerts-icon-subtitles ml-2 mr-2"
            >mdi mdi-alarm</v-icon
          >Vencimiento Peritos</span
        >
      </div>
      <v-container>
        <v-row dense class="mx-auto">
          <v-col v-for="file in alerts.files_to_expire" :key="file">
            <v-card width="295" max-width="350" max-height="70" class="mx-auto">
              <div class="alerts-cards-header">
                <h5 class="alerts-cards-header-title">
                  <v-icon size="25" color="black"
                    >mdi mdi-alarm</v-icon
                  >
                  VENCIMIENTO PERITOS
                </h5>
              </div>
  
              <div>
                <v-row>
                  <v-col cols="9" class="d-flex align-center text-center">
                    <h5 class="ml-5" style="color: grey">{{ file }} Expedientes por vencer </h5>
                  </v-col>
                  <v-col cols="3">
                    <v-checkbox
                      color="lime-accent-3"
                      value=""
                      hide-details
                      density="compact">
                    </v-checkbox>
                  </v-col>
                </v-row>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

  </v-card>
</template>
  
<script>
import { mapState } from "vuex";
export default {
  name: "AlertsContainer",

  data: () => ({

  }),

  computed: {
    ...mapState(["alerts"]),
  },
};
</script>

<style scoped>
.alerts-subtitles {
  background-color: #F8BBD0;
  height: 28px;
}
.alerts-icon-subtitles {
  size: 25px;
}

.alerts-cards-header {
  background-color: #f5f5f5;
  height: 28px;
}
.alerts-cards-header-title {
  color: gray;
}
</style>