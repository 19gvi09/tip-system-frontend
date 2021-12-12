<template>
    <div class="wrapper">
        <h2 class="title">Как работает сервис?</h2>
        <img src="../../assets/phone-img-2.png" alt="img" class="img">
        <p class="text">1. Ты регистрируешь свое заведение или себя, мы создаем для тебя личный кабинет и Forta id.</p>
        <img src="../../assets/phone-img-3.png" alt="img" class="img">
        <p class="text">2. Ты можешь создать столько QR-кодов, сколько захочешь. Можно создавать их только для себя или для всех сотрудников.</p>
        <img src="../../assets/phone-img-4.png" alt="img" class="img">
        <p class="text">3. Для того что бы получить чаевые или донаты, нужно просто показать любым способом QR код.</p>
        <img src="../../assets/phone-img-5.png" alt="img" class="img">
        <p class="text">4. Для того что бы получить чаевые или донаты, нужно просто показать любым способом QR код.</p>
    </div>
</template>

<script>
export default {
    name: "About",
}
</script>

<style lang="scss" scoped>
.wrapper {
    color: $grey;

    @include respond-to("xs") {
        $padding-x: 6.5vw;
        $gutter: 20px;
        $total-cols: 3;
        padding: 30px $padding-x 212px;
    }

    @include respond-to("md") {
        $padding-x: 60px;
        $gutter: 20px;
        $total-cols: 3;
        padding: 30px $padding-x 212px;
    }
}

.title {
    font-size: 32px;
    line-height: 50px;
}

.img {
    width: 100%;
    max-width: 376px;
}

.text {
    font-size: 16px;
    line-height: 30px;
    font-weight: 300;

    &:nth-child(1) {
        margin: 0 0 93px 0;
    }

    &:nth-child(2) {
        margin: 50px 0 63px 0;
    }

    &:nth-child(3) {
        margin: 41px 0 39px 0;
    }

    &:nth-child(3) {
        margin: 13px 0 0 0;
    }
}
</style>