<template>
    <div>
        <div class="wrapper heading">
            <h1 v-if="this.$route.path === '/auth'" class="title">Авторизуйся</h1>
            <h1 v-else class="title">Зарегистрируйся</h1>
        </div>
        <div class="wrapper">
            <div class="row">
                <div class="links">
                    <router-link class="links__link" to="/auth">Войти</router-link> /
                    <router-link class="links__link" :to="'/register/'+type">Регистрироваться</router-link>
                </div>
            </div>
            <div class="row" v-if="this.$route.name === 'Register'">
                <div class="tabs">
                    <button class="tabs__tab" :class="{active: (type === 'personal')}" @click="Route('personal')">Для частных лиц</button>
                    <button class="tabs__tab" :class="{active: (type === 'business')}" @click="Route('business')">Для бизнеса</button>
                </div>
            </div>
            <div class="row" v-if="this.$route.name === 'Auth'">
                <div class="col">
                    <label class="label" for="login">E-mail / Forta id</label>
                    <input class="input" id="login" type="text" placeholder="mail@mail.com / 3456 3667 7488"/>
                </div>
            </div>
            <div class="row" v-if="this.$route.name === 'Register'">
                <div class="col">
                    <label class="label" for="name">Имя</label>
                    <input class="input" id="name" type="text" placeholder="Иван"/>
                </div>
            </div>
            <div class="row" v-if="this.$route.name === 'Register'">
                <div class="col">
                    <label class="label" for="surname">Фамилия</label>
                    <input class="input" id="surname" type="text" placeholder="Пантелеймонов"/>
                </div>
            </div>
            <div class="row" v-if="this.$route.name === 'Register'">
                <div class="col">
                    <label class="label" for="mail">E-mail</label>
                    <input class="input" id="mail" type="email" placeholder="mail@mail.com"/>
                </div>
            </div>
            <div class="row" v-if="this.$route.path === '/register/business'">
                <div class="col">
                    <label class="label" for="site">Сайт организации</label>
                    <input class="input" id="site" type="text" placeholder="https://fortapayments.com/"/>
                </div>
            </div>
            <div class="row">
                <div class="col" v-if="this.$route.path === '/register/business'">
                    <label class="label" for="company">Полное название организации</label>
                    <input class="input" id="company" type="text" placeholder="Xforta Financial Technologies Ltd"/>
                </div>
            </div>
            <div class="row" v-if="this.$route.path === '/register/business'">
                <div class="col" >
                    <label class="label" for="country">Страна</label>
                    <input class="input" id="country" type="text" placeholder="Россия"/>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <label class="label" for="password">Пароль</label>
                    <input class="input" id="password" type="password" placeholder="Пароль"/>
                </div>
            </div>
            <div class="row" v-if="this.$route.name === 'Register'">
                <div class="col">
                    <label class="label" for="repeat-password">Повтори пароль</label>
                    <input class="input" id="repeat-password" type="password" placeholder="Повтори пароль"/>
                </div>
            </div>
            <div class="row" v-if="this.$route.name === 'Register'">
                <div class="agreement">
                    <div class="checkbox" @click="isChecked = !isChecked">
                        <img v-if="isChecked" src="../assets/check.svg" alt="v">
                        <img v-else src="../assets/checkbox.svg" alt="v">
                    </div>
                    <p class="text">Подтверждаю, что я ознакомлен(а) с <a href="">пользовательским соглашением</a> и <a href="">правилами обработки персональных данных.</a></p>
                </div>
            </div>
            <div class="row" v-if="this.$route.name === 'Auth'">
                <div class="socials">
                    <p>Войти с помощью социальных сетей:</p>
                    <div class="icons">
                        <a href="#"><img src="../assets/google.svg" alt="google"></a>
                        <a href="#"><img src="../assets/telegram.svg" alt="google"></a>
                        <a href="#"><img src="../assets/facebook.svg" alt="google"></a>
                    </div>
                </div>
            </div>
            <div class="row">
                <button v-if="this.$route.name === 'Register'" class="button">Зарегистрироваться</button>
                <button v-if="this.$route.name === 'Auth'" class="button">Войти</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Form",
    data() {
        return {
            type: "personal",
            isChecked: false,
        }
    },
    methods: {
        Route(state) {
            this.type = state
            this.$router.push('/register/' + state)
        }
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
    color: $grey;

    @include respond-to("xs") {
        $padding-x: 25px;
        padding: 30px $padding-x 80px;
    }

    &.heading {
        background: $radial;
        box-shadow: $sh_arrow;
        color: $white1;

        @include respond-to("xs") {
            $padding-x: 25px;
            padding: 20px $padding-x 10px;
        }
    }
}

.title {
    margin: 0;
    font-size: 36px;
    line-height: 43px;
    text-align: left;
}

.row {
    display: flex;
    align-items: center;

    .col {
        display: flex;
        flex-direction: column;
        text-align: left;
        width: 100%;
    }
}

.links {
    margin: 0 auto;
    font-weight: 700;

    &__link {
        text-decoration: none;
        color: $grey;
    }

    .router-link-active {
        color: $purple1;
    }
}

.tabs {
    display: flex;
    justify-content: space-between;
    margin: 30px 0 0;
    font-weight: 400;
    width: 100%;

    &__tab {
        margin: 0;
        width: 152px;
        height: 50px;
        border-radius: 30px;
        outline: none;
        border: 1px solid $grey1;
        cursor: pointer;
        background: $white2;

        &.active {
            border-color: $purple1;
        }
    }
}

.label {
    font-weight: 300;
    margin: 30px 0 0 0;
}

.input {
    display: flex;
    width: 100%;
    border-radius: 10px;
    box-shadow: $sh_light;
    border: none;
    margin: 10px 0 0 0;
    padding: 15px 20px;
    box-sizing: border-box;

    &:focus {
        border: 1px solid $purple1;
        outline: none;
    }
}

.agreement {
    display: flex;
    align-items: flex-start;

    .checkbox {
        cursor: pointer;
    }

    .text {
        margin: 0 0 0 10px;
        text-align: left;

        a {
            text-decoration: none;
            color: $purple1;
        }
    }
}

.socials {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin: 45px 0 0 0;
    text-align: center;

    p {
        margin: 0;
        font-weight: 300;
    }

    .icons {
        display: flex;
        justify-content: space-between;
        width: 100%;
        max-width: 190px;
        margin: 20px 0 0 0;

        a {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: $white1;
        }
    }
}

.button {
    color: $white1;
    background: $purple1;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 30px;
    font-weight: 700;
    padding: 19px 0;
    margin: 59px 0 0 0;
    width: 100%;
}
</style>
