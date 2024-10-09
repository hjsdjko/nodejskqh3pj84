import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import aboutus from '@/views/modules/aboutus/list'
    import chengshifenlei from '@/views/modules/chengshifenlei/list'
    import remenjingdian from '@/views/modules/remenjingdian/list'
    import discussjiudianxinxi from '@/views/modules/discussjiudianxinxi/list'
    import jiudianxinxi from '@/views/modules/jiudianxinxi/list'
    import jiudiandingdan from '@/views/modules/jiudiandingdan/list'
    import discusslvyouxianlu from '@/views/modules/discusslvyouxianlu/list'
    import systemintro from '@/views/modules/systemintro/list'
    import yonghu from '@/views/modules/yonghu/list'
    import discussremenjingdian from '@/views/modules/discussremenjingdian/list'
    import menpiaodingdan from '@/views/modules/menpiaodingdan/list'
    import lvyouxianlu from '@/views/modules/lvyouxianlu/list'
    import config from '@/views/modules/config/list'
    import newstype from '@/views/modules/newstype/list'


//2.配置路由   注意：名字
export const routes = [{
    path: '/',
    name: '系统首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '系统首页',
      component: Home,
      meta: {icon:'', title:'center', affix: true}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '资讯信息',
        component: news
      }
      ,{
	path: '/aboutus',
        name: '关于我们',
        component: aboutus
      }
      ,{
	path: '/chengshifenlei',
        name: '城市分类',
        component: chengshifenlei
      }
      ,{
	path: '/remenjingdian',
        name: '热门景点',
        component: remenjingdian
      }
      ,{
	path: '/discussjiudianxinxi',
        name: '酒店信息评论',
        component: discussjiudianxinxi
      }
      ,{
	path: '/jiudianxinxi',
        name: '酒店信息',
        component: jiudianxinxi
      }
      ,{
	path: '/jiudiandingdan',
        name: '酒店订单',
        component: jiudiandingdan
      }
      ,{
	path: '/discusslvyouxianlu',
        name: '旅游线路评论',
        component: discusslvyouxianlu
      }
      ,{
	path: '/systemintro',
        name: '系统简介',
        component: systemintro
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/discussremenjingdian',
        name: '热门景点评论',
        component: discussremenjingdian
      }
      ,{
	path: '/menpiaodingdan',
        name: '门票订单',
        component: menpiaodingdan
      }
      ,{
	path: '/lvyouxianlu',
        name: '旅游线路',
        component: lvyouxianlu
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/newstype',
        name: '资讯信息分类',
        component: newstype
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
