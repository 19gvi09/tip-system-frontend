<template>
    <div>
        <PageTitle :data="title" />
        <Balance class="balance" />
        <Transactions class="transactions" :data="history" />
    </div>
</template>

<script>
import Balance from '../components/Balance.vue'
import Transactions from '../components/Transactions.vue'
import PageTitle from '../components/PageTitle.vue'

export default {
    name: 'History',
    components: {
        Balance,
        Transactions,
        PageTitle
    },
    data() {
        return {
            title: {
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
                        color: "green",
                        symbol: "+",
                        amount: 350,
                        date: "14/08/2021",
                        time: "13:40"
                    },
                    {
                        id: 3,
                        color: "red",
                        symbol: "-",
                        amount: 540,
                        date: "01/09/2021",
                        time: "22:32"
                    },
                    {
                        id: 4,
                        color: "red",
                        symbol: "-",
                        amount: 540,
                        date: "01/09/2021",
                        time: "22:32"
                    },
                    {
                        id: 5,
                        color: "red",
                        symbol: "-",
                        amount: 140,
                        date: "04/09/2021",
                        time: "20:32"
                    },
                    {
                        id: 6,
                        color: "green",
                        symbol: "+",
                        amount: 5440,
                        date: "14/09/2021",
                        time: "00:32"
                    },
                ]
            }
            
        }
    }
}
</script>

<style lang = "scss" scoped>
.balance {
    margin: -111px 0 0;
}

.transactions {
    margin: 30px 0 0;
}

.bal {
    padding-bottom: 20px;
}
</style>