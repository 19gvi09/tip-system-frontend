<template>
    <div>
        <HomePreview />
        <About />
    </div>
</template>

<script>
import About from '../components/Home/About.vue'
import HomePreview from '../components/Home/HomePreview.vue'

export default {
    name: 'Home',
    components: {
        HomePreview,
        About
        
    }
}
</script>
