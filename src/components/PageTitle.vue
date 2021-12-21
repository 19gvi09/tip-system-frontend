<template>
    <div class="wrapper">
        <h4 v-if="this.$route.name === 'LK'" class="ave">Привет,</h4>
        <h1 class="title">{{ data.name }}</h1>
        <h5 class="id">Твой <span>Forta id:</span> {{ data.id }}</h5>
    </div>
</template>

<script>
export default {
    name: "PageTitle",
    props: {
        data: Object,
    },
}
</script>

<style lang="scss" scoped>
.wrapper {
    background: $radial;
    box-shadow: $sh_arrow;
    color: $white1;
    padding-top: 30px;
    padding-bottom: 140px;
    text-align: left;
}

.ave {
    margin: 0 0 10px;
    font-size: 18px;
    font-weight: 700;
    line-height: 20px;
}

.title {
    margin:0;
    font-size: 32px;
    line-height: 50px;
}

.id {
    margin: 10px 0 0;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;

    span {
        font-weight: 700;
    }
}
</style>
