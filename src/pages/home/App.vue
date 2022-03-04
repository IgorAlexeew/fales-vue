<template>
  <logo-component/>
  <enc-nav/>
  <div class="view">
    <articles-view/>
    <aside-component/>
  </div>
  <fales-info/>
  <footer-block/>
</template>

<script>

import LogoComponent from "@/components/logo-component";
import EncNav from "@/components/enc-nav";
import ArticlesView from "@/components/articles-view";
import AsideComponent from "@/components/aside-component";
import FalesInfo from "@/components/fales-info";
import FooterBlock from "@/components/footer-block";
export default {
  name: 'App',
  components: {FooterBlock, FalesInfo, AsideComponent, ArticlesView, EncNav, LogoComponent },
  data() {
    return {
      current_alpha: 0
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Roboto+Serif:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

:root {
  --block-background: #EFF4F5;
  --alpha-selected-background: #DEE5E8;
  --alpha-hover-background: #e8edee;
  --search-field-background: #E6EDEE;
  --search-field-color: #6F878E;
  --logo-font-color: #2B3133;
  --nav-inactive-color: #5E686C;
  --nav-active-color: #000;
  --light-blue-gray: #A1B1B5;
  --font-color: #4E6068;
  --font-color-contrast: #272828;
  --link-color: #4E6068;
  --link-color-hover: #303e44;
  --article-font-color: #000;
  --footer-font-color: #fff;
  --footer-font-color-hover: #e7e7e7;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#app {
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--font-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1080px;
}

.view {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 20px 0;
}
</style>
