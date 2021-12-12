<template>
    <div>
        <div class="wrapper">
            <h1 class="title">QR-код и ссылка</h1>
        </div>
        <div class="wrapper bottom">
            <p class="text">Покажите QR-код или отправьте ссылку, по которой можно оставить чаевые</p>
            <img class="image" src="../assets/QR.png" alt="QR">
            <div class="buttons">
                <button class="button text">Скачать QR-код</button>
                <p class="span">или</p>
                <button class="button purple">Скопировать ссылку</button>
                <a class="link" :href="'https://forta.tips/'+this.$route.params.id">https://forta.tips/{{ this.$route.params.id }}</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Code',
    props: {

    }
}
</script>

<style lang="scss" scoped>
.wrapper {
    color: $grey;
    background: $radial;
    box-shadow: $sh_arrow;

    @include respond-to("xs") {
        $padding-x: 6.5vw;
        $gutter: 20px;
        $total-cols: 3;
        padding: 20px $padding-x 10px;
    }

    @include respond-to("md") {
        $padding-x: 60px;
        $gutter: 20px;
        $total-cols: 3;
        padding: 20px $padding-x 10px;
    }

    &.bottom {
        padding-top: 40px;
        padding-bottom: 80px;
        background: transparent;
    }
}

.title {
    font-size: 36px;
    line-height: 43px;
    color: $white1;
    text-align: left;
}

.text {
    font-weight: 300;
    font-size: 16px;
    line-height: 30px;
}

image {
    width: 100%;
    max-width: 245px;
    margin: 30px 0 0 0;
}

.button {
    outline: none;
    border: none;
    padding: none;
    background: transparent;
    cursor: pointer;

    &.text {
        margin: 26px 0 0 0;
        color: $purple1;
        line-height: 20px;
        font-weight: 700;
    }

    &.purple {
        background: $purple1;
        color: $white1;
        border-radius: 30px;
        padding: 10px 45px;
        font-weight: 700;
        line-height: 19px;
        margin: 20px 0 0 0;
    }
}

.span {
    margin: 20px 0 0 0;
}

.link {
    display: block;
    text-decoration: none;
    color: $grey;
    font-weight: 700;
    margin: 20px 0 0 0;
}
</style>
