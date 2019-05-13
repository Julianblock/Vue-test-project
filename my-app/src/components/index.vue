<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class='hello'>
      <router-link to='/About'>
        <div class='content-box-about content-box' >
          <img alt="Vue logo" src="../assets/logo.png" />
                <p v-text="$ml.with('VueJS').get('About')"/> 
        </div>
      </router-link>
      <router-link to='/Search'>
        <div class='content-box-advantage content-box' >
          <img alt="Vue logo" src="../assets/advantage.png" />
                <p v-text="$ml.with('VueJS').get('Advantages')"/> 
        </div>
      </router-link>
      <router-link to='/Syntax'>
        <div class='content-box-syntax content-box' >
          <img alt="Vue logo" src="../assets/syntax.png" />
                <p v-text="$ml.with('VueJS').get('Syntax')"/> 
        </div>
      </router-link>
      <router-link to='/Charts'>
        <div class='content-box-best-practices content-box' >
          <img alt="Vue logo" src="../assets/best-practices.png" />
                <p v-text="$ml.with('VueJS').get('Charts')"/> 
        </div>
      </router-link>
      <router-link to='/Unit-Testing'>
        <div class='content-box-unit-testing content-box' >
          <img alt="Vue logo" src="../assets/testing.png" />
                <p v-text="$ml.with('VueJS').get('Unittesting')"/> 
        </div>
      </router-link>
      <router-link to='/Samples'>
        <div class='content-box-programs content-box' >
          <img alt="Vue logo" src="../assets/programs.png" />
                <p v-text="$ml.with('VueJS').get('Samplevueprograms')"/> 
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

