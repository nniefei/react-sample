/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/3/11
 * Time: 11:13
 */
import { fromJS } from 'immutable'
import { put, takeEvery } from 'redux-saga/effects'
import * as actionTypes from './constants'
import * as actionCreators from './creators'
import * as uploadApi from './api'

/**
 * work saga
 */
const uploadImage = function* (action) {
	try {
		const upLoadData = yield uploadApi.uploadImg(action.value.value)
		yield put(actionCreators.setImageFileListAction(fromJS({type: 'add', data: {index: action.value.index, value: upLoadData, max: action.value.max}})))
	} catch (e) {
		console.log(e)
	}
}

/**
 * watch saga
 */
const uploadFlow = function* () {
	yield takeEvery(actionTypes.UPLOAD_IAMGE, uploadImage)
}

export {
	uploadFlow
}
