<template>
  <nav class="enc-navigation">
    <div class="alphas-list">
      <a class="alpha" :class="{selected: index === currentAlpha}" v-on:click="setAlpha" v-for="(alpha, index) in alphas" :key="index" :alpha="index">{{ alpha }}</a>
    </div>
    <search-field/>
  </nav>
</template>

<script>
import SearchField from "@/components/search-field";
export default {
  name: 'enc-nav',
  components: {SearchField},
  props: { },
  data() {
    return {
      currentAlpha: 0
    }
  },
  computed: {
    alphas() {
      let alphas = []
      for (let i = 0; i < 32; i++) {
        if (128 + i in [154, 156])
          continue
        alphas.push(String.fromCharCode("А".charCodeAt(0) + i))
        if (128 + i === 133)
          alphas.push("Ё")
      }
      return alphas
    }
  },
  methods: {
    setAlpha: function (event) {
      event.preventDefault()
      const {currentTarget:target} = event
      this.currentAlpha = parseInt(target.getAttribute("alpha"))
      this.$root.currentAlpha = this.currentAlpha
      console.log(this.currentAlpha)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.enc-navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--block-background);
  padding: 15px 15px;
  border-radius: 15px;
  width: 100%;
}

.alphas-list {
  display: flex;
}

a.alpha {
  padding: 7px;
  width: 25px;
  height: 25px;
  font-size: 12px;
  font-family: Roboto, serif;
  font-weight: 500;
  color: var(--nav-inactive-color);
  text-decoration: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  -ms-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  border-radius: 5px;
  transition: background-color .3s ease-out;
}

a.alpha.selected {
  background: var(--alpha-selected-background);
  color: var(--nav-active-color);
  font-weight: 600;
}

a.alpha:hover {
  background: var(--alpha-hover-background);
}
</style>
