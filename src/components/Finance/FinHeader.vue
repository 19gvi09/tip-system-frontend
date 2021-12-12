<template>
    <div class="wrapper">
        <div class="row">
            <div class="text">
                <h2 class="text__name">Все операции</h2>
                <h5 class="text__id">Твой <span>Forta id:</span> 7685 7588 4758</h5>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FinHeader"
}
</script>

<style lang="scss" scoped>
.wrapper {
    @include respond-to("xs") {
        $padding-x: 6.5vw;
        $gutter: 20px;
        $total-cols: 3;
        padding: 30px $padding-x 141px;
    }

    @include respond-to("md") {
        $padding-x: 30px;
        $gutter: 20px;
        $total-cols: 3;
        padding: 30px $padding-x 141px;
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

.text {
    text-align: left;

    &__name {
        margin: 0;
        font-size: 34px;
        line-height: 50px;
    }

    &__id {
        margin: 0;
        font-weight: 400;
        line-height: 20px;

        span {
            font-weight: 700;
        }
    }
}
</style>
