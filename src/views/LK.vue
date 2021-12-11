<template>
    <div>
        <PersonHeader />
        <Balance class="balance" />
        <ProfileInfo class="info" />
    </div>
</template>

<script>
import PersonHeader from '../components/LK/PersonHeader.vue'
import Balance from '../components/LK/Balance.vue'
import ProfileInfo from '../components/LK/ProfileInfo.vue'

export default {
    name: "LK",
    components: {
        PersonHeader,
        Balance,
        ProfileInfo
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
</style>