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
    padding: 0 40px;
    padding-bottom: 100px;

    .row:last-child {
        border-bottom: none;
    }

    .row {
        display: flex;
        padding-bottom: 40px;
        padding: 40px;
        justify-content: left;
        padding-bottom: 1px solid;
        border-bottom: 1px solid $purple2;
    }

    @include respond-to("xs") {
        $padding-x: 25px;
        $gutter: 20px;
        $total-cols: 3;
    }

    @include respond-to("md") {
        $padding-x: 30px;
        $gutter: 20px;
        $total-cols: 3;
    }
}
</style>
