<template>
    <div class="wrapper">
        <div class="block">
            <div class="row">
                <h4 class="title">{{ data.title }}</h4>
            </div>
            <div class="content">
                <transaction class="row" v-for="item in data.items" :key="item.id" :data="item" />
                <div class="row" v-if="this.$route.name === 'LK'">
                    <button class="button" @click="this.$router.push('/lk/history')">
                        Посмотреть всё
                        <img src="../assets/arrow-purple.svg" alt="arrow">
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Transaction from './Transaction.vue'

export default {
    name: "Transactions",
    components: {
        Transaction
    },
    props: {
        data: Object
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
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
