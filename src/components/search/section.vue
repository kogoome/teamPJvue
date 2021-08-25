<template>
  <section>
    <header>
      <input
        type="text"
        placeholder="검색" />
      <i class="fi-rr-marker"></i>
    </header>

    <article>
      <div style="display: inline-block; width: 118px; height:118px; background-color: black;"></div>
      <div style="display: inline-block; width: 118px; height:118px; background-color: black;"></div>
      <div style="display: inline-block; width: 118px; height:118px; background-color: black;"></div>
      <div style="display: inline-block; width: 118px; height:118px; background-color: black;"></div>
      <div style="display: inline-block; width: 118px; height:118px; background-color: black;"></div>
      <div style="display: inline-block; width: 118px; height:118px; background-color: black;"></div>
      <div style="display: inline-block; width: 118px; height:118px; background-color: black;"></div>
      <div style="display: inline-block; width: 118px; height:118px; background-color: black;"></div>
      <div style="display: inline-block; width: 118px; height:118px; background-color: black;"></div>
      <div style="display: inline-block; width: 118px; height:118px; background-color: black;"></div>
      <div style="display: inline-block; width: 118px; height:118px; background-color: black;"></div>
      <div style="display: inline-block; width: 118px; height:118px; background-color: black;"></div>
      <div style="display: inline-block; width: 118px; height:118px; background-color: black;"></div>
      <div style="display: inline-block; width: 118px; height:118px; background-color: black;"></div>
      <div style="display: inline-block; width: 118px; height:118px; background-color: black;"></div>
      <div style="display: inline-block; width: 118px; height:118px; background-color: black;"></div>
      <div style="display: inline-block; width: 118px; height:118px; background-color: black;"></div>
      <div style="display: inline-block; width: 118px; height:118px; background-color: black;"></div>
      <div style="display: inline-block; width: 118px; height:118px; background-color: black;"></div>
      <div style="display: inline-block; width: 118px; height:118px; background-color: black;"></div>
      <div style="display: inline-block; width: 118px; height:118px; background-color: black;"></div>
    </article>
  </section>
</template>

<script>
export default {
  name: "Section"
}
</script>

<style lang="scss" scoped>
@import url('https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css');

section {
  padding-top: 10px;
  padding-bottom: 10px;
  height: 558px;
  //스크롤바 없에기
  overflow-x: hidden;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  header {
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 12px;
    height:30px;
    input {
      width:290px;
      height:30px;
      border-radius: 10px;
      border: 0;
      background-color: #eaeaea;
      font-size: 1em;
      outline: none;
      float: left;
      padding-left: 15px;
      &:hover {
        outline: none;
      }
    }
    i {
      padding-top: 4px;
      float: right;
      font-size: 130% ;
    }
  }
  article {
    width:360px;
    div{
      margin: 1px;
    }
  }
}
</style>