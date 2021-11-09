import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router'
const treeselect = () => import(/* webpackChunkName: "index-main" */ '@/pages/treeselect/children/treeselect')
const routes = [
    {
        path     : '/',
        component: treeselect,
        name     : ''
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});


export default router;

