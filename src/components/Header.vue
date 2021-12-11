<template>
    <div class="wrapper">
        <div class="row">
            <div class="logo">
                <div class="logo__img"></div>
                <h1 class="logo__title">Forta</h1>
            </div>
            <div class="burger">
                <div class="burger__line"></div>
                <div class="burger__line"></div>
                <div class="burger__line"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style lang="scss" scoped>
@include respond-to("xs") {
    $padding-x: 25px !global;
    $gutter: 20px !global;
    $total-cols: 3 !global;
}

@include respond-to("md") {
    $padding-x: 60px !global;
    $gutter: 20px !global;
    $total-cols: 3 !global;
}

.wrapper {
    padding: 20px $padding-x;
    box-shadow: $sh_light;
}

.row {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    display: flex;
    width: calc((100vw - 2 * $padding-x + $gutter) / $total-cols * 2 - $gutter);

    &__img {
        width: 30px;
        height: 30px;
        border-radius: 10px;
        background: $purple1;
    }

    &__title {
        margin: 0 0 0 10px;
        color: $black;
        font-size: 28px;
        line-height: 30px;
    }
}

.burger {
    cursor: pointer;

    &__line {
        margin: 0 0 7px 0;
        width: 30px;
        height: 2px;
        border-radius: 5px;
        background: $black;

        &:last-child {
            margin: 0;
        }
    }
}
</style>
