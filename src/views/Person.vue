<template>
<PersonHeader />
<Balance />
</template>

<script>

import PersonHeader from '../components/Person/PersonHeader.vue'
import Balance from '../components/Person/Balance.vue'

export default {
    name: 'Person',
    components: {
        PersonHeader,
        Balance
    }
}
</script>

<style lang="scss" scoped>

</style>