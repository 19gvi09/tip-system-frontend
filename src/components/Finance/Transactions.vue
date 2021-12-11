<template>
<div class="wrapper bal">
    <div class="block">
        <div class="row2">
            <p>Финансовые операции</p>
        </div>
        <div class="row">
            <h3 class="text"><img src="../../assets/Vector6.png" alt="" class="image">
                +350 ₽</h3>
            <h3 class="amount">14/08/2021</h3>
        </div>
        <div class="row">
            <h3 class="text"><img src="../../assets/Vector6.png" alt="" class="image">
                +350 ₽</h3>
            <h3 class="amount">14/08/2021</h3>
        </div>
        <div class="row">
            <h3 class="text"><img src="../../assets/Vector-down.png" alt="" class="image">-540</h3>
            <h3 class="amount">01/09/2021</h3>
        </div>
        <div class="row">
            <h3 class="text"><img src="../../assets/Vector-down.png" alt="" class="image">-540</h3>
            <h3 class="amount">01/09/2021</h3>
        </div>
         <div class="row">
            <h3 class="text"><img src="../../assets/Vector6.png" alt="" class="image">+600</h3>
            <h3 class="amount">25/09/2021</h3>
        </div>
        <div class="row">
            <h3 class="text"><img src="../../assets/Vector6.png" alt="" class="image">+350</h3>
            <h3 class="amount">14/08/2021</h3>
        </div>
         <div class="row">
            <h3 class="text"><img src="../../assets/Vector6.png" alt="" class="image">+350</h3>
            <h3 class="amount">14/08/2021</h3>
        </div>
        <div class="row">
            <h3 class="text"><img src="../../assets/Vector-down.png" alt="" class="image">-540</h3>
            <h3 class="amount">01/09/2021</h3>
        </div>
        <div class="row">
            <h3 class="text"><img src="../../assets/Vector-down.png" alt="" class="image">-540</h3>
            <h3 class="amount">01/09/2021</h3>
        </div>
        <div class="row">
            <h3 class="text"><img src="../../assets/Vector6.png" alt="" class="image">+600</h3>
            <h3 class="amount">25/09/2021</h3>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "Transactions"
}
</script>

<style lang="scss" scoped>
.image {
    padding: 10px;
}

.wrapper {
    @include respond-to("xs") {
        $padding-x: 25px;
        $gutter: 20px;
        $total-cols: 3;
        padding: 0 $padding-x;
    }

    @include respond-to("md") {
        $padding-x: 30px;
        $gutter: 20px;
        $total-cols: 3;
        padding: 0 $padding-x;
    }

    color: $black;
}

.block {
    padding: 25px 20px;
    background: $white1;
    box-shadow: $sh_arrow;
    border-radius: 20px;
}

.row2 {
    text-align: left;
    font-family: Lato, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    margin-top:-21px;
}

.row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 31px;

    &:last-child {
        margin: 0;
    }
}

.text {
    margin: 0;
    font-family: Lato, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
}

.amount {
    margin: 0;
    font-family: Lato, sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 150%;
    /* or 24px */

    display: flex;
    align-items: center;
    text-align: right;
}
</style>
