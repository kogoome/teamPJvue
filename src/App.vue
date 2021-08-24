<template>
  <div id="mobile">
    <Nav />
    <Section />
    <Footer />
  </div>
</template>

<script>
import Nav from "~/components/main/nav"
import Section from "./components/main/section"
import Footer from "./components/main/footer"


export default {
  components: {
    Nav, Section, Footer
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
  box-shadow: 0 0 15px 3px #bcbcbc;
}

</style>