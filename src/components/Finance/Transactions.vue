<template>
<div class="wrapper bal">
    <div class="block">
        <div class="row2">
            <p>Финансовые операции</p>
        </div>
        <div class="row" v-for="item in history" :key="item.id">
                <img :src="require('../../assets/arrow-' + item.color + '.svg')" alt="arrow">
                <p class="amount">{{ item.symbol + item.amount }} ₽</p>
            <p class="date"><span class="time">{{ item.time }}</span>{{ item.date }}</p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "Transactions",
    data() {
        return {
            // По аналогии добавляешь в массив объекты с данными
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
                    color: "green",
                    symbol: "+",
                    amount: 350,
                    date: "14/08/2021",
                    time: "13:40"
                },
                {
                    id: 3,
                    color: "red",
                    symbol: "-",
                    amount: 540,
                    date: "01/09/2021",
                    time: "22:32"
                },
                {
                    id: 4,
                    color: "red",
                    symbol: "-",
                    amount: 540,
                    date: "01/09/2021",
                    time: "22:32"
                },
                {
                    id: 5,
                    color: "red",
                    symbol: "-",
                    amount: 140,
                    date: "04/09/2021",
                    time: "20:32"
                },
                {
                    id: 6,
                    color: "green",
                    symbol: "+",
                    amount: 5440,
                    date: "14/09/2021",
                    time: "00:32"
                },
            ]
        }
    }
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

    color: $grey;
}

.block {
    padding: 25px 20px;
    background: $white1;
    box-shadow: $sh_arrow;
    border-radius: 20px;
}

.row2 {
    text-align: left;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    margin-top:-21px;
    padding-bottom: 17px;
}

.row {
    display: flex;
    align-items: center;
    padding: 15px 0;
    justify-content: start;
    border-bottom: 1px solid #E6E6E6;
    &:last-child {
        margin: 0;
    }
}

.amount {
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    padding: 0 10px;
}

.date {
    margin: 15px 0;
    font-size: 16px;
    font-weight: 400;
    margin-left: 30%;
    .time {
        color: $grey2;
        margin: 0 7px 0 0;
        font-weight: 300;
    }
}
</style>
