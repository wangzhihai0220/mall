import Vue from 'vue'
import VueRouter from 'vue-router'
import Question from '@/components/Question.vue'
import detail from '@/components/detail.vue'
import Call from '@/components/Call.vue'
import One from '@/components/One.vue'
import two from '@/components/two.vue'
import Three from '@/components/Three.vue'
import HomeLeft from '@/components/HomeLeft.vue'
import HomeRight from '@/components/HomeRight.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'hash',
    routes: [
      {
        path: '/question',
        components: {   //注意这里的components，  default设置的组件 被渲染到 <router-view></router-view> 放置的位置
          default: Question, 
          'sider': HomeLeft,  //Sider组件被渲染到<router-view name=“sider”></router-view> 放置的位置
          'homecontent': HomeRight //同理
        },
        children:[
          {
            path: 'one',
            component: One,
          },
          {
            path: 'two',
            component: two,
          }
          ,{
            path: 'three',
            component: Three,
          }
        ]
      },
      {
        path: '/detail',
        component: detail
      },
      {
        path: '/call',
        component: Call
      },
      {
        path: '/left',
        component: HomeLeft
      },
      {
        path: '/right',
        component: HomeRight
      }
    ]
  })

export default router