<template>
    <div class="wrapper">
        <div class="block">
            <div class="row">
                <h4 class="title">Последние операции</h4>
            </div>
            <div class="content">
                <div class="row" v-for="item in history" :key="item.id">
                    <div class="row">
                        <img :src="require('../../assets/arrow-' + item.color + '.svg')" alt="arrow">
                        <p class="amount">{{ item.symbol + item.amount }} ₽</p>
                    </div>
                    <p class="date"><span class="time">{{ item.time }}</span>{{ item.date }}</p>
                </div>
                <div class="row">
                    <button class="button">
                        Посмотреть всё
                        <img src="../../assets/arrow-purple.svg" alt="arrow">
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "History",
    data() {
        return {
            history: [
                {
                    id: 1,
                    color: "green",
                    symbol: "+",
                    amount: 350,
                    date: "14/08/2021",
                    time: "11:20"
                },
                {
                    id: 2,
                    color: "red",
                    symbol: "-",
                    amount: 540,
                    date: "01/09/2021",
                    time: "13:40"
                },
                {
                    id: 3,
                    color: "green",
                    symbol: "+",
                    amount: 600,
                    date: "25/09/2021",
                    time: "22:32"
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
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

.block {
    padding: 19px 20px 15px;
    background: $linear;
    border-radius: 20px;
}

.row {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.content {
    >.row {
        border-bottom: 1px solid $grey1;

        &:last-child,
        &:nth-last-child(2)  {
            border: none;
        }
    }
}

.title {
    margin: 0 0 19px 0;
    font-size: 18px;
    line-height: 22px;
    color: $grey;
}

.amount {
    margin: 0 0 0 10px;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
}

.date {
    margin: 15px 0;
    font-size: 16px;
    font-weight: 400;

    .time {
        color: $grey2;
        margin: 0 7px 0 0;
        font-weight: 300;
    }
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
</style>
