import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ArticleDetail from "../views/ArticleDetail.vue";
import Categories from "../views/Categories.vue";
import CategoryArticles from "../views/CategoryArticles.vue";
import About from "../views/About.vue";

const routes = [
    { path: "/", name: "Home", component: Home },
    { path: "/article/:id", name: "ArticleDetail", component: ArticleDetail },
    { path: "/categories", name: "Categories", component: Categories }, // 分类页面
    { path: "/category/:category", name: "CategoryArticles", component: CategoryArticles }, // 分类文章页面
    { path: "/about", name: "About", component: About }, // 关于页面
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
