<template>
<div class="wrapper">
    <div class="row">
        <ul>
            <li> <a href=""> Требования к сайту</a></li>
            <li> <a href="">54-ФЗ</a></li>
            <li> <a href="">Договор на прием карт</a></li>
            <li> <a href="">Договор на фискализацию</a></li>
            <li> <a href="">Договор конфиденциальности</a></li>
            <li> <a href="">Политика конфиденциальности</a></li>
            <li> <a href="">Реквизиты</a></li>
            <li> <a href="">Как подключиться</a></li>
            <li> <a href="">Условия пользования</a></li>
        </ul>
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
    .row {
        display: flex;
        padding-bottom: 60px;

        justify-content: center;
        li {
            list-style-type: none;
            text-align: left;
            margin-top: 40px;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 19px;
            cursor: pointer;
            a {
                text-decoration: none;
            color: #333333;
            }
        }
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
