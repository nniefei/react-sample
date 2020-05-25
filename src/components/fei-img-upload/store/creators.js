/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/3/11
 * Time: 11:13
 */
import * as actionTypes from './constants'

const upLoadImageAction = (value) => ({
	type: actionTypes.UPLOAD_IAMGE,
	value: value
})

const setImageFileListAction = (value) => ({
	type: actionTypes.SET_IMAGE_LIST,
	value: value
})

const changePreviewImageAction = (value) => ({
	type: actionTypes.CHANGE_PREVIEW_IMAGE,
	value: value
})

const changePreviewImageVisibleAction = (value) => ({
	type: actionTypes.CHANGE_PREVIEW_IMAGE_VISIBLE,
	value: value
})

const clearImageAction = (value) => ({
	type: actionTypes.CLEAR_IMAGE,
	value: value
})

export {
	upLoadImageAction,
	setImageFileListAction,
	changePreviewImageAction,
	changePreviewImageVisibleAction,
	clearImageAction
}
