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
const uploadVideo = function* (action) {
	try {
		const upLoadData = yield uploadApi.uploadVideo(action.value.value)
		yield put(actionCreators.setVideoFileListAction(fromJS({type: 'add', data: {index: action.value.index, value: upLoadData.data, max: action.value.max}})))
	} catch (e) {
		console.log(e)
	}
}

/**
 * watch saga
 */
const uploadFlow = function* () {
	yield takeEvery(actionTypes.UPLOAD_VIDEO, uploadVideo)
}

export {
	uploadFlow
}
