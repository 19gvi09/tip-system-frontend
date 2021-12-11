<template>
    <div>
        <FinHeader />
        <Balance class="balance" />
        <Transactions class="transactions" />
    </div>
</template>

<script>
import FinHeader from '../components/Finance/FinHeader.vue'
import Balance from '../components//Balance.vue'
import Transactions from '../components/Finance/Transactions.vue'

export default {
    name: 'Finance',
    components: {
        FinHeader,
        Balance,
        Transactions
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