<template>
    <div>
        <PersonHeader />
        <Balance />
    </div>
</template>

<script>
import PersonHeader from '../components/LK/PersonHeader.vue'
import Balance from '../components/LK/Balance.vue'

export default {
    name: "LK",
    components: {
        PersonHeader,
        Balance
    }
}
</script>

<style lang="scss" scoped>

</style>