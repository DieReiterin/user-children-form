<template>
  <div class="header">
    <div class="header__links">
      <p class="header__link">
        <router-link to="/form" style="text-decoration: none; color: inherit;">
          Форма</router-link>
      </p>
      <p class="header__link">
        <router-link to="/preview" style="text-decoration: none; color: inherit;">
          Превью</router-link>
      </p>
    </div>
  </div>
  <div class="main__wrapper">
    <router-view/>
  </div>
  <div class="footer">all rights reserved</div>
</template>
<script>
export default {
}
</script>
<style>
@font-face {
  font-family: "Montserrat";
  src: url(../src/fonts/Montserrat-VariableFont_wght.ttf);
}
* {
  font-family: 'Montserrat', sans-serif;
  -webkit-user-drag: none;
  user-select: none;
  margin: 0;
  padding: 0;
}
.header::after {
  position: absolute;
  content: '';
  top: 23px;
  left: 90px;
  min-width: 95px;
  min-height: 30px;
  background: url("assets/Frame 10.svg") no-repeat center center / cover;
}
.header {
  position: relative;
  width: 100%;
  height: 76px;
  border-bottom: 1px solid rgba(17, 17, 17, 0.1);
}
.header__links {
  display: flex;
  width: 134px;
  height: 100%;
  margin: 0 auto;
}
.header__links p {
  font-size: 14px;
  line-height: 76px;
  color: rgba(17, 17, 17, 0.48);
  margin-right: 20px;
}
.main__wrapper {
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 73vh;
}
.footer {
  width: 100%;
  height: 76px;
  line-height: 76px;
  text-align: center;
  font-style: 14px;
  border-bottom: 1px solid rgba(17, 17, 17, 0.1);

}
</style>
