<template>
  <Responsive class="w-full">
    <template #main="{ width }">
      <Chart
        direction="circular"
        :size="{ width, height: 400 }"
        :data="data_pie"
        :margin="{
          left: Math.round((width - 360) / 2),
          top: 20,
          right: 0,
          bottom: 20,
        }"
        :axis="axis"
        :config="{ controlHover: false }"
      >
        <template #layers>
          <Pie
            :dataKeys="['name', 'pl']"
            :pie-style="{ innerRadius: 100, padAngle: 0.05 }"
          />
        </template>
        <template #widgets>
          <Tooltip
            :config="{
              name: { label:'' },
              pl: { label: '$' },
            }"
            hideLine
          />
        </template>
      </Chart>
    </template>
  </Responsive>
</template>

<script>
import { Chart, Responsive, Pie, Tooltip } from "vue3-charts";

export default {
  name: "LineChart",
  components: { Chart, Responsive, Pie, Tooltip },
  props: {
    data_pie: {
      type: Array,
    },
  },
};
</script>
