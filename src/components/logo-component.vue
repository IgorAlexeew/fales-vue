<template>
  <div class="logo">
    <svg xmlns="http://www.w3.org/2000/svg" width="839" height="3" viewBox="0 0 839 6" fill="none">
      <rect width="839" height="6" rx="3"/>
    </svg>
    <p class="title">Электронная морская энциклопедия<br>“Fales”</p>
    <div class="bottom-fig">
      <svg xmlns="http://www.w3.org/2000/svg" width="169" height="3" viewBox="0 0 338 6" fill="none">
        <rect width="338" height="6" rx="3"/>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 60 60" fill="none">
        <path d="M12.1875 29.0625H6.5625C6.5625 44.0625 15.9375 53.4375 30 53.4375C44.0625 53.4375 53.4375 44.0625 53.4375 29.0625H47.8125M30 21.5625V52.5V21.5625Z" stroke="#2A3133" stroke-width="5.625" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M30 19.6875C33.6244 19.6875 36.5625 16.7494 36.5625 13.125C36.5625 9.50063 33.6244 6.5625 30 6.5625C26.3756 6.5625 23.4375 9.50063 23.4375 13.125C23.4375 16.7494 26.3756 19.6875 30 19.6875Z" stroke-width="5.625" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="169" height="3" viewBox="0 0 338 6" fill="none">
        <rect width="338" height="6" rx="3"/>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'logo-component',
  props: { }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo {
  margin: 40px 0 30px 0;
}

.logo svg {
  margin: 2px;
}

.logo svg rect {
  fill: var(--logo-font-color);
}
.logo svg path {
  stroke: var(--logo-font-color);
}

.logo .title {
  color: var(--logo-font-color);
  font-family: 'Roboto Slab', serif;
  font-weight: 600;
  font-size: 20px;
  margin: 10px 10px 5px 10px;
  text-align: center;
}

.logo > .bottom-fig {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
