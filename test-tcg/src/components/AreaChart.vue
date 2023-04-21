<template>
  <v-container>
    <h1>Informes Retrasados</h1>
    <div id="chart">
      <apexchart
        type="area"
        height="350"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "AreaChart",

  data: () => ({
    series: [
      {
        name: "series2",
        data: [300, 500, 550, 700, 760, 600, 500, 400, 650, 450, 600, 250],
      },
      {
        name: "series1",
        data: [480, 350, 490, 300, 400, 500, 650, 600, 550, 400, 250, 200],
      },
    ],

    chartOptions: {
      chart: {
        height: 350,
        type: "area",
        stacked: false,
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      yaxis: {
        categories: [250, 500, 775, 1000],
        axisBorder: {
          show: true,
        },
      },
      xaxis: {
        categories: [
          "Ene.",
          "Feb.",
          "Mar.",
          "Apr.",
          "May.",
          "Jun.",
          "Jul.",
          "Aug.",
          "Sep.",
          "Oct.",
          "Nov.",
          "Dic.",
        ],
        tickAmount: 8,
        labels: {
          rotate: -20,
          rotateAlways: true,
        },
      },
      legend: {
        position: "top",
      },
      fill: {
        colors: [ '#fadc97', '#9ddaef'],

        // type: "gradient",
        // gradient: {
        //   shadeIntensity: 1,
        //   opacityFrom: 0.7,
        //   opacityTo: 0.9,
        //   stops: [0, 90, 100],
        // },
      },
    },
  }),
};
</script>