import Vue from 'vue'
import Router from 'vue-router'
import IntroPage from '@/components/IntroPage'
import TravelGallery from '@/components/TravelGallery'
import PeopleGallery from '@/components/PeopleGallery'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'introPage',
      component: IntroPage
    },
    {
      path: '/travel',
      name: 'travelGallery',
      component: TravelGallery
    },
    {
      path: '/people',
      name: 'peopleGallery',
      component: PeopleGallery
    }
  ]
})
