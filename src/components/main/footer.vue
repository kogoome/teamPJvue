<template>
  <!--메뉴-->
  <footer>
    <i class="fi-rr-home"></i>
    <i class="fi-rr-search"></i>
    <i class="fi-rr-play-alt"></i>
    <i class="fi-rr-shopping-bag"></i>
    <i class="fi-rr-portrait"></i>
  </footer>

  <!--Uicons by <a href="https://www.flaticon.com/uicons">Flaticon</a>
    <i class="fi-rr-cross-circle"></i>
    <i class="fi-rr-envelope"></i>
    <i class="fi-rr-link"></i>
    <i class="fi-rr-menu-burger"></i>
    <i class="fi-rr-microphone"></i>
    <i class="fi-rr-mode-landscape"></i>
    <i class="fi-rr-mode-portrait"></i>
    <i class="fi-rr-marker"></i>
    <i class="fi-rr-film"></i>
    <i class="fi-rr-copy"></i>
    <i class="fi-rr-apps"></i>-->
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="scss" scoped>
@import url('https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css');

footer {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  i {
    font-size: 130%;
    padding: 13px;
  }
}
</style>