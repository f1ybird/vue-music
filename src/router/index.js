import Vue from 'vue'
import Router from 'vue-router'
import Artists from '@/pages/artists'
import Home from '@/pages/home'
import Index from '@/pages/index'
import ListCate from '@/pages/listcate'
import Search from '@/pages/search'
import Ucenter from '@/pages/ucenter'
import HotList from '@/components/musiclist/hot_list'
import KingList from '@/components/musiclist/king_list'
import NewsList from '@/components/musiclist/news_list'
import MoreList from '@/pages/morelist'
import MusicPlay from '@/pages/musicplay'
import ArtistsDetails from '@/pages/artistsDetails/artistsDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/musicplay',
      name: 'MusicPlay',
      component: MusicPlay
    },
    {
      path: '/',
      name: 'Index',
      redirect: '/home',
      component: Index,
      children: [
        {
          path: 'home',
          name: 'Home',
          component: Home,
          redirect: '/home/hot',
          children: [
            {
              path: 'hot',
              name: 'HotList',
              component: HotList
            },
            {
              path: 'news',
              name: 'NewsList',
              component: NewsList
            },
            {
              path: 'king',
              name: 'KingList',
              component: KingList
            }
          ]
        },
        {
          path: 'artists',
          name: 'Artists',
          component: Artists,
        },
        {
          path: 'artistsDetails',
          name: 'ArtistsDetails',
          component: ArtistsDetails
        },
        {
          path: 'listCate',
          name: 'ListCate',
          component: ListCate
        }, {
          path: 'search',
          name: 'Search',
          component: Search
        },
        {
          path: 'ucenter',
          name: 'Ucenter',
          component: Ucenter
        },
        {
          path: 'morelist',
          name: 'MoreList',
          component: MoreList
        }
      ]
    }
  ]
})
