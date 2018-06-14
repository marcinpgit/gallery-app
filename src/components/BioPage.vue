<template>
   
    <b-container class="bio-page">
        <b-row>

            <b-col sm="12" md="6">
                <div class="bio-description">
                    <h4>Bio</h4>
                    <h5 class="hello-text">Hi, I'm Alexandra!</h5>
                    Clad sometimes in muddy boots, sometimes in a pair of heels, 
                    my career as a photographer often requires both sets 
                    of footwear as I follow my clients on their adventures 
                    all over the world. Catamarans, towering ballrooms, glacial lakes, 
                    rooftops, mountains, bed and breakfasts, mossy forests, craggy 
                    coastlines—my spirit is undaunted, and I am forever inspired by people, 
                    nature, wind and light.
                </div>
                <div class="bio-client">
                    <h4>Client List</h4>
                    <ul class="client-list" v-for="client in clients">
                        <li>{{ client.name }}</li>
                    </ul>
                </div>
                <div class="bio-books">
                    <h4>Books</h4>
                    <ul class="books-list" v-for="book in books">
                    <li>{{ book.title }}</li>
                    </ul>
                </div>
            </b-col>
            
            <b-col sm="12" md="6" class="bio-picture">
                <b-img class="artist-image" fluid :src="authorImage" :alt="altAuthor"/>
                <b-img class="view-image" fluid :src="viewImage" :alt="altView"/>
                <div class="social-media-box">
                    <h5 class="fallow-text">Follow me!</h5>
                    <p>
                        Love my Gallery? There are many ways you can connect with me online
                        to receive the latest photo session insights.
                    </p>
                    <b-link href="https://www.facebook.com" target="blank">
                        <b-img class="social-media-icon" fluid :src="facebookIcon" :alt="altMedia"/>
                    </b-link>
                    <b-link href="https://www.instagram.com" target="blank">
                        <b-img class="social-media-icon" fluid :src="instgramIcon" :alt="altMedia"/>
                    </b-link>
                    <b-link href="https://www.twitter.com" target="blank">
                        <b-img class="social-media-icon" fluid :src="twitterIcon" :alt="altMedia"/>
                    </b-link>
                    
                </div>
            </b-col>

        </b-row> 

    </b-container>

</template>

<script>
export default {
    name: 'bioPage',
    data (){
        return {
            altAuthor: 'Author picture',
            altView: 'View image',
            authorImage: require('../assets/images/bio/bio-artist.jpg'),
            viewImage: require('../assets/images/bio/bio-picture.jpg'),
            facebookIcon: require('../assets/images/bio/socialMedia/facebook.png'),
            instgramIcon: require('../assets/images/bio/socialMedia/instagram.png'),
            twitterIcon: require('../assets/images/bio/socialMedia/twitter.png'),
            altMedia: 'Social media icons',
            clients: [
                { name: 'Bueno Restaurant' },
                { name: 'Delicious Appetito' },
                { name: 'Healthy Carrot' },
                { name: 'Tommy Smith' },
                { name: 'Pea Restaurant' },
                { name: 'Food Market' },
                { name: 'Marshall Brothers' },
                { name: 'Diet Catering' },
                { name: 'Alexa Donovan Restaurant' },
            ],
            books: [
                { title: 'The Healthy Food' },
                { title: 'Healing of Cucumber' },
                { title: 'The Path of Vegetables' },
                { title: 'Enchanted Polish Cuisine' },
                { title: 'Food for Kids' },
                { title: 'Healthy Diet' }
            ]
        }
    }
}
</script>

<style scoped>
    .bio-page {
        padding: 20px 20px 0 20px
    }

    h4 {
        text-decoration: underline #F7EB9E
    }

    .hello-text {
        font-weight: 500
    }

    .bio-client {
        padding-top: 20px
    }

    .client-list {
        list-style: none;
        padding: 0;
        margin: 0
    }

    .bio-books {
        padding: 20px 0 20px 0;
    }

    .books-list {
        list-style: none;
        padding: 0;
        margin: 0
    }

    .fallow-text {
        font-weight: 600
    }

    .artist-image {
        padding-bottom: 10px
    }

    .social-media-box {
        margin-top: 20px
    }

    .social-media-icon {
        height: 70px;
        margin: 10px
    }
</style>
