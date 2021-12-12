<template>
<div class="wrapper">
    <div class="row">
        <ul>
            <li> <a href="">Торговый эквайринг</a></li>
        </ul>
    </div>
    <div class="row">
        <ul>
            <li> <a href="">Интернет-эквайринг</a></li>
        </ul>
    </div>

</div>
</template>

<script>
export default {
    name: "OurProductBody"
}
</script>

<style lang="scss" scoped>
.wrapper {
    @include respond-to("xs") {
        $padding-x: 0;
        $gutter: 20px;
        $total-cols: 3;
        padding: 0 $padding-x 22px;
        background-color: $purple3;
        text-align: left;
        padding-bottom: 80px
    }

    @include respond-to("md") {
        $padding-x: 0;
        $gutter: 20px;
        $total-cols: 3;
        padding: 0 $padding-x 22px;
        background-color: $purple3;
        padding-bottom: 80px;
    }

}
  .row:last-child {
        border-bottom: none;
    }
.row {
    display: flex;
    align-items: center;
    justify-content: left;
    border-bottom: 1px solid $purple2;
    margin: 0 30px;

    ul {
        margin: 0;
    }

    .row:last-child {

        border-bottom: none;
    }

    li {
        margin-left: -41px;

        a {
            text-decoration: none;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 73px;
            color: #333333;
        }

        list-style-type:none;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 73px;
        color: #333333;

    }
}
</style>
