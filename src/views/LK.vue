<template>
    <div>
        <PersonHeader />
        <Balance class="balance" />
        <ProfileInfo class="info" />
        <History class="history" />
        <Buttons class="buttons" />
    </div>
</template>

<script>
import PersonHeader from '../components/LK/PersonHeader.vue'
import Balance from '../components/LK/Balance.vue'
import ProfileInfo from '../components/LK/ProfileInfo.vue'
import History from '../components/LK/History.vue'
import Buttons from '../components/LK/Buttons.vue'

export default {
    name: "LK",
    components: {
        PersonHeader,
        Balance,
        ProfileInfo,
        History,
        Buttons
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