<template>
  <div>
    <page-control-component/>
    <enc-menu/>
  </div>
</template>

<script>
import PageControlComponent from "@/components/page-control-component";
import EncMenu from "@/components/enc-menu";
export default {
  name: 'aside-component',
  components: {EncMenu, PageControlComponent},
  props: { }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
