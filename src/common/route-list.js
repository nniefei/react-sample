/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/2/20
 * Time: 16:57
 */

// 路由按需加载

import Loadable from 'react-loadable'
import * as feiLoading  from '../util/fei-loading'

const Main = Loadable({
	loader: () => import('../page/main'),
	loading: feiLoading.Blank
})

const MyPage = Loadable({
	loader: () => import('../page/main/content/backstage-home/my-page'),
	loading: feiLoading.Blank
})

const OrderList = Loadable({
	loader: () => import('../page/main/content/order-manage/order-list'),
	loading: feiLoading.Blank
})

const OrderDetail = Loadable({
	loader: () => import('../page/main/content/order-manage/order-detail'),
	loading: feiLoading.Blank
})

const GoodsPublishStep1 = Loadable({
	loader: () => import('../page/main/content/goods-manage/goods-publish/step1'),
	loading: feiLoading.Blank
})

const GoodsPublishStep2 = Loadable({
	loader: () => import('../page/main/content/goods-manage/goods-publish/step2'),
	loading: feiLoading.Blank
})

const GoodsList = Loadable({
	loader: () => import('../page/main/content/goods-manage/goods-list'),
	loading: feiLoading.Blank
})

const InfoAccountManage = Loadable({
	loader: () => import('../page/main/content/info-manage/info-account-manage'),
	loading: feiLoading.Blank
})

const StoresAlbum = Loadable({
	loader: () => import('../page/main/content/info-manage/stores-album'),
	loading: feiLoading.Blank
})

const StoresInfo = Loadable({
	loader: () => import('../page/main/content/info-manage/stores-info'),
	loading: feiLoading.Blank
})

export {
	Main,
	MyPage,
	OrderList,
	OrderDetail,
	GoodsPublishStep1,
	GoodsPublishStep2,
	GoodsList,
	InfoAccountManage,
	StoresAlbum,
	StoresInfo
}
