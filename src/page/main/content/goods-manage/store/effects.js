/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/3/6
 * Time: 10:44
 */
import { put, takeEvery } from 'redux-saga/effects'
import { fromJS } from 'immutable'
import * as actionTypes from './constants'
import * as actionCreators from './creators'
import * as goodsApi from './api'

/**
 * work saga
 */
const getGoodsCategory = function* () {
	try {
		// 获取分类信息
		const data = yield goodsApi.getCategorys()
		console.log(data)
		// 存储各分类信息
		yield put(actionCreators.setLevelFirstCategoryAction(fromJS(data.data)))
		yield put(actionCreators.setLevelSecondCategoryAction(fromJS(data.data[0].nextCategoryList)))
		yield put(actionCreators.setLevelThirdCategoryAction(fromJS(data.data[0].nextCategoryList[0].nextCategoryList)))

		// 设置各分类初始激活的数据
		yield put(actionCreators.setLocalFirstCategoryAction(fromJS(data.data[0])))
		yield put(actionCreators.setLocalSecondCategoryAction(fromJS(data.data[0].nextCategoryList[0])))
		yield put(actionCreators.setLocalThirdCategoryAction(fromJS(data.data[0].nextCategoryList[0].nextCategoryList[0])))
	} catch (e) {
		console.log(e)
	}
}
const getGoodsListAction = function* () {
	try {
		// 获取商品列表
		const data = yield goodsApi.getGoodsList()
		// 存储商品列表信息
		yield put(actionCreators.setGoodsListAction(fromJS({data: data.data, totalNum: data.totalNum})))
		yield put(actionCreators.changeGoodsListPageAction(data.pageNum))
	} catch (e) {
		console.log(e)
	}
}

/**
 * watch saga
 */
const goodsFlow = function* () {
	yield takeEvery(actionTypes.GET_CATEGORYS, getGoodsCategory)
	yield takeEvery(actionTypes.GET_GOODS_LIST, getGoodsListAction)
}

export {
	goodsFlow
}
