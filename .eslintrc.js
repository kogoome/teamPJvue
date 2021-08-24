module.exports = {
  env: {
    browser: true, //브라우저환경에서 린팅 트루
    node: true //노드환경에서 린팅 트루
  },
  extends: [
    // vue 코드검사규칙
    //'plugin:vue/vue3-essential', // lv1
    'plugin:vue/vue3-strongly-recommended', // lv2
    //'plugin:vue/vue3-recommended', //lv 3 가장 엄격
    // js 코드검사규칙
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint' //바벨은 es6를 es5로 전환해주는 패키지. 동작하면서 문법검사같이
  },
  rules: {//vue, js 코드규칙을 변경시킬때 이부분에 추가
    //https://eslint.vuejs.org/rules/html-closing-bracket-newline.html#vue-html-closing-bracket-newline
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never", //한줄 작성시 태그기호를 다음줄로 넘길지여부
      "multiline": "never" //여러줄 작성시
    }],
    //https://eslint.vuejs.org/rules/html-self-closing.html#vue-html-self-closing
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "always",//빈태그(<img />등)에서 닫는태그 사용여부
        "normal": "never",//일반태그에서 닫는태그 사용금지추천
        "component": "always"//컴포넌트태그에서 사용추천
      },
      "svg": "always",
      "math": "always"
    }]
  } 
}