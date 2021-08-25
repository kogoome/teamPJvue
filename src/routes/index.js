import {
  createRouter,
  createWebHashHistory,
} from "vue-router/dist/vue-router.esm-browser"
import Home from "./Home"
import Search from "./Search"

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/search",
      component: Search,
    },
  ],
})
