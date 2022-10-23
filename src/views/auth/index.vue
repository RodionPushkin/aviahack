<template>
  <div class="container">
    <form @submit.prevent="send">
      <h1 class="m">Вход</h1>
      <div class="input">
        <input type="password" minlength="0" maxlength="32" placeholder=" " value="крутой пароль">
        <label>пароль</label>
      </div>
      <button type="submit">войти</button>
    </form>
  </div>
</template>

<script>
import api from "@/api/index.js";
export default {
  name: "auth",
  methods: {
    send(){
      api.put('user/auth').then(res=>{
        if(res.length > 0){
          localStorage.setItem('token',res[0])
          this.$router.push('/panel')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  form{
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
}
</style>
