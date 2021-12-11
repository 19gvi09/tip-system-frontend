<template>
<div class="wrapper">
    <div class="row">
        <p>Покажите QR-код или отправьте ссылку,
            по которой можно оставить чаевые</p>
    </div>
</div>

<div class="wrapper1">
    <div class="row">
        <img src="../../assets/QR.png" alt="">
    </div>
</div>
</template>

<script>
export default {
    name: "QrBody"
}
</script>

<style lang="scss" scoped>
.wrapper {
    .row {
        display: flex;
        justify-content: center;
    }

    p {
        display: flex;
        justify-content: center;
        align-items: center;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 180%;
        padding-bottom: 0;
    }

    @include respond-to("xs") {
        $padding-x: 25px;
        $gutter: 20px;
        $total-cols: 3;
        padding: 30px $padding-x 10px;
    }

    @include respond-to("md") {
        $padding-x: 30px;
        $gutter: 20px;
        $total-cols: 3;
        padding: 30px $padding-x 10px;
    }

}

.wrapper1 {
    padding: 10px;
    padding-bottom: 40px;
}

.Download__qr {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    color: #562CD3;
}

</style>
