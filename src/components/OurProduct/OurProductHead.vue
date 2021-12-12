<template>
<div class="wrapper">
    <h1>Наша продукция</h1>
</div>
</template>

<script>
export default {
    name: "OurProductHead"
}
</script>

<style lang="scss" scoped>
.wrapper {
    @include respond-to("xs") {
        $padding-x: 25px;
        $gutter: 20px;
        $total-cols: 3;
        padding: 30px $padding-x 22px;

    }

    @include respond-to("md") {
        $padding-x: 30px;
        $gutter: 20px;
        $total-cols: 3;
        padding: 30px $padding-x 22px;
    }

    background: $radial;
    box-shadow: $sh_arrow;
    color: $white1;
}

.row {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>
