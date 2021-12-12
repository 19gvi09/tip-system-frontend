<template>
    <div>
        <div class="wrapper heading">
            <h1 class="title">QR-код и ссылка</h1>
        </div>
        <div class="wrapper">
            <div>
                <div class="row" v-for="item in codes" :key="item.id">
                    <img class="img" src="../assets/QR-mini.png" alt="QR" @click="$router.push({ name: 'Code', params: { id: item.id } })">
                    <div class="col">
                        <a class="link" :href="'https://forta.tips/'+'item.id'">https://forta.tips/{{ item.id }}</a>
                        <p class="name">{{ item.name }}</p>
                    </div>
                </div>
            </div>
            <button class="button">
                <img class="button__icon" src="../assets/plus-icon.svg" alt="plus">
                Сгенерировать новый код
            </button>
            <p class="hint">Зажми ненужный QR-код, чтобы удалить</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'QR',
    data() {
        return {
            codes: [
                {
                    id: 8641395,
                    name: "Персональный"
                },
                {
                    id: 8768554,
                    name: "Caffe Online"
                },
                {
                    id: 8645478,
                    name: "Персональный"
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
    @include respond-to("xs") {
        $padding-x: 25px;
        padding: 40px $padding-x 80px;
    }

    &.heading {
        background: url('../assets/qr-header.png'), $radial;
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
    justify-content: flex-start;
    align-items: flex-start;
    margin: 30px 0 0 0;

    &:first-child {
        margin: 0;
    }

    .img {
        width: 100%;
        max-width: 95px;
        cursor: pointer;
    }

    .col {
        margin: 0 0 0 20px;
        text-align: left;
    }
}

.link {
    margin: 0;
    color: $grey;
    text-decoration: none;
    line-height: 20px;
    font-weight: 700;
}

.name {
    margin: 0;
    color: $grey;
    line-height: 20px;
    font-weight: 300;
}

.button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    outline: none;
    border: none;
    border-radius: 20px;
    background: $white2;
    color: $grey2;
    padding: 28px;
    margin: 30px 0 0 0;
    font-weight: 300;
    cursor: pointer;
}

.hint {
    margin: 30px 0 0 0;
    color: $grey2;
    line-height: 30px;
    font-weight: 300;
}
</style>
