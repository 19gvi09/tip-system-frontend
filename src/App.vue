<template>
    <div>
        <Header />
        <!-- <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/lk">LK</router-link>
        </div> -->
        <router-view/>
        <Footer />
    </div>
</template>

<script>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'

export default {
    name: "App",
    components: {
        Header,
        Footer,
    }
}
</script>

<style lang="scss">
#app {
  font-family: Lato, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: $purple3;
  font-size: 16px;
}
</style>
