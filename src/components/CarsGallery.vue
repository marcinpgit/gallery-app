<template>

  <b-container fluid class="cars-gallery">
    <b-row> 
      <b-col>
        <h1 class="cars-title"><span>:</span>{{ title }}</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <blockquote class="cars-quote">{{ quote }}</blockquote>
      </b-col>
    </b-row>

    <b-row>
      <b-col sm="12" md="6" class="cars-col">
        <div v-for="car in carsListOne">
            <b-img v-img class ="car-img" v-bind:src="car.src" fluid/>
        </div>
      </b-col>
      <b-col sm="12" md="6" class="cars-col">
        <div v-for="car in carsListTwo">
          <b-img v-img class="car-img" v-bind:src="car.src" fluid/>
        </div>
      </b-col>           
    </b-row>

  </b-container>

</template>

<script>
export default {
    name: 'carsGallery',
    data () {
        return {
          title: 'Classic Cars Gallery',
          quote: "All of those cars were once just a dream in somebody's head.",
          carsListOne: [
            { title: 'one', src: require('../assets/images/carsGallery/car1.jpg') },
            { title: 'two', src: require('../assets/images/carsGallery/car2.jpg') },
            { title: 'two', src: require('../assets/images/carsGallery/car3.jpg') }
          ],
          carsListTwo: [
            { title: 'one', src: require('../assets/images/carsGallery/car4.jpg') },
            { title: 'two', src: require('../assets/images/carsGallery/car5.jpg') },
            { title: 'two', src: require('../assets/images/carsGallery/car6.jpg') }
          ]
        }
  }
}
</script>

<style scoped>
  .cars-title {
    padding: 20px 0 20px 0;
    font-weight: 400
  }

  span {
    font-size: 50px;
    font-weight: bold;
    color: #F7EB9E
  }

  .cars-quote {
    font-size: 20px;
    padding-bottom: 80px
  }

  .car-img, .cars-col {
    margin: 0;
    padding: 0
  }

  .car-img:hover {
    filter: blur(2px)
  }
  
</style>