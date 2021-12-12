<template>
    <div class="wrapper">
        <div class="container">

        </div>
        <div class="container">
            <h2 class="title">Как работает сервис?</h2>
            <div class="block">
                <img src="../../assets/phone-img-2.png" alt="img" class="img">
                <p class="text">1. Ты регистрируешь свое заведение или себя, мы создаем для тебя личный кабинет и Forta id.</p>
            </div>
            <div class="block">
                <img src="../../assets/phone-img-3.png" alt="img" class="img">
                <p class="text">2. Ты можешь создать столько QR-кодов, сколько захочешь. Можно создавать их только для себя или для всех сотрудников.</p>
            </div>
            <div class="block">
                <img src="../../assets/phone-img-4.png" alt="img" class="img">
                <p class="text">3. Для того что бы получить чаевые или донаты, нужно просто показать любым способом QR код.</p>
            </div>
            <div class="block">
                <img src="../../assets/phone-img-5.png" alt="img" class="img">
                <p class="text">4. Для того что бы получить чаевые или донаты, нужно просто показать любым способом QR код.</p>
            </div>
            <div class="block">
                <img src="../../assets/phone-img-6.png" alt="img" class="img">
                <p class="text">5.  В любой момент можно вывести деньги на самые популярные платежные системы. А можно расплачиваться нашим электронным кошельком.</p>
            </div>
        </div>
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

.block {
    width: 100%;
    max-width: 375px;

    .img {
        width: 100%;
        max-width: 375px;
    }

    .text {
        line-height: 30px;
        font-weight: 300;
    }
}
</style>