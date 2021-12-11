<template>
    <div>
        <AllQrHead />
        <AllQrBody />
        <Buttons />
    </div>
</template>

<script>

import AllQrHead from '../components/AllQr/AllQrHead.vue'
import AllQrBody from '../components/AllQr/AllQrBody.vue'
import Buttons from '../components/AllQr/Buttons.vue'


export default {
    name: 'AllQr',
    components: {
        AllQrHead,
        AllQrBody,
        Buttons
    }
}
</script>
