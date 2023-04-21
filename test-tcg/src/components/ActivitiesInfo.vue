<template>
  <v-container fluid>
    <v-card class="mx-auto h-100 w-100">
      <v-container fluid>
        <h1>Actividades</h1>

        <div v-for="activity in activities_info" :key="activity">
          <v-list lines="one">
            <v-list-subheader>
              <h3 style="color: gray">{{ activity.date }}</h3>
            </v-list-subheader>

            <!-- <v-divider
                    inset
                    class="border-opacity-100"
                    thickness="2"
                    color="lime-accent-3"
                  ></v-divider>
                -->
            <div v-for="a in activity.act" :key="a">
              <v-list-item>
                <v-container fluid>
                  <v-row>
                    <v-col cols="3">
                      <p class="font-weight-light" style="color: gray">
                        {{ a.time }}
                      </p>
                    </v-col>
                    <v-col cols="9">
                      <v-card class="mx-auto w-100">
                        <v-row>
                          <v-col cols="1">
                            <v-toolbar>
                              <v-divider
                                :thickness="14"
                                class="border-opacity-100"
                                :color="a.type"
                                vertical
                              ></v-divider>
                            </v-toolbar>
                          </v-col>
                          <v-col cols="11">
                            <h3>{{ a.title }}</h3>
                            <p class="font-weight-light" style="color: gray">
                              {{ a.subtitle }}
                              <v-btn
                                variant="text"
                                v-if="a.type === 'info'"
                                :icon="
                                  show ? 'mdi-chevron-up' : 'mdi-chevron-down'
                                "
                                @click="show = !show"
                              ></v-btn>
                            </p>
                          </v-col>
                        </v-row>
                        <v-expand-transition v-if="a.type === 'info'">
                          <div v-show="show">
                            <v-card-text>
                              <h5 class="text-end text-decoration-underline">
                                Hora: {{ a.data.time }}
                              </h5>
                              <v-row>
                                <v-col cols="4">
                                  <h5>Cliente: {{ a.data.client }}</h5>
                                </v-col>
                                <v-col cols="8">
                                  <h5>Perito Asignado: {{ a.data.expert }}</h5>
                                </v-col>
                              </v-row>
                              <h5>Vencimiento: {{ a.data.expiration }}</h5>
                            </v-card-text>
                          </div>
                        </v-expand-transition>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-container>
              </v-list-item>
            </div>
          </v-list>
        </div>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ActivitiesInfo",

  data: () => ({
    show: false,
  }),

  computed: {
    ...mapState(["activities_info"]),
  },
};
</script>