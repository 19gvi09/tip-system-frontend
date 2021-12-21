<template>
    <div>
        <div class="wrapper title">
            <h1 class="title">{{ name }}</h1>
        </div>
        <div class="wrapper links">
            <a href="#" class="links__link" v-for="item in links" :key="item">{{ item.name }}</a>
        </div>
    </div>
</template>

<script>
export default {
    name: "Links",
    props: {
        name: String,
        links: Array
    }
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

.links {
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    padding-bottom: 60px;

    &__link {
        padding: 20px 0;
        color: $grey;
        text-decoration: none;
        border-bottom: 1px solid $purple2;
        text-align: left;

        &:last-child {
            border: none;
        }
    }
}
</style>
