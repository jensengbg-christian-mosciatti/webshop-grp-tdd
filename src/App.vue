<template>
  <div id="app">
    <div class="head">
      <img :src="`${publicPath}FootWear-long1.svg`" alt="logo" />
      <div id="nav">
        <router-link to="/about">About</router-link> | <router-link to="/products">Products</router-link> |
        <router-link to="/cart">Cart</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL,
    }
  },
}
</script>
<style lang="scss">
@font-face {
  font-family: 'uroobbold';
  src: url('assets/fonts/uroob-webfont.woff2') format('woff2'), url('assets/fonts/uroob-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
:root {
  --button-color: #66c52b;
  --button-text-color: #ffffff;
  --text-color: #000000;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  height: 100vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

.head {
  padding-top: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  img {
    max-width: 30vw;
  }

  #nav {
    // padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}

p {
  font-family: 'Lato', sans-serif;
}

h1,
h2,
h3,
h4 {
  font-family: 'Roboto', sans-serif;
}
</style>
