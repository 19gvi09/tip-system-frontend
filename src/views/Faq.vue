<template>
    <div>
        <FaqHeader />
        <FaqInfo />
    </div>
</template>

<script>

import FaqHeader from '../components/Faq/FaqHeader.vue'
import FaqInfo from '../components/Faq/FaqInfo.vue'


export default {
    name: 'Faq',
    components: {
        FaqHeader,
        FaqInfo
    }
}
</script>
