<template>
  <div class="container">
    <h1 class="l">Приветствуем!<br>Это сервис для просмотра и прогнозирования складских мощностей
      <router-link to="/panel">попробовать</router-link>
    </h1>
  </div>
</template>

<script>
export default {
  name: "home"
}
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    a {
      color: var(--bg-color);
      background: var(--main-color);
      padding: 12px;
      border-radius: var(--border-radius);
      transition: background 0.35s, color 0.2s;
      box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.03);
      @media screen and (min-width: 768px) {
        &:hover {
          background: var(--bg-color);
          color: var(--font-color);
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    padding-top: 104px;
  }
}
</style>
