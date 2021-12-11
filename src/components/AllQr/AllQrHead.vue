<template>
<div class="wrapper">
    <h1>QR-код и ссылка</h1>
</div>
</template>

<script>
export default {
    name: "AllQrHead"
}
</script>

<style lang="scss" scoped>
.wrapper {

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
        $padding-x: 25px;
        $gutter: 20px;
        $total-cols: 3;
        padding: 30px $padding-x 36px;
    }

    @include respond-to("md") {
        $padding-x: 30px;
        $gutter: 20px;
        $total-cols: 3;
        padding: 30px $padding-x 36px;
    }

    background: $radial;
    box-shadow: $sh_arrow;
    color: $white1;
}
</style>
