/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/3/22
 * Time: 15:18
 */
import * as actionTypes from './constants'
import {fromJS} from 'immutable'

const defaultState = fromJS({
	mediaModal: {visible: false, url: '', type: ''},
	localMedia: '',
	tabNum: 1,
	typeNum: 1,
	imageList: [],
	videoList: []
})

export default (state = defaultState, action) => {
	switch (action.type) {
		case actionTypes.CHANGE_MEDIA_MODAL:
			return state.set('mediaModal', action.value)
		case actionTypes.CHANGE_LOCAL_MEDIA:
			return state.set('localMedia', action.value)

		case actionTypes.CHANGE_TAB:
			return state.set('tabNum', action.value)
		case actionTypes.CHANGE_TYPE:
			return state.set('typeNum', action.value)

		case actionTypes.SET_IMAGE_LIST:
			return state.set('imageList', action.value)
		case actionTypes.SET_VIDEO_LIST:
			return state.set('videoList', action.value)

		default:
			return state
	}
}
