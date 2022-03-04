<template>
  <div class="search">
    <input type="text" placeholder="Поиск...">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 29" fill="none">
      <path d="M11.9 4.35C13.3335 4.34991 14.7385 4.76424 15.9569 5.54636C17.1753 6.32848 18.1588 7.44732 18.7965 8.77694C19.4342 10.1066 19.701 11.5942 19.5667 13.0723C19.4323 14.5504 18.9023 15.9603 18.0363 17.1433L23.8421 23.1565C24.0282 23.3508 24.1367 23.6107 24.146 23.8842C24.1553 24.1577 24.0647 24.4249 23.8922 24.6322C23.7197 24.8396 23.4781 24.972 23.2155 25.003C22.9529 25.034 22.6887 24.9612 22.4757 24.7993L22.358 24.6935L16.5522 18.6803C15.5786 19.4447 14.4434 19.9582 13.2403 20.1784C12.0372 20.3985 10.8008 20.319 9.63326 19.9464C8.46571 19.5738 7.40052 18.9188 6.52571 18.0355C5.65089 17.1522 4.99156 16.066 4.6022 14.8666C4.21283 13.6673 4.10461 12.3891 4.28647 11.1379C4.46833 9.88663 4.93505 8.69815 5.64807 7.67064C6.36109 6.64314 7.29994 5.80611 8.38705 5.2287C9.47416 4.6513 10.6783 4.3501 11.9 4.35ZM11.9 6.525C10.4148 6.525 8.99045 7.13607 7.94025 8.22378C6.89005 9.31149 6.30005 10.7867 6.30005 12.325C6.30005 13.8633 6.89005 15.3385 7.94025 16.4262C8.99045 17.5139 10.4148 18.125 11.9 18.125C13.3853 18.125 14.8096 17.5139 15.8598 16.4262C16.9101 15.3385 17.5 13.8633 17.5 12.325C17.5 10.7867 16.9101 9.31149 15.8598 8.22378C14.8096 7.13607 13.3853 6.525 11.9 6.525Z"/>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'search-field',
  props: { }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search {
  background: var(--search-field-background);
  color: var(--search-field-color);
  padding: 4px 10px;
  margin: 0 0 0 10px;
  border-radius: 7px;
  display: flex;
}

.search svg {
  height: 20px;
  fill: var(--search-field-color);
}

.search input {
  background: none;
  border: none;
  outline: none;
  font-family: Roboto, sans-serif;
  font-weight: 500;
  color: var(--search-field-color);
}

.search input::placeholder {
  color: var(--search-field-color);
}
</style>
