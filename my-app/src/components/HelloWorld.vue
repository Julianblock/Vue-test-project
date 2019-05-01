<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class='hello'>
      <router-link to='/About'>
        <div class='content-box-about content-box' >
          <img alt="Vue logo" src="../assets/logo.png" />
          About Vue
        </div>
      </router-link>
      <router-link to='/Advantages'>
        <div class='content-box-advantage content-box' >
          <img alt="Vue logo" src="../assets/advantage.png" />
          Advantages of Vue
        </div>
      </router-link>
      <router-link to='/Syntax'>
        <div class='content-box-syntax content-box' >
          <img alt="Vue logo" src="../assets/syntax.png" />
          Vue Syntax
        </div>
      </router-link>
      <router-link to='/Best-Practices'>
        <div class='content-box-best-practices content-box' >
          <img alt="Vue logo" src="../assets/best-practices.png" />
          Best Practices
        </div>
      </router-link>
      <router-link to='/Unit-Testing'>
        <div class='content-box-unit-testing content-box' >
          <img alt="Vue logo" src="../assets/testing.png" />
          Unit Testing
        </div>
      </router-link>
      <router-link to='/Samples'>
        <div class='content-box-programs content-box' >
          <img alt="Vue logo" src="../assets/programs.png" />
          Sample Vue Program
        </div>
      </router-link>
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

