import Vue from 'vue'
import Router from 'vue-router'
import IntroPage from '@/components/IntroPage'
import BioPage from '@/components/BioPage'
import TravelGallery from '@/components/TravelGallery'
import PeopleGallery from '@/components/PeopleGallery'
import CarsGallery from '@/components/CarsGallery'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'introPage',
      component: IntroPage
    },
    {
      path: '/bio',
      name: 'bioPage',
      component: BioPage
    },
    {
      path: '/travel',
      name: 'travelGallery',
      component: TravelGallery
    },
    {
      path: '/cars',
      name: 'carsGallery',
      component: CarsGallery
    },
    {
      path: '/people',
      name: 'peopleGallery',
      component: PeopleGallery
    }
  ]
})
