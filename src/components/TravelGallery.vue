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
   
<style scoped>
    .travel-gallery {
        padding: 20px
    }

    .travel-title {
        padding-bottom: 20px;
        font-weight: 400
    }

    span {
        font-size: 50px;
        font-weight: bold;
        color: #F7EB9E
    }

    .travel-quote {
        font-size: 20px;
        padding-bottom: 80px
    }

    .travel-img {
        box-shadow: 10px 10px 10px #C9C9C9;
        border-radius: 3px;
        margin-bottom: 10px;
        transition: transform 700ms, filter 1100ms;
        cursor: pointer
    }

    .travel-img:hover {
        filter: grayscale(90%);
        -webkit-filter: grayscale(90%); 
        -ms-filter: grayscale(90%);
        box-shadow: 15px 15px 15px #C9C9C9;
        transform: scale(1.05);
        -webkit-transform: scale(1.05);
        -ms-transform: scale(1.05)
    }

    .travel-figure {
        margin-bottom: 50px
    }
</style>