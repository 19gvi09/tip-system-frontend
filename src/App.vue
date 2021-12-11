<template>
    <div>
        <Header />
        <!-- <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/lk">LK</router-link>
        </div> -->
        <router-view/>
    </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
    name: "App",
    components: {
        Header,
    }
}
</script>

<style lang="scss">
#app {
  font-family: Lato, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: $purple4;
}
</style>
