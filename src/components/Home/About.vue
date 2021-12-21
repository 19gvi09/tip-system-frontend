<template>
    <div class="wrapper">
        <div class="container">
            <div class="card" v-for="(item, index) in cards" :key="item">
                <h2 class="number">{{ index + 1 }}</h2>
                <h4 class="title">{{ item.title }}</h4>
                <p class="text">{{ item.text }}</p>
            </div>
        </div>
        <h2 class="title">Как работает сервис?</h2>
        <div class="container">
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
        <button class="button purple">Попробовать</button>
    </div>
</template>

<script>
export default {
    name: "About",
    data() {
        return {
            cards: [
                {
                    title: "Клиенту",
                    text: "Клиенту не нужно устанавливать отдельное приложение, достаточно отсканировать QR-код или пройти по ссылке"
                },
                {
                    title: "Бизнесу",
                    text: "Можно увидеть все чаевые, которые получили сотрудники"
                },
                {
                    title: "Всем",
                    text: "Увеличение чаевых до 30%"
                },
            ]
        }
    }
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
    color: $grey;
}

.container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.card {
    margin: 40px 0 0 0;
    background: $white2;
    width: 100%;
    max-width: 325px;
    border-radius: 20px;
    padding: 30px 20px;
    box-sizing: border-box;

    .number {
        margin: 0;
        color: $purple2;
        font-size: 96px;
        line-height: 120px;
        font-weight: 300;
    }

    .title {
        margin: 10px 0 30px;
    }
}

.title {
    margin: 80px 0 0 0;
    font-size: 30px;
    line-height: 50px;
}

.block {
    margin: 40px 0 0 0;
    width: 100%;
    max-width: 375px;

    .img {
        width: 100%;
        max-width: 375px;
    }

    .text {
        margin: 0;
        line-height: 30px;
        font-weight: 300;
    }
}

.button {
    outline: none;
    border: none;
    background: transparent;
    cursor: pointer;
    margin: 80px 0;

    &.purple {
        color: $white1;
        background: $purple1;
        box-shadow: $sh_purple;
        padding: 19px 106px;
        border-radius: 30px;
        font-size: 16px;
        font-weight: 700;
        line-height: 22px;
    }
}
</style>