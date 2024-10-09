import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import payList from '../pages/pay'

import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import remenjingdianList from '../pages/remenjingdian/list'
import remenjingdianDetail from '../pages/remenjingdian/detail'
import remenjingdianAdd from '../pages/remenjingdian/add'
import chengshifenleiList from '../pages/chengshifenlei/list'
import chengshifenleiDetail from '../pages/chengshifenlei/detail'
import chengshifenleiAdd from '../pages/chengshifenlei/add'
import menpiaodingdanList from '../pages/menpiaodingdan/list'
import menpiaodingdanDetail from '../pages/menpiaodingdan/detail'
import menpiaodingdanAdd from '../pages/menpiaodingdan/add'
import jiudianxinxiList from '../pages/jiudianxinxi/list'
import jiudianxinxiDetail from '../pages/jiudianxinxi/detail'
import jiudianxinxiAdd from '../pages/jiudianxinxi/add'
import jiudiandingdanList from '../pages/jiudiandingdan/list'
import jiudiandingdanDetail from '../pages/jiudiandingdan/detail'
import jiudiandingdanAdd from '../pages/jiudiandingdan/add'
import lvyouxianluList from '../pages/lvyouxianlu/list'
import lvyouxianluDetail from '../pages/lvyouxianlu/detail'
import lvyouxianluAdd from '../pages/lvyouxianlu/add'
import newstypeList from '../pages/newstype/list'
import newstypeDetail from '../pages/newstype/detail'
import newstypeAdd from '../pages/newstype/add'
import aboutusList from '../pages/aboutus/list'
import aboutusDetail from '../pages/aboutus/detail'
import aboutusAdd from '../pages/aboutus/add'
import systemintroList from '../pages/systemintro/list'
import systemintroDetail from '../pages/systemintro/detail'
import systemintroAdd from '../pages/systemintro/add'
import discussremenjingdianList from '../pages/discussremenjingdian/list'
import discussremenjingdianDetail from '../pages/discussremenjingdian/detail'
import discussremenjingdianAdd from '../pages/discussremenjingdian/add'
import discussjiudianxinxiList from '../pages/discussjiudianxinxi/list'
import discussjiudianxinxiDetail from '../pages/discussjiudianxinxi/detail'
import discussjiudianxinxiAdd from '../pages/discussjiudianxinxi/add'
import discusslvyouxianluList from '../pages/discusslvyouxianlu/list'
import discusslvyouxianluDetail from '../pages/discusslvyouxianlu/detail'
import discusslvyouxianluAdd from '../pages/discusslvyouxianlu/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'pay',
					component: payList,
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'remenjingdian',
					component: remenjingdianList
				},
				{
					path: 'remenjingdianDetail',
					component: remenjingdianDetail
				},
				{
					path: 'remenjingdianAdd',
					component: remenjingdianAdd
				},
				{
					path: 'chengshifenlei',
					component: chengshifenleiList
				},
				{
					path: 'chengshifenleiDetail',
					component: chengshifenleiDetail
				},
				{
					path: 'chengshifenleiAdd',
					component: chengshifenleiAdd
				},
				{
					path: 'menpiaodingdan',
					component: menpiaodingdanList
				},
				{
					path: 'menpiaodingdanDetail',
					component: menpiaodingdanDetail
				},
				{
					path: 'menpiaodingdanAdd',
					component: menpiaodingdanAdd
				},
				{
					path: 'jiudianxinxi',
					component: jiudianxinxiList
				},
				{
					path: 'jiudianxinxiDetail',
					component: jiudianxinxiDetail
				},
				{
					path: 'jiudianxinxiAdd',
					component: jiudianxinxiAdd
				},
				{
					path: 'jiudiandingdan',
					component: jiudiandingdanList
				},
				{
					path: 'jiudiandingdanDetail',
					component: jiudiandingdanDetail
				},
				{
					path: 'jiudiandingdanAdd',
					component: jiudiandingdanAdd
				},
				{
					path: 'lvyouxianlu',
					component: lvyouxianluList
				},
				{
					path: 'lvyouxianluDetail',
					component: lvyouxianluDetail
				},
				{
					path: 'lvyouxianluAdd',
					component: lvyouxianluAdd
				},
				{
					path: 'newstype',
					component: newstypeList
				},
				{
					path: 'newstypeDetail',
					component: newstypeDetail
				},
				{
					path: 'newstypeAdd',
					component: newstypeAdd
				},
				{
					path: 'aboutus',
					component: aboutusList
				},
				{
					path: 'aboutusDetail',
					component: aboutusDetail
				},
				{
					path: 'aboutusAdd',
					component: aboutusAdd
				},
				{
					path: 'systemintro',
					component: systemintroList
				},
				{
					path: 'systemintroDetail',
					component: systemintroDetail
				},
				{
					path: 'systemintroAdd',
					component: systemintroAdd
				},
				{
					path: 'discussremenjingdian',
					component: discussremenjingdianList
				},
				{
					path: 'discussremenjingdianDetail',
					component: discussremenjingdianDetail
				},
				{
					path: 'discussremenjingdianAdd',
					component: discussremenjingdianAdd
				},
				{
					path: 'discussjiudianxinxi',
					component: discussjiudianxinxiList
				},
				{
					path: 'discussjiudianxinxiDetail',
					component: discussjiudianxinxiDetail
				},
				{
					path: 'discussjiudianxinxiAdd',
					component: discussjiudianxinxiAdd
				},
				{
					path: 'discusslvyouxianlu',
					component: discusslvyouxianluList
				},
				{
					path: 'discusslvyouxianluDetail',
					component: discusslvyouxianluDetail
				},
				{
					path: 'discusslvyouxianluAdd',
					component: discusslvyouxianluAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
