<template>
  <Chart
    :size="{ width: 500, height: 420 }"
    :data="data"
    :margin="margin"
    :direction="direction"
    :axis="axis"
  >
    <template #layers>
      <Grid strokeDasharray="2,2" />
      <Bar :dataKeys="['Dia', 'monto_inicial']" :barStyle="{ fill: '#90e0ef' }" />
      <Bar :dataKeys="['Dia', 'ingresos']" :barStyle="{ fill: '#0096c7' }" />
      <Bar :dataKeys="['Dia', 'egresos']" :barStyle="{ fill: '#48cae4' }" />
    </template>

    <template #widgets>
      <Tooltip
        borderColor="#48CAE4"
        :config="{
          monto_inicial: { color: '#90e0ef' },
          ingresos: { color: '#0096c7' },
          egresos: { color: '#48cae4' },
        }"
      />
    </template>
  </Chart>
</template>

<script>
import { Chart, Grid,Bar,Tooltip } from "vue3-charts";
import { plByMonth } from "./data";

export default {
  name: "LineChart",
  components: { Chart, Grid,Bar,Tooltip },
  data() {
    const axis = {
      primary: {
        type: "band",
      },
      secondary: {
        domain: ["dataMin", "dataMax + 100"],
        type: "linear",
        ticks: 8,
      },
    };
    return {
      data: plByMonth,
      direction: "horizontal",
      margin: {
        left: 0,
        top: 20,
        right: 20,
        bottom: 0,
      },
      axis,
    };
  },
};
</script>
