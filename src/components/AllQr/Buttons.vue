<template>
<div class="wrapper">

    <div class="row">

        <button class="button purple"><img src="../../assets/PlusButton.png" alt="">
            <div class="text">Сгенеррировать новый код</div>
        </button>
    </div>
</div>
<div class="wrapper">
    <div class="block">
        <div class="row">
            <p>Зажми ненужный QR-код, чтобы удалить</p>

        </div>

    </div>
</div>
</template>

<script>
export default {
    name: "Buttons",
}
</script>

<style lang="scss" scoped>
.text {
    padding-top: 6px;
    padding-left: 21px;

}

.wrapper {
    p {
        margin-top: 0;
        padding-top: 0;
        padding-bottom: 40px;
    }

    @include respond-to("xs") {
        $padding-x: 6.5vw;
        $gutter: 20px;
        $total-cols: 3;
        padding: 20px $padding-x;
    }

    @include respond-to("md") {
        $padding-x: 30px;
        $gutter: 20px;
        $total-cols: 3;
        padding: 20px $padding-x;
    }
}

.row {
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 180%;
        text-align: center;
        color: #808080;
    }
}

.button {
    outline: none;
    border: none;
    background: transparent;
    margin-left: 0;
    display: inline-block;
    cursor: pointer;

    &.purple {
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 150%;
        background: #F9F9FC;
        width: 325px;
        height: 95px;
        border-radius: 20px;
        display: flex;
        padding: 30px;
        align-self: center;
        justify-content: center;
        margin-bottom: 0
    }

    &.text {
        margin: 30px 0 0;
        color: $purple1;
        font-size: 16px;
        font-weight: 700;
        line-height: 19px;
    }
}
</style>
