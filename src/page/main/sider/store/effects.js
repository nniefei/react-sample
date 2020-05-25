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
import * as siderApi from './api'
import {getSS} from '../../../../util/fei-session-storage'

/**
 * work saga
 */
const getSiderList = function* () {
	// 第一次加载接口后将信息存入sessionStorage，后续先判sessionStorage里是否有信息，没有才重新请求
	try {
		const siderList = getSS('SIDER_LIST')
		if (siderList) {
			yield put(actionCreators.setSiderListAction(fromJS(null)))
		} else {
			const siderListData = yield siderApi.getSiderList()
			yield put(actionCreators.setSiderListAction(fromJS(siderListData.data)))
		}
	} catch (e) {
		console.log(e)
	}
}

/**
 * watch saga
 */
const siderFlow = function* () {
	yield takeEvery(actionTypes.GET_SIDER_LIST, getSiderList)
}

export {
	siderFlow
}
