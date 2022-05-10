<template>
  <div>
    <p class="text-gray-500 font-semibold">Ventas por cada mes</p>
    <Chart
      :size="{ width: 800, height: 500 }"
      :data="sales"
      :margin="margin"
      :direction="direction"
      :axis="axis"
    >
      <template #layers>
        <Grid strokeDasharray="2,2" />
        <Area
          :dataKeys="['mes', 'ventas']"
          type="monotone"
          :areaStyle="{ fill: 'url(#grad)' }"
        />
        <Line
          :dataKeys="['mes', 'ventas']"
          type="monotone"
          :lineStyle="{
            stroke: '#9f7aea',
          }"
        />
        <Marker
          v-if="marker"
          :value="1000"
          label="Mean."
          color="green"
          strokeWidth="2"
          strokeDasharray="6 6"
        />
        <defs>
          <linearGradient id="grad" gradientTransform="rotate(90)">
            <stop offset="0%" stop-color="#be90ff" stop-opacity="1" />
            <stop offset="100%" stop-color="white" stop-opacity="0.4" />
          </linearGradient>
        </defs>
      </template>

      <template #widgets>
        <Tooltip
          borderColor="#48CAE4"
          :config="{
            ventas: { color: '#3F0960' },
            mes: { color: '#3F0960' },
          }"
        />
      </template>
    </Chart>
  </div>
</template>

<script>
import { Chart, Grid, Line, Marker, Area, Tooltip } from "vue3-charts";

export default {
  name: "LineChart",
  props: ["sales"],
  components: { Chart, Grid, Line, Area, Tooltip, Marker },
  data() {
    const direction = "horizontal";
    const margin = {
      left: 0,
      top: 20,
      right: 20,
      bottom: 0,
    };
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
    return {direction, margin, axis };
  },
  methods: {},
  mounted() {},
};
</script>

<style>
.tick {
  color: darkblue;
}
.chart > svg {
  width: 800px !important;
}
</style>
