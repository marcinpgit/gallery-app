<template>
    
    <b-container class="travel-gallery">

        <b-row>
            <b-col>
                <h1 class="travel-title"><span>:</span>{{ title }}</h1>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <blockquote class="travel-quote">{{ quote }}<strong>Annie Leibovitz</strong></blockquote>
            </b-col>
        </b-row>
        
        <b-row>
            <b-col sm="12" md="4">
                <figure class="travel-figure" v-for="image in imagesSetOne">
                    <b-img v-img class="travel-img" fluid v-bind:src="image.src"/>
                    <figcaption>{{ image.title }}</figcaption>
                </figure>
            </b-col>
            <b-col sm="12" md="4">
                <figure  class="travel-figure" v-for="image in imagesSetTwo">
                    <b-img v-img class="travel-img" fluid v-bind:src="image.src"/>
                    <figcaption>{{ image.title }}</figcaption>
                </figure>
            </b-col>
            <b-col sm="12" md="4">
                <figure  class="travel-figure" v-for="image in imagesSetThree">
                    <b-img v-img class="travel-img" fluid v-bind:src="image.src"/>
                    <figcaption>{{ image.title }}</figcaption>
                </figure>
            </b-col>
        </b-row>
        
    </b-container>

</template>

<script>
export default {
    name: 'travelGallery',
    data () {
        return {
            title: 'Travel Gallery',
            quote: '"I wish that all of nature’s magnificence, the emotion of the land, the living energy of place could be photographed."',
            imagesSetOne: [
                { title: 'Sunset', src: require('../assets/images/travelGallery/travel1.jpg') },
                { title: 'Chile', src: require('../assets/images/travelGallery/travel2.jpg') },
                { title: 'Wild elephant', src: require('../assets/images/travelGallery/travel3.jpg') }
            ],
            imagesSetTwo: [
                { title: 'Oriental city', src: require('../assets/images/travelGallery/travel4.jpg') },
                { title: 'Mosque', src: require('../assets/images/travelGallery/travel5.jpg') },
                { title: 'Nature', src: require('../assets/images/travelGallery/travel6.jpg') }
            ],
            imagesSetThree: [
                { title: 'Santorini', src: require('../assets/images/travelGallery/travel7.jpg') },
                { title: 'Freedom', src: require('../assets/images/travelGallery/travel8.jpg') },
                { title: 'Chicago', src: require('../assets/images/travelGallery/travel9.jpg') }
            ]
        }
    }
}
</script>