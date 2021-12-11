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
    },
    mounted() {
        fetch("https://web.rbsuat.com/ab/rest/sbp/c2b/qr/status.do?userName=userName&password=password&mdOrder=04888d6f-7920-7531-8332-8de901efddd0&qrId=3946c0c02d1042f7b7e63cc0f1b52a95", {method: "POST"})
            .then(res => res.json())
            .then(res => console.log(res))
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
}
</style>
