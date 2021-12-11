<template>
<div>
<FinHeader />
<Balance />
<Transactions />
</div>
</template>

<script>
import FinHeader from '../components/Finance/FinHeader.vue'
import Balance from '../components/Finance/Balance.vue'
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
    padding-bottom: 30px;
}
.bal {
    padding-bottom: 20px;
}
</style>