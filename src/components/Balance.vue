<template>
    <div class="wrapper">
        <div class="block">
            <div class="row">
                <h3 class="text">Баланс</h3>
                <h3 class="amount">1000 ₽</h3>
            </div>
            <div class="row">
                <h3 class="text">Заработано</h3>
                <h3 class="amount">1950 ₽</h3>
            </div>
            <div class="row">
                <h3 class="text">Выведено</h3>
                <h3 class="amount">950 ₽</h3>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Balance"
}
</script>

<style lang="scss" scoped>
.wrapper {
    color: $grey;
}

.block {
    padding: 25px 20px;
    background: $white1;
    box-shadow: $sh_arrow;
    border-radius: 20px;
}

.row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0;
    border-bottom: 1px solid $grey1;

    &:first-child {
        padding: 0 0 15px;
    }

    &:last-child {
        padding: 15px 0 0;
        border: none;
    }
}

.text {
    margin: 0;
    font-size: 16px;
    line-height: 19px;
}

.amount {
    margin: 0;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
}
</style>
