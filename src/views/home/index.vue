<template>
  <div class="container">
    <h1 class="l">Какой-то крутой заголовок</h1>
    <h2 class="m">подзаголовок</h2>
    <h3 class="s">подзаголовок</h3>
    <input type="text" placeholder="текст" minlength="0" maxlength="32">
    <button>текст</button>
  </div>
</template>

<script>
export default {
  name: "home"
}
</script>

<style scoped>
.container{
  padding-top: 140px;
}
input{
  margin-bottom: 24px;
}
</style>
