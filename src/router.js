import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AboutMe from '@/components/AboutMe'
import Education from '@/components/Education'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'
import Blog from '@/components/Blog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/aboutme',
      name: 'AboutMe',
      component: AboutMe
    },
    {
      path: '/education',
      name: 'Education',
      component: Education
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/contact',
      name: 'ContactMe',
      component: ContactMe
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    }
  ],
  mode: 'history'
})
