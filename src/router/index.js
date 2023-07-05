import { createWebHistory, createRouter } from "vue-router";
import Page1 from '@/views/Page_1.vue'
import Page2 from '@/views/Page_2.vue'
import Page3 from '@/views/Page_3.vue'
import Page4 from '@/views/Page_4.vue'
import Page5 from '@/views/Page_5.vue'
import Page6 from '@/views/Page_6.vue'
import HomePage from '@/views/Home_Page.vue'
const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage
  },
  {

  path: "/page1",
  name: "Page1",
  component: Page1
},
{

  path: "/page2",
  name: "Page2",
  component: Page2
},
{

  path: "/page3",
  name: "Page3",
  component: Page3
},
{

  path: "/page4",
  name: "Page4",
  component: Page4
},
{

  path: "/page5",
  name: "Page5",
  component: Page5
},
{

  path: "/page6",
  name: "Page6",
  component: Page6
},


]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router