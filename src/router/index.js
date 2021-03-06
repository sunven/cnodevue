import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Detail from '@/components/Detail';
import User from '@/components/User';
import My from '@/components/My';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home,
  }, {
    path: '/My',
    name: 'My',
    component: My,
  }, {
    path: '/Detail/:id',
    name: 'Detail',
    component: Detail,
    props: true,
  }, {
    path: '/User/:name',
    name: 'User',
    component: User,
    props: true,
  }],
});
