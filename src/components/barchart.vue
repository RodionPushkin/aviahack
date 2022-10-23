<template>
  <div class="shadow">
    <Bar
      :chartData="config.data"
      height="0"
      width="0"
    />
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
export default {
  name: 'linechart',
  components: {Bar},
  data() {
    return {
      config: {
        type: 'bar-chart',
        data: {
          labels: ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'],
          datasets: [{
            label: 'график',
            data: [65, 59, 80, 81, 56, 55, 40, 12, 13, 14, 15, 16],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  padding: 16px;
  border-radius: var(--border-radius);
  background: var(--bg-color);

  canvas {
    max-width: 100%;
    max-height: 500px;
  }
}
</style>
