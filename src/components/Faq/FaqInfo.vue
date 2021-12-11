<template>
<div class="wrapper">
    <div class="block">
        <div class="row" @click="isOpen = !isOpen">
            <h4 class="title">Кто такие Forta Payments?</h4>
            <img :class="{reverse: isOpen}" src="../../assets/arrow-sm.svg" alt="arrow">
        </div>
        <div class="content" :class="{hidden: !isOpen}">
            <div class="row">
                Forta Payment - это финтех-платформа, которая стремится упростить финансовую отрасль, предлагая инновационные решения. Наши услуги включают личные и бизнес-счета, прием и обработку онлайн-транзакций, международные платежи, платежные карты и многое другое.
            </div>
        </div>
    </div>

</div>

<div class="wrapper1">
    <div class="block">
        <div class="row" @click="isOpen = !isOpen">
            <h4 class="title">Как мы работаем?</h4>
            <img :class="{reverse: isOpen}" src="../../assets/arrow-sm.svg" alt="arrow">
        </div>
        <div class="content" :class="{hidden: !isOpen}">
            <div class="row">
                Forta Payment - это финтех-платформа, которая стремится упростить финансовую отрасль, предлагая инновационные решения. Наши услуги включают личные и бизнес-счета, прием и обработку онлайн-транзакций, международные платежи, платежные карты и многое другое.
            </div>
        </div>
    </div>

</div>

<div class="wrapper2">
    <div class="block">
        <div class="row" @click="isOpen = !isOpen">
            <h4 class="title">Не работает, что делать?</h4>
            <img :class="{reverse: isOpen}" src="../../assets/arrow-sm.svg" alt="arrow">
        </div>
        <div class="content" :class="{hidden: !isOpen}">
            <div class="row">
                Forta Payment - это финтех-платформа, которая стремится упростить финансовую отрасль, предлагая инновационные решения. Наши услуги включают личные и бизнес-счета, прием и обработку онлайн-транзакций, международные платежи, платежные карты и многое другое.
            </div>
        </div>
    </div>

</div>
</template>

<script>
export default {
    name: "FaqInfo",
    data() {
        return {

            isOpen: true,
        }
    },
}
</script>

<style lang="scss" scoped>
.wrapper {
    @include respond-to("xs") {
        $padding-x: 6.5vw;
        $gutter: 20px;
        $total-cols: 3;
        padding: 40px $padding-x;
        padding-bottom: 20px;
    }

    @include respond-to("md") {
        $padding-x: 30px;
        $gutter: 20px;
        $total-cols: 3;
        padding: 40px $padding-x;
        padding-bottom: 20px;

    }

    color: $grey;
}

.wrapper1 {
    @include respond-to("xs") {
        $padding-x: 6.5vw;
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

    color: $grey;
}

.wrapper2 {
    @include respond-to("xs") {
        $padding-x: 6.5vw;
        $gutter: 20px;
        $total-cols: 3;
        padding: 20px $padding-x;
        padding-bottom: 40px;

    }

    @include respond-to("md") {
        $padding-x: 30px;
        $gutter: 20px;
        $total-cols: 3;
        padding: 20px $padding-x;
        padding-bottom: 40px;

    }

    color: $grey;
}

.block {
    background: $linear;
    border-radius: 20px;
    box-shadow: $sh_arrow;
    padding: 9px 20px;
}

.row {
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

}

.title {
    margin: 0;
    font-size: 18px;
    line-height: 22px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
}

.content {
    .row {
        justify-content: flex-start;
        text-align: left;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 180%;
    }
}


.type {
    margin: 0 10px 0 0;
    font-size: 16px;
    line-height: 19px;
}

.value {
    margin: 0;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
}

.button {
    border: none;
    padding: 0;
    outline: none;
    background: transparent;
    margin: 0 auto;
    color: $purple1;
    cursor: pointer;
}

.hidden {
    display: none;
}

.reverse {
    transform: scaleY(-1);
}
</style>
