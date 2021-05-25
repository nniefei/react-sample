/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/2/19
 * Time: 14:46
 */

import * as routes from './route-list'
import { ROUTE_TYPE } from './constant'

const routeConfigList = [
	{
		name: 'RootHome',
		key: 'RootHome',
		type: ROUTE_TYPE.REDIRECT,
		auth: false,
		from: '/',
		to: '/main',
		exact: true
	},
	{
		name: 'Main',
		key: 'Main',
		type: ROUTE_TYPE.ROUTE,
		path: '/main',
		auth: false,
		exact: false,
		component: routes.Main,
		children: [

			// =======================================================================================================
			// ===========首页===========首页===========首页===========首页===========首页===========
			// =======================================================================================================

			// 默认重定向到我的首页
			{
				name: 'MainRedirect',
				key: 'MainRedirect',
				type: ROUTE_TYPE.REDIRECT,
				from: '/main',
				to: '/main/mypage',
				exact: true
			},
			// 我的首页
			{
				name: 'MyPage',
				key: 'MyPage',
				type: ROUTE_TYPE.ROUTE,
				path: '/main/mypage',
				auth: false,
				exact: true,
				component: routes.MyPage,
				children: []
			},

			// =======================================================================================================
			// ===========订单管理===========订单管理===========订单管理===========订单管理===========订单管理===========
			// =======================================================================================================

			{   // 订单列表
				name: 'OrderList',
				key: 'OrderList',
				type: ROUTE_TYPE.ROUTE,
				path: '/main/order/list',
				auth: false,
				exact: true,
				component: routes.OrderList,
				children: [
					{   // 订单详情
						name: 'OrderDetail',
						key: 'OrderDetail',
						type: ROUTE_TYPE.ROUTE,
						path: '/main/order/list/detail/:id',
						auth: false,
						exact: true,
						component: routes.OrderDetail,
						children: []
					}
				]
			},

			// =======================================================================================================
			// ===========商品管理===========商品管理===========商品管理===========商品管理===========商品管理===========
			// =======================================================================================================

			// 商品发布
			{
				name: 'goods-publish',
				key: 'goods-publish',
				type: ROUTE_TYPE.REDIRECT,
				from: '/main/goods/publish',
				to: '/main/goods/publish/step1',
				exact: true,
				children: [
					{
						name: 'GoodsPublishStep1',
						key: 'GoodsPublishStep1',
						type: ROUTE_TYPE.ROUTE,
						path: '/main/goods/publish/step1',
						auth: false,
						exact: true,
						component: routes.GoodsPublishStep1,
						children: []
					},
					{
						name: 'GoodsPublishStep2',
						key: 'GoodsPublishStep2',
						type: ROUTE_TYPE.ROUTE,
						path: '/main/goods/publish/step2',
						auth: false,
						exact: true,
						component: routes.GoodsPublishStep2,
						children: []
					}
				]
			},
			// 商品列表
			{
				name: 'GoodsList',
				key: 'GoodsList',
				type: ROUTE_TYPE.ROUTE,
				path: '/main/goods/list',
				auth: false,
				exact: true,
				component: routes.GoodsList,
				children: []
			},

			// =======================================================================================================
			// ===========信息管理===========信息管理===========信息管理===========信息管理===========信息管理===========
			// =======================================================================================================

			// 账户管理
			{
				name: 'InfoAccountManage',
				key: 'InfoAccountManage',
				type: ROUTE_TYPE.ROUTE,
				path: '/main/info/account/manage',
				auth: false,
				exact: true,
				component: routes.InfoAccountManage,
				children: []
			},
			// 门店信息
			{
				name: 'StoresInfo',
				key: 'StoresInfo',
				type: ROUTE_TYPE.ROUTE,
				path: '/main/stores/info',
				auth: false,
				exact: true,
				component: routes.StoresInfo,
				children: []
			},
			// 门店相册
			{
				name: 'StoresAlbum',
				key: 'StoresAlbum',
				type: ROUTE_TYPE.ROUTE,
				path: '/main/stores/album',
				auth: false,
				exact: true,
				component: routes.StoresAlbum,
				children: []
			}
		]
	}
]

export default routeConfigList
