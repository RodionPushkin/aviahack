<template>
  <div class="container">
    <barchart></barchart>
    <linechart></linechart>
  </div>
</template>

<script>
import linechart from "@/components/linechart";
import barchart from "@/components/barchart";
export default {
  name: "panel",
  components: {linechart,barchart}
}
</script>

<style lang="scss" scoped>
.container{
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
