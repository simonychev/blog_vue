// import Main from "@/pages/Main";
import {createRouter, createWebHistory} from 'vue-router'
import PostPage from "@/pages/PostPage";
import About from "@/pages/About";
import PostIdPage from "@/pages/PostIdPage";
// import PostPageWidthStore from "@/pages/PostPageWidthStore";
// import PostPageCompositionAPI from "@/pages/PostPageCompositionAPI";

const routes = [
    // {
    //     path: '/',
    //     component: Main
    // },
    {
        path: '/',
        component: PostPage
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts/:id',
        component: PostIdPage
    },
    // {
    //     path: '/store',
    //     component: PostPageWidthStore
    // },
    // {
    //     path: '/composition',
    //     component: PostPageCompositionAPI
    // },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;