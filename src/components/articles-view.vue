<template>
  <section class="articles view">
    <template v-if="articles.length > 0">
      <div class="article" v-for="article in articles" :key="article.term">
        <div class="definition">
          <b class="term">{{article.term}}</b> — {{article.description}}
        </div>
        <p class="source">{{article.src}}</p>
      </div>
    </template>
    <div v-else class="empty">Нет слов на данную букву</div>
    <div class="control">
      <a @click="set_page" :name="0" href="" class="first">Начало</a>
      <a @click="set_page" :name="Math.max(current_page - 1, 0)" href="" class="previous">Предыдущая</a>
      <p class="current">{{current_page+1}}</p>
      <a @click="set_page" :name="Math.min(current_page + 1, get_pages_count - 1)" href="" class="next">Следующая</a>
      <a @click="set_page" :name="get_pages_count - 1" href="" class="end">Конец</a>
    </div>
  </section>
</template>

<script>
import * as A_Terms from '../assets/a.json'
import * as B_Terms from '../assets/b.json'

export default {
  name: 'articles-view',
  props: { },
  data() {
    return {
      all_articles: [A_Terms, B_Terms],
      page_size: 10,
      page_currents: {}
    }
  },
  mounted() {
  },
  computed: {
    articles() {
      let array = []
      for (let i = this.current_page * this.page_size; i < ((this.current_page + 1) * this.page_size); i++) {
        if (this.all_articles[this.$root.current_alpha][i])
          array.push(this.all_articles[this.$root.current_alpha][i])
      }
      return array
    },
    get_pages_count() {
      return Math.ceil(this.all_articles[this.$root.current_alpha].length / this.page_size)
    },
    current_page() {
      return this.page_currents[this.$root.current_alpha] ?? 0
    }
  },
  methods: {
    set_page(event) {
      event.preventDefault()
      const {currentTarget:target} = event
      console.log(target.name)
      this.page_currents[this.$root.current_alpha] = parseInt(target.name)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.articles.view {
  display: flex;
  flex-direction: column;
  margin: 0 10px;
}

.article {
  color: var(--article-font-color);
  margin: 10px 0;
}

.source {
  font-weight: 300;
  margin: 5px 0;
}

.empty {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  color: var(--font-color);
}

.control {
  display: flex;
  justify-content: space-between;
  font-family: Roboto, sans-serif;
  font-weight: 500;
}

.control a {
  text-decoration: none;
  color: var(--link-color);
  transition: color .3s ease-out;
}

.control a:hover {
  color: var(--link-color-hover);
}

.control p {
  color: var(--font-color-contrast);
}
</style>
