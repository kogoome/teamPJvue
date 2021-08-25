<template>
  <section>
    <header>
      <input
        type="text"
        placeholder="검색" />
      <i class="fi-rr-marker"></i>
    </header>
    <hr />
    <article>
      <div style="display: inline-block; width: 112px; height:118px; background-color: black;"></div>
      <div style="display: inline-block; width: 112px; height:118px; background-color: black;"></div>
      <div style="display: inline-block; width: 112px; height:118px; background-color: black;"></div>
      <br />
      <div style="display: inline-block; width: 112px; height:118px; background-color: black;"></div>
      <div style="display: inline-block; width: 112px; height:118px; background-color: black;"></div>
      <div style="display: inline-block; width: 112px; height:118px; background-color: black;"></div>
      <br />
      <div style="display: inline-block; width: 112px; height:118px; background-color: black;"></div>
      <div style="display: inline-block; width: 112px; height:118px; background-color: black;"></div>
      <div style="display: inline-block; width: 112px; height:118px; background-color: black;"></div>
      <br />
      <div style="display: inline-block; width: 112px; height:118px; background-color: black;"></div>
      <div style="display: inline-block; width: 112px; height:118px; background-color: black;"></div>
      <div style="display: inline-block; width: 112px; height:118px; background-color: black;"></div>
      <br />
      <div style="display: inline-block; width: 112px; height:118px; background-color: black;"></div>
      <div style="display: inline-block; width: 112px; height:118px; background-color: black;"></div>
      <div style="display: inline-block; width: 112px; height:118px; background-color: black;"></div>
      <br />
      <div style="display: inline-block; width: 112px; height:118px; background-color: black;"></div>
      <div style="display: inline-block; width: 112px; height:118px; background-color: black;"></div>
      <div style="display: inline-block; width: 112px; height:118px; background-color: black;"></div>
      <br />
      <div style="display: inline-block; width: 112px; height:118px; background-color: black;"></div>
      <div style="display: inline-block; width: 112px; height:118px; background-color: black;"></div>
      <div style="display: inline-block; width: 112px; height:118px; background-color: black;"></div>
      <br />
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
  padding: 10px;
  height: 520px;
  //스크롤바 없에기
  white-space: nowrap;
  overflow-x: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  header {
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
      padding-top: 6px;
      float: right;
      font-size: 130% ;
    }
  }
  article {
    div{
      margin: 1px;
    }
  }
}
</style>