<template>
    <div>
        <div class="wrapper">
            <div class="row">
                <div class="logo">
                    <div class="logo__img" @click="this.$router.push('/')"></div>
                    <h1 class="logo__title" @click="this.$router.push('/')">Forta</h1>
                </div>
                <div class="row">
                    <div class="burger" @click="Menu">
                        <div class="burger__line"></div>
                        <div class="burger__line"></div>
                        <div class="burger__line"></div>
                    </div>
                    <img class="profile" src="../assets/profile.svg" @click="Profile" alt="profile">
                </div>
            </div>
        </div>
        <div class="dropdown" v-if="menu">
            <div class="menu">
                <div class="links">
                    <router-link class="links__link" to="/documents">Документация</router-link>
                    <router-link class="links__link" to="/products">Наши продукты</router-link>
                    <router-link class="links__link" to="/faq">FAQ</router-link>
                    <router-link class="links__link" to="/documents">Служба поддержки</router-link>
                </div>
            </div>
        </div>
        <div class="dropdown" v-if="profile">
            <div class="menu">
                <div class="links">
                    <button class="links__link">Выйти</button>
                    <button class="links__link">Удалить профиль</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header",
    data() {
        return {
            menu: false,
            profile: false,
        }
    },
    methods: {
        Menu() {
            this.profile = false
            this.menu = !this.menu
        },
        Profile() {
            this.menu = false
            this.profile = !this.profile
        }
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
    box-shadow: $sh_light;
    background: $white1;

    @include respond-to("xs") {
        $padding-x: 6.5vw;
        padding: 20px $padding-x;
    }
}

.row {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    display: flex;

    &__img {
        width: 30px;
        height: 30px;
        border-radius: 10px;
        background: $purple1;
        cursor: pointer;
    }

    &__title {
        margin: 0 0 0 10px;
        color: $grey;
        font-size: 28px;
        line-height: 30px;
        cursor: pointer;
    }
}

.burger {
    margin: 0 20px 0 0;
    cursor: pointer;

    &__line {
        margin: 0 0 7px 0;
        width: 30px;
        height: 2px;
        border-radius: 5px;
        background: $grey;

        &:last-child {
            margin: 0;
        }
    }
}

.profile {
    cursor: pointer;
}

.dropdown {
    position: relative;

    .menu {
        background: $white1;
        position: absolute;
        padding: 40px 25px;
        width: 100%;
        box-sizing: border-box;

        .links {
            display: flex;
            flex-direction: column;
            text-align: left;

            &__link {
                cursor: pointer;
                outline: none;
                border: none;
                background: transparent;
                display: inline-block;
                font-weight: 700;
                line-height: 40px;
                text-decoration: none;
                color: $grey;
                border-bottom: 1px solid $white2;

                &:last-child {
                    border: none;
                }

                &:hover {
                    background: $white2;
                }
            }
        }
        
        
    }
}
</style>
