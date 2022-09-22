import {createRouter, createWebHistory} from 'vue-router'
import home from "../views/Home.vue";
import NotFound from "../views/NotFound.vue";
import Contact from "../views/Contact.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: home
    },
    {
        path: '/bookings',
        name: 'Bookings',
        component: Contact
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;