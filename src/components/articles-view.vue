<template>
  <section class="articles view">
    <div class="article" v-for="article in articles" :key="article.term">
      <div class="definition">
        <b class="term">{{article.term}}</b> — {{article.description}}
      </div>
      <p class="source">{{article.src}}</p>
    </div>
    <div v-if="!articles" class="empty">Нет слов на данную букву</div>
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
      all_articles: {
        0: A_Terms,
        1: B_Terms
      }
    }
  },
  computed: {
    articles() {
      return this.all_articles[this.$root.currentAlpha]
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
</style>
