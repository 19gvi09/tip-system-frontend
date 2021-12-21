<template>
    <div>
        <Header />
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

@include respond-to("xs") {
    $padding: 25px;
    $grid-width: 430px;
    $total-cols: 3;

    .wrapper {
        padding-left: $padding;
        padding-right: $padding;
    }
}
@include respond-to("sm") {
    $padding: 30px;
    $grid-width: 718px;
    $total-cols: 3;
    
    .wrapper {
        padding-left: $padding;
        padding-right: $padding;
    }
}
@include respond-to("md") {
    $padding: 40px;
    $grid-width: 974px;
    $total-cols: 3;
    
    .wrapper {
        padding-left: $padding;
        padding-right: $padding;
    }
}
@include respond-to("lg") {
    $padding: 50px;
    $grid-width: 1230px;
    $total-cols: 3;
    
    .wrapper {
        padding-left: $padding;
        padding-right: $padding;
    }
}
@include respond-to("xl") {
    $padding: 60px;
    $grid-width: 1390px;
    $total-cols: 3;

    .wrapper {
        padding-left: $padding;
        padding-right: $padding;
    }
}
</style>
