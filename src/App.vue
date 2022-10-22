<template>
  <headerComponent></headerComponent>
  <mainComponent></mainComponent>
  <footerComponent></footerComponent>
</template>

<script>
import headerComponent from "@/components/header.component";
import mainComponent from "@/components/main.component";
import footerComponent from "@/components/footer.component";
export default {
  components: {headerComponent,mainComponent,footerComponent}
}
</script>

<style lang="scss">
@font-face {
  font-family: 'Steppe';
  font-style: normal;
  font-weight: 600;
  src: url("assets/fonts/Steppe-SemiBold.ttf");
}
@font-face {
  font-family: 'Steppe';
  font-style: normal;
  font-weight: 500;
  src: url("assets/fonts/Steppe-Medium.ttf");
}
@font-face {
  font-family: 'Steppe';
  font-style: normal;
  font-weight: 400;
  src: url("assets/fonts/Steppe-Regular.ttf");
}
*{padding: 0;margin: 0;border: 0; scroll-behavior: smooth;}
*,*:before,*:after{-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;}
:focus,:active{outline: none;}
a:focus,a:active{outline: none;}
nav,footer,header,aside{display: block;}
html,body{height:100%;width:100%;font-size:100%;line-height:1;font-size:14px;-ms-text-size-adjust:100%;-moz-text-size-adjust:100%;-webkit-text-size-adjust:100%;}
input,button,textarea{font-family:inherit;}
input::-ms-clear{display: none;}
button{cursor: pointer;}
button::-moz-focus-inner{padding:0;border:0;}
a,a:visited{text-decoration: none;}
a:hover{text-decoration: none;}
ul li{list-style: none;}
img{vertical-align: top;}
h1,h2,h3,h4,h5,h6,a,p,span{font-size:inherit;font-weight: inherit;color: inherit}
body{
  min-height: 100vh;
  width: 100vw;
  font-family: 'Steppe';
  font-weight: 400;
  font-size: 16px;
  color: var(--font-color);
  overflow-y: overlay;
  overflow-x: hidden;
}
html{
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
#app{
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
#app .header{
  flex: 0 0 auto;
}
#app .main{
  flex: 1 0 auto;
}
#app .footer{
  flex: 0 0 auto;
}
@media (min-width: 768px) {
  ::-webkit-scrollbar{
    width: 10px;
  }
  ::-webkit-scrollbar-track{
    border-radius: 100px;
  }
  ::-webkit-scrollbar-thumb{
    background: #8a8a8a;
    background-clip: content-box;
    border: 3px solid rgba(0, 0, 0, 0.0);
    border-radius: 100px;
  }
  ::-webkit-scrollbar-track-piece{
    background: rgba(0, 0, 0, 0.0);
  }
  ::-webkit-scrollbar-button{
    background: rgba(0, 0, 0, 0.0);
  }
  ::-webkit-scrollbar-corner {
    background: rgba(0, 0, 0, 0.0);
  }
}
:root{
  --font-color: #3E3E3E;
  --bg-color: #FFFFFF;
  --accent-color: #F2F3F7;
  --main-color: #E30611;
  --black-color: #1D2023;
  --border-radius: 4px;
}
.input, input{
  min-width: 272px;
  min-height: 56px;
  font-size: 16px;
  padding: 0 16px;
  display: block;
  border-radius: var(--border-radius);
  background: var(--bg-color);
  color: var(--font-color);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.03);
}
button{
  min-width: 272px;
  min-height: 56px;
  font-size: 16px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border-radius: var(--border-radius);
  background: var(--main-color);
  color: var(--bg-color);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.03);
  font-weight: 600;
  transition: background 0.35s, color 0.2s;
  @media screen and (min-width: 768px) {
    &:hover{
      background: var(--bg-color);
      color: var(--font-color);
    }
  }
}
.container{
  width: 100%;
  max-width: 1344px;
  padding: 0 72px;
  margin: 0 auto;
  @media screen and (max-width: 768px){
    padding: 0 24px;
  }
}
.main{
  overflow: hidden;
  position: relative;
}
.shadow{
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.03);
}
.s{
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
}
.m{
  font-weight: 500;
  font-size: 50px;
  line-height: 60px;
}
.l{
  font-weight: 600;
  font-size: 72px;
  line-height: 86px;
  color: var(--black-color);
}
</style>
