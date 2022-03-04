<template>
  <div class="page-control">
    <p>Шрифт</p>
    <div class="button">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 32" fill="none">
        <path d="M16.3334 25.0667V16M16.3334 16V6.93333M16.3334 16H25.4001M16.3334 16H7.26672" stroke="#ABBDC1" stroke-width="3" stroke-linecap="round"/>
      </svg>
    </div>
    <div class="button">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 25" fill="none">
        <path d="M21.1667 12.5H4.5" stroke="#ABBDC1" stroke-width="3" stroke-linecap="round"/>
      </svg>
    </div>
    <div class="separator">
      <svg xmlns="http://www.w3.org/2000/svg" width="5" height="40" viewBox="0 0 5 40" fill="none">
        <rect x="0.666626" width="5" height="40" rx="2.5" fill="#E5EAEC"/>
      </svg>
    </div>
    <div class="theme-switch">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" fill="none">
        <path d="M30 42.1875C36.731 42.1875 42.1875 36.731 42.1875 30C42.1875 23.269 36.731 17.8125 30 17.8125C23.269 17.8125 17.8125 23.269 17.8125 30C17.8125 36.731 23.269 42.1875 30 42.1875Z" stroke-width="5.625" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M30 4.6875V8.4375M10.3125 49.6875L12.1875 47.8125L10.3125 49.6875ZM47.8125 47.8125L49.6875 49.6875L47.8125 47.8125ZM47.8125 12.1875L49.6875 10.3125L47.8125 12.1875ZM12.1875 12.1875L10.3125 10.3125L12.1875 12.1875ZM8.4375 30H4.6875H8.4375ZM55.3125 30H51.5625H55.3125ZM30 51.5625V55.3125V51.5625Z" stroke-width="5.625" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page-control-component',
  props: { }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-control {
  display: flex;
  align-items: center;
  padding: 8px 20px;
  border-radius: 15px;
  background: var(--block-background);
  justify-content: space-between;
  width: 240px;
}

.page-control p {
  font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: 14px;
}

.button {
  background: var(--alpha-selected-background);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  padding: 5px;
  border-radius: 35px;
}

.separator {
  height: 40px;
  width: 2px;
}

.theme-switch svg {
  height: 30px;
  stroke: var(--light-blue-gray);
}
.theme-switch {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
