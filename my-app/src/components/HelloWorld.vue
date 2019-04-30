<template>
  <div class='hello'>
    <h1>{{ msg }}</h1>
    <div class='content-box' />
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

