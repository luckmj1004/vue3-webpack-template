// lint  코드 검사/문법등
// 참조 : https://eslint.vuejs.org/user-guide/
// 참조 : https://eslint.org/docs/latest/rules/


module.exports = {
  env: {
    browser : true,
    node : true
  },
  extends : [
    //vue
    //'plugin:vue/vue3-essential', //lv1
    'plugin:vue/vue3-strongly-recommended', //lv2
    //'plugin:vue/vue3-recommended', //lv3
    //js   
    'eslint:recommended'
  ],
  parserOptions: {
    parser : 'babel-eslint'
  },
  rules: {
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "never"
    }],
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "always",
        "normal": "naver",
        "component": "always"
      },
      "svg": "always",
      "math": "always"
    }]

  }
  
}