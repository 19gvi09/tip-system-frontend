<template>
    <div class="wrapper">
    <h1>Документация</h1>
</div>
</template>

<script>
export default {
    name: "DocHead"
}
</script>


<style lang="scss" scoped>
.wrapper {
    text-align: left;
    
    h1 {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        font-style: normal;
        font-weight: 900;
        font-size: 36px;
        line-height: 43px;
    }

    @include respond-to("xs") {
        $padding-x: 6.5vw;
        padding: 20px $padding-x 10px;
    }

    background: $radial;
    box-shadow: $sh_arrow;
    color: $white1;
}
</style>