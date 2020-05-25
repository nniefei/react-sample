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
	previewVideoVisible: [false, false, false, false, false, false],
	previewVideo: ['', '', '', '', '', ''],
	fileList: [[], [], [], [], [], []]
})

export default (state = defaultState, action) => {
	switch (action.type) {
		case actionTypes.SET_VIDEO_LIST:
		{
			if (action.value.get('type') === 'del') {
				return state.set('fileList', state.get('fileList').set(action.value.getIn(['data', 'index']), action.value.getIn(['data', 'value'])))
			} else {
				let modal = {
					uid: action.value.getIn(['data', 'value', 'hash']),
					name: action.value.getIn(['data', 'value', 'key']),
					status: 'done',
					url: action.value.getIn(['data', 'value', 'resouceUrl'])
				}
				let localTotalNum = state.getIn(['fileList', action.value.getIn(['data', 'index'])]).size
				let max = action.value.getIn(['data', 'max'])
				if (localTotalNum > max - 1) {
					feiNotify.error({message: `最多可上传${max}个视频`, msg: `已中断视频${modal.name}上传`})
					console.log(`最多可上传${max}个视频，已中断视频${modal.name}上传`)
					return state
				} else if (action.value.get('type') === 'add') {
					return state.set(
						'fileList', state.get('fileList').set(
							action.value.getIn(['data', 'index']), state.getIn(['fileList', action.value.getIn(['data', 'index'])]).push(modal)
						)
					)
				} else if (action.value.get('type') === 'clear') {
					return state.set(
						'fileList', state.get('fileList').set(
							action.value.getIn(['data', 'index']), []
						)
					)
				} else {
					return state
				}
			}
		}
		case actionTypes.CLEAR_VIDEO:
			return state.set('fileList', fromJS([[], [], [], [], [], []]))
		case actionTypes.CHANGE_PREVIEW_VIDEO_VISIBLE:
			return state.set('previewVideoVisible', state.get('previewVideoVisible').set(action.value.index, action.value.value))
		case actionTypes.CHANGE_PREVIEW_VIDEO:
			return state.set('previewVideo', state.get('previewVideo').set(action.value.index, action.value.value))
		default:
			return state
	}
}
