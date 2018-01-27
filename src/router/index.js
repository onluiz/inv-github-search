import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/pages/HomePage';
import NotesPage from '@/pages/NotesPage';
import NotePage from '@/pages/NotePage';
import ReposPage from '@/pages/ReposPage';
import NotFoundPage from '@/pages/NotFoundPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
    },
    {
      path: '/notes',
      name: 'NotesPage',
      component: NotesPage,
    },
    {
      path: '/notes/new',
      name: 'NotePage',
      component: NotePage,
    },
    {
      path: '/repos',
      name: 'ReposPage',
      component: ReposPage,
    },
    {
      path: '/404',
      name: 'NotFoundPage',
      component: NotFoundPage,
    },
  ],
});
