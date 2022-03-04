<template>
  <aside class="menu">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 260" fill="none">
      <rect width="12" height="260" rx="5" fill="#DBE2E7"/>
    </svg>
    <li>
      <ul v-for="link in links" :key="link">
        <a :href="link.href">{{ link.name }}</a>
      </ul>
    </li>
  </aside>
</template>

<script>
export default {
  name: 'enc-menu',
  props: { },
  data() {
    return {
      links: {
        "annotations": { name: "Аннотации", href: "#" },
        "sources": { name: "Источники", href: "#" },
        "conventions": { name: "Условные обозначения", href: "#" },
        "accepted abbreviations": { name: "Принятые сокращения", href: "#" },
        "literature": { name: "Литература", href: "#" },
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.menu {
  display: flex;
  align-items: center;
  padding: 20px 20px;
  border-radius: 15px;
  background: var(--block-background);
  margin-top: 20px;
}

.menu svg {
  height: 170px;
  margin-right: 10px;
}

.menu li {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.menu li ul {
  margin: 4px 0;
}

.menu a {
  text-decoration: none;
  color: var(--link-color);
  font-weight: 500;
  transition: color .3s ease-out;
}

.menu a:hover {
  color: var(--link-color-hover);
}
</style>
