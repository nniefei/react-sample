/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/3/11
 * Time: 11:13
 */
import * as actionTypes from './constants'

const upLoadVideoAction = (value) => ({
	type: actionTypes.UPLOAD_VIDEO,
	value: value
})

const setVideoFileListAction = (value) => ({
	type: actionTypes.SET_VIDEO_LIST,
	value: value
})

const changePreviewVideoAction = (value) => ({
	type: actionTypes.CHANGE_PREVIEW_VIDEO,
	value: value
})

const changePreviewVideoVisibleAction = (value) => ({
	type: actionTypes.CHANGE_PREVIEW_VIDEO_VISIBLE,
	value: value
})

const clearVideoAction = (value) => ({
	type: actionTypes.CLEAR_VIDEO,
	value: value
})

export {
	upLoadVideoAction,
	setVideoFileListAction,
	changePreviewVideoAction,
	changePreviewVideoVisibleAction,
	clearVideoAction
}
