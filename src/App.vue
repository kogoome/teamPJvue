<template>
  <div id="mobile">
    <RouterView />
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/footer"

export default {
  components: {
    Footer
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
#mobile {
  width: 360px;
  height: 640px;
  background-color: white;
  margin: auto;
  box-shadow: 0 0 10px 2px #bcbcbc;
}
</style>