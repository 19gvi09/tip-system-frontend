<template>
<div class="wrapper">
    <div class="row">
        Требования к сайту
    </div>
    <div class="row">
        54-ФЗ
    </div>
    <div class="row">
        Договор на прием карт
    </div>
    <div class="row">
        Договор на фискализацию
    </div>
    <div class="row">
        Договор конфиденциальности
    </div>
    <div class="row">
        Политика конфиденциальности
    </div>
    <div class="row">
        Реквизиты
    </div>
    <div class="row">
        Как подключиться
    </div>
    <div class="row">
        Условия пользования
    </div>
</div>
</template>

<script>
export default {
    name: "DocBody"
}
</script>

<style lang="scss" scoped>
.wrapper {
    .row:last-child {
        border-bottom: none;
    }

    .row {
        display: flex;
        padding: 20px 0;
        justify-content: left;
        padding-bottom: 1px solid;
        border-bottom: 1px solid $purple2;
        text-align: left;
    }

    @include respond-to("xs") {
        $padding-x: 6.5vw;
        padding: 30px $padding-x 82px;
    }
}
</style>
