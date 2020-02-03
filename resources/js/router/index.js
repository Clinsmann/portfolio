import Vue from 'vue';
import VueRouter from 'vue-router';
import { store } from '../store/store';
import { routerHistory, writeHistory } from 'vue-router-back-button';
const HomePage = () => import(/* webpackChunkName: "homePage" */ '../views/HomePage.vue');
const NotFoundPage = () => import(/* webpackChunkName: "notFoundPage" */ '../views/NotFound.vue');
// const lazyLoad = view => () => import(`../views/${view}.vue`);

Vue.use(VueRouter);
Vue.use(routerHistory);

const router = new VueRouter({
	history: true,
	hashbang: false,
	mode: 'history',
	linkActiveClass: 'active',
	routes: [
		{ path: '/', redirect: { name: 'home' } },
		{ path: '/home', component: HomePage, name: 'home' },
		{ path: '/not-found', component: NotFoundPage },
		{ path: '*', component: NotFoundPage }
	]
});

router.mode = 'html5';
router.afterEach(writeHistory);
router.afterEach(() => store.dispatch('Application/TOGGLE_IS_LOADING', false));
router.beforeEach((to, from, next) => {
	next();
});

export default router
