<template>
  <div class='hello'>
    <h1>{{ msg }}</h1>
    <div class='content-box' >
      <img alt="Vue logo" src="../assets/logo.png" />
      Content for this box
    </div>
    <div class='content-box' >
      <img alt="Vue logo" src="../assets/logo.png" />
      Content for this box
    </div>
    <div class='content-box' >
      <img alt="Vue logo" src="../assets/logo.png" />
      Content for this box
    </div>
    <div class='content-box' >
      <img alt="Vue logo" src="../assets/logo.png" />
      Content for this box
    </div>
    <div class='content-box' >
      <img alt="Vue logo" src="../assets/logo.png" />
      Content for this box
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

