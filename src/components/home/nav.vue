<template>
  <nav>
    <span id="logo">inssagram</span>
    <i class="fi-rr-paper-plane right"></i>
    <i class="fi-rr-thumbs-up right"></i>
    <i class="fi-rr-add right"></i>
  </nav>
</template>

<script>
export default {
  name: "Nav"
}
</script>

<style lang="scss" scoped>
@import url('https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css');

nav {
  padding: 10px;
  #logo {
    font-size: large;
    font-weight: bolder;
  }
  .right {
    float: right;
    padding-left: 18px;
    font-size: 120%;
  }
}
</style>