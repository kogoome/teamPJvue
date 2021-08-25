<template>
  <!--메뉴-->
  <footer>
    <a href="#/"><i class="fi-rr-home"></i></a>
    <a href="#/search"><i class="fi-rr-search"></i></a>
    <a href="#"><i class="fi-rr-play-alt"></i></a>
    <a href="#"><i class="fi-rr-shopping-bag"></i></a>
    <a href="#"><i class="fi-rr-portrait"></i></a>
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
  a {
    padding: 10px;
    text-decoration:none;
    color:black;
    transition: color 0.5s;
    &:hover {
      color: yellowgreen;
    }
    i {
      font-size: 130%;
    }
  }
}
</style>