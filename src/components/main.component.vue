<template>
<main class="main">
  <div class="background">
    <div class="buble"></div>
    <div class="buble"></div>
  </div>
  <router-view></router-view>
</main>
</template>

<script>
export default {
  name: "main.component"
}
</script>

<style lang="scss" scoped>
.background{
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  &:before{
    content: '';
    background: rgba(255, 255, 255, 0.20);
    backdrop-filter: blur(145px);
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
  }
  .buble{
    transform: translate(-50%,-50%);
    aspect-ratio: 1/1;
    border-radius: 50%;
    position: absolute;
    z-index: -2;
  }
  .buble:nth-child(1){
    animation: 120s linear infinite buble-1;
  }
  .buble:nth-child(2){
    animation: 180s linear infinite buble-2 reverse;
  }
}
@keyframes buble-1 {
  0%{
    width: 20vmin;
    background: var(--main-color);
    top: 20vmin;
    left: 30vmin;
  }
  25%{
    width: 40vmin;
    background: var(--main-color);
    top: 70vmax;
    left: 60vmin;
  }
  50%{
    width: 50vmax;
    background: var(--accent-color);
    top: 60vmin;
    left: 0vmin;
  }
  75%{
    width: 30vmin;
    background: var(--main-color);
    top: 90vmin;
    left: 80vmin;
  }
  100%{
    width: 20vmin;
    background: var(--main-color);
    top: 20vmin;
    left: 30vmin;
  }
}
@keyframes buble-2 {
  0%{
    width: 40vmax;
    background: var(--main-color);
    top: 90vmax;
    left: 60vmax;
  }
  25%{
    width: 30vmax;
    background: var(--main-color);
    top: 70vmin;
    left: 90vmax;
  }
  50%{
    width: 50vmin;
    background: var(--accent-color);
    top: 60vmax;
    left: 0vmax;
  }
  75%{
    width: 20vmax;
    background: var(--main-color);
    top: 90vmax;
    left: 10vmax;
  }
  100%{
    width: 40vmax;
    background: var(--main-color);
    top: 90vmax;
    left: 60vmax;
  }
}
</style>
