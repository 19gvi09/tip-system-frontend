<template>
    <div>
        <PageTitle :data="data" />
        <Balance class="balance" />
        <ProfileInfo class="info" />
        <Transactions class="history" :data="history" />
        <Buttons class="buttons" />
    </div>
</template>

<script>
import Balance from '../components/Balance.vue'
import ProfileInfo from '../components/LK/ProfileInfo.vue'
import Buttons from '../components/LK/Buttons.vue'
import PageTitle from '../components/PageTitle.vue'
import Transactions from '../components/Transactions.vue'

export default {
    name: "LK",
    components: {
        Balance,
        ProfileInfo,
        Buttons,
        PageTitle,
        Transactions
    },
    data() {
        return {
            data: {
                name: "Иван Ковальников",
                id: "7685 7588 4758"
            },
            history: {
                title: "Финансовые операции",
                items: [
                    {
                        id: 1,
                        color: "green",
                        symbol: "+",
                        amount: 350,
                        date: "14/08/2021",
                        time: "11:20"
                    },
                    {
                        id: 2,
                        color: "red",
                        symbol: "-",
                        amount: 540,
                        date: "01/09/2021",
                        time: "13:40"
                    },
                    {
                        id: 3,
                        color: "green",
                        symbol: "+",
                        amount: 600,
                        date: "25/09/2021",
                        time: "22:32"
                    },
                ]
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.balance {
    margin: -111px 0 0;
}

.info {
    margin: 30px 0 0;
}

.history {
    margin: 30px 0 0;
}

.buttons {
    margin: 30px 0 0;
    padding: 0 0 50px;
}
</style>