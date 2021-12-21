<template>
    <div class="wrapper">
        <div class="block">
            <div class="row" @click="isOpen = !isOpen">
                <h4 class="title">Информация о профиле</h4>
                <img :class="{reverse: isOpen}" src="../../assets/arrow-sm.svg" alt="arrow">
            </div>
            <div class="content" :class="{hidden: !isOpen}">
                <div class="row">
                    <h3 class="type">Статус:</h3>
                    <p class="value">{{info.status}}</p>
                </div>
                <div class="row">
                    <h3 class="type">Имя:</h3>
                    <p class="value">{{info.name}}</p>
                </div>
                <div class="row">
                    <h3 class="type">Телефон:</h3>
                    <p class="value">{{info.phone}}</p>
                </div>
                <div class="row">
                    <h3 class="type">E-mail:</h3>
                    <p class="value">{{info.mail}}</p>
                </div>
                <div class="row">
                    <button class="button">Редактировать</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProfileInfo",
    data() {
        return {
            info: {
                status: "Физическое лицо",
                name: "Иван Сергеевич Ковальников",
                phone: "+7 (000) 876 64 65",
                mail: "DfgstwGhg@email.com",
            },
            isOpen: true,
        }
    },
}
</script>

<style lang="scss" scoped>
.wrapper {
    color: $grey;
}

.block {
    background: $linear;
    border-radius: 20px;
    box-shadow: $sh_arrow;
    padding: 9px 20px;
    
    >.row {
        cursor: pointer;
    }
}

.row {
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.title {
    margin: 0;
    font-size: 18px;
    line-height: 22px;
}

.content {
    
    .row {
        justify-content: flex-start;
    }
}

.type {
    margin: 0 10px 0 0;
    font-size: 16px;
    line-height: 19px;
}

.value {
    margin: 0;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
}

.button {
    border: none;
    padding: 0;
    outline: none;
    background: transparent;
    margin: 0 auto;
    color: $purple1;
    cursor: pointer;
}

.hidden {
    display: none;
    transition: all 1s ease-in-out;
}

.reverse {
    transform: scaleY(-1);
}
</style>