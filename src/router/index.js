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
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'Inicio',
      component: HomePage,
    },
    {
      path: '/home/:code',
      name: 'Inicio',
      props: true,
      component: HomePage,
    },
    {
      path: '/perfil',
      name: 'Perfil',
      component: PerfilPage,
    },
    {
      path: '/notes',
      name: 'Anotações',
      component: NotesPage,
    },
    {
      path: '/notes/new',
      name: 'Nova Anotação',
      component: NotePage,
    },
    {
      path: '/repos/',
      name: 'Repositórios',
      component: ReposPage,
    },
    {
      path: '/404',
      name: '404',
      component: NotFoundPage,
    },
  ],
});

export default router;
