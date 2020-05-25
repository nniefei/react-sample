/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/2/15
 * Time: 14:03
 */
import { combineReducers } from 'redux-immutable'
import { commonReducer } from '../page/store'
import { siderReducer } from '../page/main/sider/store'
import { orderReducer } from '../page/main/content/order-manage/store'
import { goodsReducer } from '../page/main/content/goods-manage/store'
import { uploadImageReducer } from '../components/fei-img-upload/store'
import { uploadVideoReducer } from '../components/fei-video-upload/store'
import { storeInfoReducer } from '../page/main/content/info-manage/store'
import { baiduMapReducer } from '../components/fei-baidu-map/store'

const reducer = combineReducers({
	common: commonReducer,
	sider: siderReducer,
	order: orderReducer,
	uploadImage: uploadImageReducer,
	uploadVideo: uploadVideoReducer,
	goods: goodsReducer,
	storeInfo: storeInfoReducer,
	baiduMap: baiduMapReducer
})

export default reducer

