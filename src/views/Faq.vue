<template>
    <div>
        <div class="wrapper header">
            <h1>Частые вопросы</h1>
        </div>
        <div class="wrapper">
            <div class="block">
                <div class="row" @click="isFirst = !isFirst">
                    <h4 class="title">Кто такие Forta Payments?</h4>
                    <img :class="{reverse: isFirst}" src="../assets/arrow-sm.svg" alt="arrow">
                </div>
                <div class="content" :class="{hidden: !isFirst}">
                    <div class="row">
                        Forta Payment - это финтех-платформа, которая стремится упростить финансовую отрасль, предлагая инновационные решения. Наши услуги включают личные и бизнес-счета, прием и обработку онлайн-транзакций, международные платежи, платежные карты и многое другое.
                    </div>
                </div>
            </div>
            <div class="block">
                <div class="row" @click="isSecond = !isSecond">
                    <h4 class="title">Как мы работаем?</h4>
                    <img :class="{reverse: isSecond}" src="../assets/arrow-sm.svg" alt="arrow">
                </div>
                <div class="content" :class="{hidden: !isSecond}">
                    <div class="row">
                        Forta Payment - это финтех-платформа, которая стремится упростить финансовую отрасль, предлагая инновационные решения. Наши услуги включают личные и бизнес-счета, прием и обработку онлайн-транзакций, международные платежи, платежные карты и многое другое.
                    </div>
                </div>
            </div>
            <div class="block">
                <div class="row" @click="isThird = !isThird">
                    <h4 class="title">Не работает, что делать?</h4>
                    <img :class="{reverse: isThird}" src="../assets/arrow-sm.svg" alt="arrow">
                </div>
                <div class="content" :class="{hidden: !isThird}">
                    <div class="row">
                        Forta Payment - это финтех-платформа, которая стремится упростить финансовую отрасль, предлагая инновационные решения. Наши услуги включают личные и бизнес-счета, прием и обработку онлайн-транзакций, международные платежи, платежные карты и многое другое.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Faq',
    data() {
        return {
            isFirst: false,
            isSecond: false,
            isThird: false,
        }
    },
}
</script>

<style lang="scss" scoped>
.wrapper {
    @include respond-to("xs") {
        $padding-x: 6.5vw;
        padding: 40px $padding-x 80px;
    }

    @include respond-to("md") {
        $padding-x: 30px;
        padding: 40px $padding-x 80px;

    }

    color: $grey;

    &.header {
        background: $radial;
        box-shadow: $sh_arrow;
        color: $white1;
        text-align: left;
        padding-top: 20px;
        padding-bottom: 10px;

        h1 {
            margin: 0;
            font-weight: 900;
            font-size: 36px;
            line-height: 50px;
        }
    }
}

.block {
    background: $linear;
    border-radius: 20px;
    box-shadow: $sh_arrow;
    padding: 9px 20px;
    margin: 0 0 20px;

    >.row {
        cursor: pointer;
    }

    &:last-child {
        margin: 0;
    }
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
        line-height: 180%;
    }
}


.type {
    margin: 0 10px 0 0;
    line-height: 19px;
}

.hidden {
    display: none;
}

.reverse {
    transform: scaleY(-1);
}
</style>
