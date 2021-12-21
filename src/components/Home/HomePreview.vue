<template>
    <div class="wrapper">
        <img class="img" src="../../assets/phone-img-1.png" alt="img">
        <h2 class="title">Чаевые<br>по QR-коду</h2>
        <p class="text">Создать страницу для чаевых может кто угодно: сервис работает не только с бизнесом</p>
        <button class="button" @click="this.$router.push('/register/personal')">
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
@include respond-to("xs") {

}
@include respond-to("sm") {
    .button {
        display: flex;
        justify-content: center;
    }
}
@include respond-to("md") {
    
}
@include respond-to("lg") {

}
@include respond-to("xl") {

}

.wrapper {
    box-shadow: $sh_arrow;
    background: $radial;
    color: $white1;
    padding-top: 40px;
    padding-bottom: 60px;
}

.img {
    margin: 0 0 0 auto;
    width: 100%;
    max-width: 181px;
}

.title {
    margin: 0;
    font-size: 36px;
    line-height: 45px;
    text-align: left;
}

.text {
    margin: 20px 0 0 0;
    max-width: 630px;
    text-align: left;
    font-size: 18px;
    line-height: 25px;
    font-weight: 400;
}

.button {
    margin: 35px 0 0 0;
    padding: 14px 0;
    outline: none;
    border: none;
    background: $purple1;
    color: $white1;
    box-shadow: $sh_btn;
    border-radius: 30px;
    font-size: 18px;
    line-height: 22px;
    font-weight: 700;
    cursor: pointer;
    width: 100%;
    max-width: 325px;

    &:active {
        background: $purple_dark1;
    }

    img {
        margin: 0 0 0 9px;
    }
}
</style>