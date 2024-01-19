<template>
  <div className="App">
    <div>
      <RouterLink to='/page1'>page1</RouterLink>
        ｜
      <RouterLink to='/page2'>page2</RouterLink>
        ｜
      <RouterLink to='/page3'>page3</RouterLink>
    </div>
    <RouterView></RouterView>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
