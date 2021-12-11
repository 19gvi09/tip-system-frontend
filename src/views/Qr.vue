<template>
<QrHead />
<QrBody />
<Buttons />
</template>

<script>
import QrHead from '../components/Qr/QrHead.vue'
import QrBody from '../components/Qr/QrBody.vue'
import Buttons from '../components/Qr/Buttons.vue'

export default {
    name: 'Qr',
    components: {
        QrHead,
        QrBody,
        Buttons
    }
}
</script>

<style lang="scss" scoped>
</style>
