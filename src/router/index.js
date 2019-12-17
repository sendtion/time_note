import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import NoteList from '@/components/NoteList'
import NoteDetail from '@/components/NoteDetail'
import AddNote from '@/components/AddNote'
import AddGroup from '@/components/AddGroup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/note_list',
      name: 'NoteList',
      component: NoteList
    },
    {
      path: '/note_detail',
      name: 'NoteDetail',
      component: NoteDetail
    },
    {
      path: '/add_note',
      name: 'AddNote',
      component: AddNote
    },
    {
      path: '/add_group',
      name: 'AddGroup',
      component: AddGroup
    }
  ]
})
