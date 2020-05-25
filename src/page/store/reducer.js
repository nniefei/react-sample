/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/2/15
 * Time: 14:03
 */
import * as actionTypes from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
	flag: false
})

export default (state = defaultState, action) => {
	switch (action.type) {
		case actionTypes.TOGGLE_LOADING_FLAG:
			return state.set('flag', fromJS(action.value))
		default:
			return state

	}
}
