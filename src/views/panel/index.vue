<template>
  <div class="container">
    <nav>
      <form>
        <select @change="selectChaged">
          <option value="3">прогноз на 3 месяца</option>
          <option value="6" selected>прогноз на 6 месяца</option>
          <option value="12">прогноз на 12 месяца</option>
        </select>
        <div class="file">
          <input @change="fileChanged" id="file" type="file"
                 accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel">
          <label class="button" for="file">загрузить данные</label>
        </div>
      </form>
    </nav>
    <barchart v-if="!isloading" :datasets="datasets" :labels="months"></barchart>
    <linechart v-if="!isloading" :datasets="datasets" :labels="months"></linechart>
  </div>
</template>

<script>
import linechart from "@/components/linechart";
import barchart from "@/components/barchart";

export default {
  name: "panel",
  components: {linechart, barchart},
  data() {
    return {
      isloading: true,
      countMonth: 6,
      months: [],
      list: [650, 590, 800, 2810, 4560, 3550, 1400, 1200, 1300, 900, 1500, 1600, 1000],
      datasets: [{
        label: 'объем, м^3',
        data: [],
        fill: false,
        borderColor: '#E30611',
        tension: 0.1
      }]
    }
  },
  mounted() {
    this.isloading = false
    this.dates()
  },
  methods: {
    fileChanged(event) {
      console.log(event)
      this.dates()
    },
    selectChaged(event) {
      this.countMonth = event.target.value
      this.dates()
    },
    dates() {
      this.isloading = true
      this.months = []
      let monthsDefault = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь', 'след. январь', 'след. февраль', 'след. март', 'след. апрель', 'след. май', 'след. июнь', 'след. июль', 'след. август', 'след. сентябрь', 'след. октябрь', 'след. ноябрь', 'след. декабрь']
      let currentMonth = new Date().toLocaleDateString('RU', {month: 'long'})
      let months = monthsDefault.slice(monthsDefault.indexOf(currentMonth), monthsDefault.indexOf(currentMonth) + 1 + Number(this.countMonth))
      this.months = months
      this.datasets[0].data = Array.from(this.list).slice(0, this.months.length)
      setTimeout(() => {
        this.isloading = false
      }, 100)
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  width: 100%;
  margin-top: 24px;

  form {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-wrap: wrap;
    gap: 32px;
  }

  .file {
    input {
      display: none;
    }

    label {
      cursor: pointer;
    }
  }
}

.container {
  padding-top: 78px;
  display: flex;
  justify-content: stretch;
  flex-direction: column;
  gap: 48px;
  padding-bottom: 48px;
  @media screen and (max-width: 768px) {
    padding-top: 104px;
  }
}
</style>
