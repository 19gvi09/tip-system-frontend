<template>
    <div class="wrapper">
        <img class="img" src="../../assets/phone-img-1.png" alt="img">
        <h2 class="title">Чаевые по QR-коду</h2>
        <p class="text">Создать страницу для чаевых может кто угодно: сервис работает не только с бизнесом</p>
        <button class="button">
            Зарегистрироваться
            <img src="../../assets/arrow-white.svg" alt="arrow">
        </button>
    </div>
</template>

<script>
export default {
    name: "HomePreview"
}
</script>

<style lang="scss" scoped>
.wrapper {
    box-shadow: $sh_arrow;
    background: $radial;
    color: $white1;

    @include respond-to("xs") {
        $padding-x: 6.5vw;
        $gutter: 20px;
        $total-cols: 3;
        padding: 43px $padding-x 71px;
    }

    @include respond-to("md") {
        $padding-x: 60px;
        $gutter: 20px;
        $total-cols: 3;
        padding: 43px $padding-x 71px;
    }
}

.img {
    width: 100%;
    max-width: 181px;
}

.title {
    margin: 30px 0 0 0;
    font-size: 36px;
    line-height: 45px;
    text-align: left;
}

.text {
    margin: 20px 0 0 0;
    text-align: left;
    font-size: 18px;
    line-height: 25px;
    font-weight: 400;
}

.button {
    margin: 35px 0 0 0;
    display: flex;
    outline: none;
    border: none;
    background: $purple1;
    color: $white1;
    box-shadow: $sh_btn;
    border-radius: 30px;
    padding: 14px 65px;
    font-size: 18px;
    line-height: 22px;
    font-weight: 700;
    cursor: pointer;

    &:active {
        background: $purple_dark1;
    }

    img {
        margin: 0 0 0 9px;
    }
}
</style>