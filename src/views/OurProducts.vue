<template>
    <div>
        <OurProductHead />
        <OurProductBody />
    </div>
</template>

<script>
import OurProductHead from '../components/OurProduct/OurProductHead.vue'
import OurProductBody from '../components/OurProduct/OurProductBody.vue'

export default {
    name: 'OurProducts',
    components: {
        OurProductHead,
        OurProductBody,
        
    }
}
</script>


