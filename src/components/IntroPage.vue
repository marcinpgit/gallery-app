<template>
    <div class="intro">
        <div class="intro-text">
            <h1>{{ title }}</h1>
            <h2>{{ text }}</h2>
        </div> 
    </div>
</template>

<script>
export default {
    name: 'introPage',
    data () {
        return {
            title: 'The best thing about memories is making them.',
            text: 'Capture Your memories with us.'
        }
    }
}
</script>