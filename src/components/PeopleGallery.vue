<template>
    
    <b-container class="people-gallery">

        <b-row> 
            <b-col>
                <h1 class="people-title"><span>:</span>{{ title }}</h1>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <blockquote class="people-quote">{{ quote }}<strong>Andy Warhol</strong></blockquote>
            </b-col>
        </b-row>
        
        <b-row>
            <b-col sm="6">
                <figure  class="people-figure" v-for="image in imagesSetOne">
                    <b-img v-img class="people-img" fluid v-bind:src="image.src"/>
                    <figcaption>{{ image.title }}</figcaption>
                    <div class="people-box">
                        <div class="people-text">{{ clickText }}</div>
                    </div>
                </figure>
            </b-col>
            <b-col sm="6">
                <figure class="people-figure" v-for="image in imagesSetTwo">
                    <b-img v-img class="people-img" fluid v-bind:src="image.src"/>
                    <figcaption>{{ image.title }}</figcaption>
                    <div class="people-box">
                        <div class="people-text">{{ clickText }}</div>
                    </div>
                </figure>
            </b-col>
        </b-row>
        
    </b-container>

</template>

<script>
export default {
    name: 'peopleGallery',
    data () {
        return {
            title: 'People Gallery',
            quote: '"The best thing about a picture is that it never changes, even when the people in it do."',
            clickText: 'click me!',
            imagesSetOne: [
                { title: 'Blue & Pink', src: require('../assets/images/peopleGallery/people1.jpg') },
                { title: 'Going out', src: require('../assets/images/peopleGallery/people2.jpg') },
                { title: 'Blue sky', src: require('../assets/images/peopleGallery/people3.jpeg') },
                { title: 'Airport', src: require('../assets/images/peopleGallery/people4.jpg') }
            ],
            imagesSetTwo: [
                { title: 'Chillout', src: require('../assets/images/peopleGallery/people5.jpg') },
                { title: 'Audience', src: require('../assets/images/peopleGallery/people6.jpg') },
                { title: 'Playing guitar', src: require('../assets/images/peopleGallery/people7.jpg') },
                { title: 'Meeting', src: require('../assets/images/peopleGallery/people8.jpg') }
            ]
        }
    }
}
</script>

<style scoped>
    .people-gallery {
        padding: 20px
    }

    .people-title {
        padding-bottom: 20px;
        font-weight: 400
    }

    span {
        font-size: 50px;
        font-weight: bold;
        color: #F7EB9E
    }

    .people-quote {
        font-size: 20px;
        padding-bottom: 80px
    }

    .people-img {
        box-shadow: 10px 10px 10px #C9C9C9;
        border-radius: 3px;
        margin-bottom: 10px;
        display: block;
        transition: .5s ease;
        backface-visibility: hidden;
        cursor: pointer;
    }

    .people-figure {
        margin-bottom: 50px;
        position: relative
    }

    .people-figure:hover .people-img {
        opacity: 0.5
    }

    .people-figure:hover .people-box {
        opacity: 1
    }

    .people-box {
        transition: .8s ease;
        opacity: 0;
        position: absolute;
        top: 43%;
        left: 50%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        text-align: center
    }

    .people-text {
        /* background: rgba(44, 62, 80, 0.8); */
        /* border-radius: 3px; */
        color: rgb(54, 45, 45);
        font-size: 19px;
        font-weight: 600;
        /* padding: 7px 15px; */
        cursor: pointer;
    }
</style>