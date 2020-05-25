/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/3/22
 * Time: 15:18
 */
import * as actionTypes from './constants'

const changeMediaModalAction = (value) => ({
	type: actionTypes.CHANGE_MEDIA_MODAL,
	value: value
})

const changeLocalMediaAction = (value) => ({
	type: actionTypes.CHANGE_LOCAL_MEDIA,
	value: value
})

const changeTabAction = (value) => ({
	type: actionTypes.CHANGE_TAB,
	value: value
})

const changeTypeAction = (value) => ({
	type: actionTypes.CHANGE_TYPE,
	value: value
})

const getImageListAction = (value) => ({
	type: actionTypes.GET_IMAGE_LIST,
	value: value
})

const getVideoListAction = (value) => ({
	type: actionTypes.GET_VIDEO_LIST,
	value: value
})

const setImageListAction = (value) => ({
	type: actionTypes.SET_IMAGE_LIST,
	value: value
})

const setVideoListAction = (value) => ({
	type: actionTypes.SET_VIDEO_LIST,
	value: value
})

export {
	changeMediaModalAction,
	changeLocalMediaAction,

	changeTabAction,
	changeTypeAction,

	getImageListAction,
	getVideoListAction,

	setImageListAction,
	setVideoListAction
}
