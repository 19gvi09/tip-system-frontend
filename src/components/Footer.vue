<template>
    <div class="wrapper">
        <h2 class="title">Контакты</h2>
        <div class="socials">
            <a href="https://www.vk.com" target="_blank"><img src="../assets/vk-logo.svg" alt="vk" class="socials__link"></a>
            <a href="https://ru.linkedin.com" target="_blank"><img src="../assets/linkedin-logo.svg" alt="In" class="socials__link"></a>
            <a href="https://www.facebook.com" target="_blank"><img src="../assets/fb-logo.svg" alt="fb" class="socials__link"></a>
            <a href="https://www.instagram.com" target="_blank"><img src="../assets/instagram-logo.svg" alt="inst" class="socials__link"></a>
        </div>
        <a class="phone" href="tel:+74994907746">+7 (499) 490-77-46</a>
        <p class="text">Техподдержка</p>
        <a class="mail" href="mailto:support@diforta.com">support@diforta.com</a>
        <button class="button">Наши вакансии</button>
        <h6 class="copyright">© 2021 Xforta Financial Technologies Ltd. Все права защищены.</h6>
    </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style lang="scss" scoped>
.wrapper {
    background: $purple4;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
    padding-bottom: 10px;
}

.title {
    margin: 0;
    font-size: 20px;
    line-height: 20px;
}

.socials {
    margin: 30px 0 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 205px;

    &__link {
        background: $purple2;
        border-radius: 50%;

        &:active {
            background: $purple_dark1;
        }
    }
}

.phone {
    margin: 40px 0 0;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    color: $grey;
    text-decoration: none;
}

.text {
    margin: 40px 0 0;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
}

.mail {
    margin: 10px 0 0;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    color: $grey;
    text-decoration: none;
}

.button {
    margin: 50px 0 0;
    outline: none;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    background: $white2;
    color: $purple2;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    padding: 10px 45px;
}

.copyright {
    margin: 70px 0 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
}
</style>