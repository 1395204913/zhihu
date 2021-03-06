import VueRouter from 'vue-router'
import HomeContain from '../components/HomeContain.vue'
import VipContain from '../components/VipContain.vue'
import NoticeContain from '../components/NoticeContain.vue'
import UserContain from '../components/UserContain.vue'
import PageInfo from '../components/info/pageinfo.vue'
import GuanzhuInfo from '../components/info/guanzhu.vue'
import RebangInfo from '../components/info/rebang.vue'

const router = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:HomeContain},
        {path:'/vip',component:VipContain},
        {path:'/notice',component:NoticeContain},
        {path:'/user',component:UserContain},
        {path:'/home/pageinfo/:id',component:PageInfo},
        {path:'/home/guanzhuinfo',component:GuanzhuInfo},
        {path:'/home/rebanginfo',component:RebangInfo}
    ],
    linkActiveClass: 'mui-active'// 覆盖默认的路由类：router-link-active
})
export default router