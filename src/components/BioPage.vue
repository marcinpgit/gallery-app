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