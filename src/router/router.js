import Vue from "vue";
import Router from "vue-router";


import homePage from '../pages/home-page/home-page'

Vue.use(Router);


export default new Router({
    mode: 'history',
    routes: [
        {
            path: "/",
            name: "home-page",
            component: homePage,
        },
    ]
})