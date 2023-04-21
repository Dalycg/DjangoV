import { createStore } from 'vuex'

export default createStore({
  state: {
    user: 'Carlos Lynch',

    alerts : {
      files: ['254', '253'],

      reports: [{
        num: '254',
        to: 'Clara Pérez'
      },
      {
        num: '254',
        to: 'Clara Pérez'
      }],

      files_to_expire :['21','21']
    },

    activities_info: [
      {
        date: 'HOY',
        act: [
          {
            time: 'Ahora',
            type: "error",
            title: 'Expediente 123456',
            subtitle: "Vencimiento de la tarea quedan 3h.",
          },

          {
            time: 'Hace 3mins',
            type: "info",
            title: 'Expediente 123456',
            subtitle: "Nuevo expediente registrado",
            data: {
              time: '10:03AM',
              client: 'BBVA',
              expert: 'Carlos Lynch',
              expiration: '00-00-2023'
            }
          }
        ]     
      },

      {
        date: 'DIC. 18, 2022',
        act: [
          {
            time: '18:00 hrs',
            type: "success",
            title: 'Expediente 123456',
            subtitle: "Cambio de estado: Finalizado",
          },
        ]     
      }
  ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
