/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/3/26
 * Time: 11:53
 */
import {fromJS} from 'immutable'
import * as actionTypes from './constants'

const defaultState = fromJS({
	ifFullScreen: false,
	baiduMapNotice: true
})

export default (state = defaultState, action) => {
	switch (action.type) {
		case actionTypes.TOGGLE_BAIDU_MAP_FULL_SCREEN:
			return state.set('ifFullScreen', action.value)
		case actionTypes.BAIDU_MAP_NOTICE:
			return state.set('baiduMapNotice', action.value)
		default:
			return state
	}
}
