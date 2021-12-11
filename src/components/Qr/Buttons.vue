<template>
<div class="qr_download">Скачать QR - код</div>
<div class="or">или</div>
<div class="wrapper">
    <div class="block">

        <div class="row">
            <button class="button purple">Скопировать ссылку</button>
        </div>
        <!-- <div class="row">
            <a href="https://forta.tips/8641395">https://forta.tips/8641395</a> 
            </div> -->
    </div>
</div>

<div class="wrapper">
    <div class="block">
        <div class="row">
            <a href="https://forta.tips/8641395">https://forta.tips/8641395</a>

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
.or {
    padding-bottom: 10px;
}
.qr_download {
    padding-bottom: 20px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #562CD3;
}

.wrapper {
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
}

.button {
    outline: none;
    border: none;
    background: transparent;

    &.purple {
        color: $white1;
        background: $purple1;
        box-shadow: $sh_purple;
        padding: 9px 42px;
        border-radius: 30px;
        font-size: 16px;
        font-weight: 700;
        line-height: 22px;
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
