<template>
    <div>
        <div class="row">
            <img :src="require('../assets/arrow-' + data.color + '.svg')" alt="arrow">
            <p class="amount">{{ data.symbol + data.amount }} ₽</p>
        </div>
        <p class="date"><span class="time">{{ data.time }}</span>{{ data.date }}</p>
    </div>
</template>

<script>
export default {
    name: "Transaction",
    props: {
        data: Object,
    }
}
</script>

<style lang="scss" scoped>
.row {
    display: flex;
    align-items: center;
    justify-content: space-between;
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
</style>
