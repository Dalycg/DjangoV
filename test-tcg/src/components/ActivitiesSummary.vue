<template>
  <v-container>
    <h1 class="mb-3">
      Resumen <br />
      Actividades
    </h1>

    <v-row dense>
      <v-col cols="4" class="text-center" v-for="activity in summary1" :key="activity">
        <v-progress-circular
          class="mb-1"
          :rotate="360"
          :size="56"
          :width="4"
          :model-value="activity.value"
          :color="activity.color"
        >
          <h2 class="font-weight-black" style="color: black">20</h2>
        </v-progress-circular>
        <h6 style="color: grey">{{ activity.name }} </h6>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ActivitiesSummary",

  data: () => ({
    summary1:[
        {
            name: 'Agendamiento',
            value: '60',
            color: 'light-blue-darken-1'
        },

        {
            name: 'En Inspección',
            value: '80',
            color: 'orange'
        },

        {
            name: 'Elaboración',
            value: '40',
            color: 'light-green-darken-3'
        },

        {
            name: 'Revisión',
            value: '90',
            color: 'indigo-lighten-2'
        },
        {
            name: 'Revisión Finalizada',
            value: '50',
            color: 'brown-darken-1'
        },
        {
            name: 'Validado',
            value: '20',
            color: 'red'
        },

        {
            name: 'Revisión Cliente',
            value: '40',
            color: 'blue-grey-lighten-2'
        },
        {
            name: 'Pendiente a Facturar',
            value: '30',
            color: 'cyan-accent-2'
        },
        {
            name: 'Reconsiderada',
            value: '80',
            color: 'blue-grey-lighten-2'
        },
        {
            name: 'Finalizada',
            value: '80',
            color: 'green-lighten-2'
        }        
    ]
  }),

  computed: {},
};
</script>
