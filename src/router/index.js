import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/pages/HomePage';
import PerfilPage from '@/pages/PerfilPage';
import NotesPage from '@/pages/NotesPage';
import NotePage from '@/pages/NotePage';
import ReposPage from '@/pages/ReposPage';
import NotFoundPage from '@/pages/NotFoundPage';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
    },
    {
      path: '/home/:code',
      name: 'HomePageCode',
      props: true,
      component: HomePage,
    },
    {
      path: '/perfil',
      name: 'PerfilPage',
      component: PerfilPage,
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
      path: '/repos/',
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

export default router;
