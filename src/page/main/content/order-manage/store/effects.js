/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/2/19
 * Time: 10:56
 */
import { fromJS } from 'immutable'
import { put, takeEvery } from 'redux-saga/effects'
import * as actionTypes from './constants'
import * as actionCreators from './creators'
import * as orderApi from './api'

/**
 * work saga
 */
const getOrderList = function* () {
	try {
		const data = yield orderApi.getOrderList()
		yield put(actionCreators.setOrderListAction(fromJS({data: data.data, totalNum: data.totalNum})))
		yield put(actionCreators.changePageAction(data.pageNum))
	} catch (e) {
		console.log('网络异常')
	}
}

/**
 * watch saga
 */
const orderFlow = function* () {
	yield takeEvery(actionTypes.GET_ORDER_LIST, getOrderList)
}

export {
	orderFlow
}
