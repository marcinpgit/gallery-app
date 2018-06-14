<template>
    <div class="intro">
        <div class="intro-text">
            <h1>{{ title }}</h1>
        </div> 
    </div>
</template>

<script>
export default {
    name: 'introPage',
    data () {
        return {
            title: 'The best thing about memories is making them.'
        }
    }
}
</script>

<style scoped>
    .intro {
        background-image: url('../assets/images/intro/intro1.jpg');
        height: 95vh;
        background-size: cover;
    }

    .intro-text {
        padding-top: 2%;
    }

    h1, h2 {
        font-weight: 300
    }
</style>
