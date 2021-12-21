<template>
    <div class="wrapper">
        <div class="block">
            <div class="row">
                <button class="button purple">Перевести сумму</button>
            </div>
            <div class="row">
                <button class="button text">Смотреть QR-коды</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Buttons",
}
</script>

<style lang="scss" scoped>
.row {
    display: flex;
    justify-content: center;
}

.button {
    outline: none;
    border: none;
    background: transparent;
    cursor: pointer;

    &.purple {
        color: $white1;
        background: $purple1;
        box-shadow: $sh_purple;
        padding: 19px 88px;
        border-radius: 30px;
        font-size: 16px;
        font-weight: 700;
        line-height: 22px;
    }

    &.text {
        margin: 30px 0 0;
        color: $purple1;
        font-size: 16px;
        font-weight: 700;
        line-height: 19px;
    }
}
</style>