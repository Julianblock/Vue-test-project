<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class='hello'>
      <div class='content-box-about content-box' >
        <img alt="Vue logo" src="../assets/logo.png" />
        About Vue
      </div>
      <div class='content-box-advantage content-box' >
        <img alt="Vue logo" src="../assets/advantage.png" />
        Advantages of Vue
      </div>
      <div class='content-box-syntax content-box' >
        <img alt="Vue logo" src="../assets/syntax.png" />
        Vue Syntax
      </div>
      <div class='content-box-best-practices content-box' >
        <img alt="Vue logo" src="../assets/best-practices.png" />
        Best Practices
      </div>
      <div class='content-box-unit-testing content-box' >
        <img alt="Vue logo" src="../assets/testing.png" />
        Unit Testing
      </div>
      <div class='content-box-programs content-box' >
        <img alt="Vue logo" src="../assets/programs.png" />
        Sample Vue Program
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

