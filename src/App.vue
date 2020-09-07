<template>
  <div id="app">
    <div id="nav">
      <router-link to="/about">About</router-link> |
      <router-link to="/products">Products</router-link> | <router-link to="/cart">Cart</router-link> |
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

p {
  font-family: 'Lato', sans-serif;
}

h1, h2, h3, h4 {
  font-family: 'Roboto', sans-serif;
}

:root {
  --button-color: #66C52B;
  --button-text-color: #ffffff;
  --text-color: #000000;
}
</style>
