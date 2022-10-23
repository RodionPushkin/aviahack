<template>
  <div class="container">
    <linechart></linechart>
  </div>
</template>

<script>
import linechart from "@/components/linechart";
export default {
  name: "panel",
  components: {linechart}
}
</script>

<style lang="scss" scoped>
.container{
  padding-top: 78px;
  @media screen and (max-width: 768px) {
    padding-top: 104px;
  }
}
</style>
