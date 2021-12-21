<template>
    <div class="wrapper title">
        <h1 class="title">Написать в поддержку</h1>
    </div>
</template>

<script>
export default {
    name: "Support"
}
</script>

<style lang="scss" scoped>
.wrapper {
    &.title {
        background: $radial;
        box-shadow: $sh_arrow;
        padding-top: 20px;
        padding-bottom: 10px;
    }

    .title {
        color: $white1;
        margin: 0;
        font-size: 36px;
        line-height: 43px;
        text-align: left;
    }
}
</style>