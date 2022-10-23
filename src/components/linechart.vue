<template>
  <div class="shadow">
    <Line
      :chartData="config.data"
      :height="0"
      :width="0"
    />
  </div>
</template>

<script>
import {Line} from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
  Plugin
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale
)
export default {
  name: 'linechart',
  components: {Line},
  props: ['labels', 'datasets'],
  data() {
    return {
      config: {
        type: 'line',
        data: {
          labels: this.labels,
          datasets: this.datasets
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
