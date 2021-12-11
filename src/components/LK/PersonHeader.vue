<template>
    <div class="wrapper">
        <div class="row">
            <div class="text">
                <h4 class="text__ave">Привет,</h4>
                <h2 class="text__name">Иван Ковальников</h2>
                <h5 class="text__id">Твой <span>Forta id:</span> 7685 7588 4758</h5>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PersonHeader"
}
</script>

<style lang="scss" scoped>
.wrapper {
    @include respond-to("xs") {
        $padding-x: 25px;
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

    &__ave {
        margin: 0;
        font-size: 18px;
        font-weight: 700;
        line-height: 20px;
    }

    &__name {
        margin: 10px 0;
        font-size: 34px;
        line-height: 50px;
    }

    &__id {
        margin: 0;
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;

        span {
            font-weight: 700;
        }
    }
}

.user-name {
    font-style: normal;
    font-weight: 900;
    font-size: 36px;
    line-height: 43px;
    color: $white1;

    @include respond-to("xs") {
        $padding-x: 25px;
        $gutter: 20px;
        $total-cols: 3;
        width: calc((100vw - 1 * $padding-x + $gutter) / $total-cols * 2 - $gutter);
    }

    @include respond-to("md") {
        $padding-x: 30px;
        $gutter: 20px;
        $total-cols: 3;
        width: calc((100vw - 1 * $padding-x + $gutter) / $total-cols * 2 - $gutter);
    }
}

.greetings {
    text-align: left;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    color: $white1;

    @include respond-to("xs") {
        $padding-x: 25px;
        $gutter: 20px;
        $total-cols: 3;
        width: calc((100vw - 1 * $padding-x + $gutter) / $total-cols * 2 - $gutter);
    }

    @include respond-to("md") {
        $padding-x: 30px;
        $gutter: 20px;
        $total-cols: 3;
        width: calc((100vw - 1 * $padding-x + $gutter) / $total-cols * 2 - $gutter);
    }
}

.user-id {
    p {
        font-family: Lato, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        color: #FFFFFF;

    }

    b {
        font-family: Lato, sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
        color: #FFFFFF;
    }

    span {
        font-family: Lato, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        color: #FFFFFF;
    }
}
</style>
