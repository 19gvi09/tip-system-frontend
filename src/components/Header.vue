<template>
    <div class="wrapper">
        <div class="row">
            <div class="logo">
                <div class="logo__img" @click="this.$router.push('/')"></div>
                <h1 class="logo__title" @click="this.$router.push('/')">Forta</h1>
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
.wrapper {
    box-shadow: $sh_light;
    background: $white1;

    @include respond-to("xs") {
        $padding-x: 6.5vw;
        $gutter: 20px;
        $total-cols: 3;
        padding: 20px $padding-x;
    }

    @include respond-to("md") {
        $padding-x: 60px;
        $gutter: 20px;
        $total-cols: 3;
        padding: 20px $padding-x;
    }
}

.row {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    display: flex;

    &__img {
        width: 30px;
        height: 30px;
        border-radius: 10px;
        background: $purple1;
        cursor: pointer;
    }

    &__title {
        margin: 0 0 0 10px;
        color: $grey;
        font-size: 28px;
        line-height: 30px;
        cursor: pointer;
    }
}

.burger {
    cursor: pointer;

    &__line {
        margin: 0 0 7px 0;
        width: 30px;
        height: 2px;
        border-radius: 5px;
        background: $grey;

        &:last-child {
            margin: 0;
        }
    }
}
</style>
