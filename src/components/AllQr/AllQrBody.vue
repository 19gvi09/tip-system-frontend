<template>
<div class="wrapper top">
    <div class="row">
        <img src="../../assets/QR-mini.png" alt="">
        <section class="qr__1">

            <a href="https://forta.tips/8641395" class="first__link">https://forta.tips/8641395</a>
            <p class="personal">Персональный</p>
        </section>
    </div>
</div>

<div class="wrapper">
    <div class="row">
        <img src="../../assets/QR-mini.png" alt="">
        <section class="qr__1">

            <a href="https://forta.tips/8641395" class="first__link">https://forta.tips/8768554</a>
            <p class="personal">Caffe Online</p>
        </section>
    </div>
</div>

<div class="wrapper">
    <div class="row">
        <img src="../../assets/QR-mini.png" alt="">
        <section class="qr__1">

            <a href="https://forta.tips/8641395" class="first__link">https://forta.tips/8645478</a>
            <p class="personal">Персональный</p>
        </section>
    </div>
</div>
</template>

<script>
export default {
    name: "AllQrBody"
}
</script>

<style lang="scss" scoped>
.personal {
    padding-left: 30px;
    margin-bottom: 40px;
    margin-top: 0;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 150%;
}

.first__link {
    padding-left: 30px;
    text-decoration: none;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
}

.qr__1 {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}
.top {
    margin-top: 12px;
}
.wrapper {
    .row {
        display: flex;
        justify-content: center;
    }

    p {
        display: flex;
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
