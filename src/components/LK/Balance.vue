<template>
<!-- <div class="wrapper">
    <div class="row">
        
    </div>
</div> -->

<div class="main_balance">
            <div class="balance">
                <p>Баланс</p>
                <div class="value">
                    <p>1000Р</p>
                </div>
            </div>
            <div class="earned">
                <p>Заработано</p>
                <div class="value1">
                    <p>1950Р</p>
                </div>
            </div>
             <div class="withdrawn">
                <p>Выведено</p>
                <div class="value2">
                    <p>1950Р</p>
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
@include respond-to("xs") {
    $padding-x: 25px !global;
    $gutter: 20px !global;
    $total-cols: 3 !global;
}

@include respond-to("md") {
    $padding-x: 30px !global;
    $gutter: 20px !global;
    $total-cols: 3 !global;
}

.main_balance {
    display: flex;
    padding: 23px $padding-x;
    justify-content: space-between;
    flex-direction: column;
    width: calc((100vw - 3 * $padding-x + $gutter) / $total-cols * 2 - $gutter);
    margin: -65px auto;
    background-color: #F5F5FA;
    border-radius: 20px;

    .balance {
        font-family: Lato, sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
        color: #0D0D0D;
        display: flex;
        justify-content: space-between;
        width: 98%;
    }
       .earned {
        font-family: Lato, sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
        color: #0D0D0D;
        display: flex;
        justify-content: space-between;
        width: 98%;
    }
     .withdrawn {
        font-family: Lato, sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
        color: #0D0D0D;
        display: flex;
        justify-content: space-between;
        width: 98%;
    }
}

.value {
    font-family: Lato, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #0D0D0D;
}

.value1 {
    font-family: Lato, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #0D0D0D;
}

.value2 {
    font-family: Lato, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #0D0D0D;
}
// .wrapper {
//     padding: 20px $padding-x;
//     box-shadow: $sh_light;
// }

// .row {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
// }
</style>
