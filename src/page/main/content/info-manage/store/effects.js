/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/3/22
 * Time: 15:18
 */
import { put, takeEvery } from 'redux-saga/effects'
import { fromJS } from 'immutable'
import * as actionTypes from './constants'
import * as actionCreators from './creators'
import * as infoManageApi from './api'

/**
 * work saga
 */
const getImageListAction = function* () {
	const data = yield infoManageApi.getImageList()
	yield put(actionCreators.setImageListAction(fromJS(data.data)))
}
const getVideoListAction = function* () {
	const data = yield infoManageApi.getVideoList()
	yield put(actionCreators.setVideoListAction(fromJS(data.data)))
}

/**
 * watch saga
 */
const infoManageFlow = function* () {
	yield takeEvery(actionTypes.GET_IMAGE_LIST, getImageListAction)
	yield takeEvery(actionTypes.GET_VIDEO_LIST, getVideoListAction)
}

export {
	infoManageFlow
}
