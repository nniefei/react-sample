/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/2/19
 * Time: 9:22
 */
import { all, fork } from 'redux-saga/effects'
import * as siderEffects from '../page/main/sider/store/effects'
import * as orderEffects from '../page/main/content/order-manage/store/effects'
import * as goodsEffects from '../page/main/content/goods-manage/store/effects'
import * as uploadImageEffects from '../components/fei-img-upload/store/effects'
import * as uploadVideoEffects from '../components/fei-video-upload/store/effects'
import * as infoManageEffects from '../page/main/content/info-manage/store/effects'

export default function* rootSaga () {
	yield all([
		fork(siderEffects.siderFlow),
		fork(orderEffects.orderFlow),
		fork(goodsEffects.goodsFlow),
		fork(uploadImageEffects.uploadFlow),
		fork(uploadVideoEffects.uploadFlow),
		fork(infoManageEffects.infoManageFlow)
	])
}
