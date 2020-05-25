/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/3/11
 * Time: 11:13
 */
import {fromJS} from 'immutable'
import * as actionTypes from './constants'
import * as feiNotify from '../../../util/fei-notify'

const defaultState = fromJS({
	previewImageVisible: [false, false, false, false, false, false],
	previewImage: ['', '', '', '', '', ''],
	fileList: [[], [], [], [], [], []]
})

export default (state = defaultState, action) => {
	switch (action.type) {
		case actionTypes.SET_IMAGE_LIST:
		{
			if (action.value.get('type') === 'del') {
				return state.set('fileList', state.get('fileList').set(action.value.getIn(['data', 'index']), action.value.getIn(['data', 'value'])))
			} else if (action.value.get('type') === 'add') {
				let modal = {
					// uid: action.value.getIn(['data', 'value', 'hash']),
					uid: new Date().getTime(),
					name: action.value.getIn(['data', 'value', 'key']),
					status: 'done',
					url: action.value.getIn(['data', 'value', 'resouceUrl']) + Date.now()
				}
				let localTotalNum = state.getIn(['fileList', action.value.getIn(['data', 'index'])]).size
				let max = action.value.getIn(['data', 'max'])
				if (localTotalNum > max - 1) {
					feiNotify.error({message: `最多可上传${max}张图片`, msg: `已中断图片${modal.name}上传`})
					console.log(`最多可上传${max}张图片，已中断图片${modal.name}上传`)
					return state
				} else {
					return state.set(
						'fileList', state.get('fileList').set(
							action.value.getIn(['data', 'index']), state.getIn(['fileList', action.value.getIn(['data', 'index'])]).push(modal)
						)
					)
				}
			} else {
				return state
			}
		}
		case actionTypes.CLEAR_IMAGE:
			return state.set('fileList', fromJS([[], [], [], [], [], []]))
		case actionTypes.CHANGE_PREVIEW_IMAGE_VISIBLE:
			return state.set('previewImageVisible', state.get('previewImageVisible').set(action.value.index, action.value.value))
		case actionTypes.CHANGE_PREVIEW_IMAGE:
			return state.set('previewImage', state.get('previewImage').set(action.value.index, action.value.value))
		default:
			return state
	}
}
