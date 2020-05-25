/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/2/15
 * Time: 14:03
 */
import * as actionTypes from './constants'
import { PAGE } from '../../../../../common/constant'
import { fromJS } from 'immutable'

const defaultState = fromJS({
	endOpen: false,
	startValue: null,
	endValue: null,
	idNumber: '',
	cardNumber: '',
	dealType: '',
	dataSource: [],
	btnNum: 0,
	pageNum: PAGE.NUM,
	pageSize: PAGE.SIZE,
	totalNum: 0
})

export default (state = defaultState, action) => {
	switch (action.type) {
		case actionTypes.SET_ORDER_LIST:
			return state.set('dataSource', action.value.get('data')).set('totalNum', action.value.get('totalNum'))
		case actionTypes.CHANGE_SEARCH_CONDITION:
			switch (action.value.type) {
				case 'startValue':
					return state.set('startValue', action.value.value)
				case 'endValue':
					return state.set('endValue', action.value.value)
				case 'idNumber':
					return state.set('idNumber', action.value.value)
				case 'cardNumber':
					return state.set('cardNumber', action.value.value)
				case 'endOpen':
					return state.set('endOpen', action.value.value)
				case 'dealType':
					return state.set('dealType', action.value.value)
			}
			return state
		case actionTypes.TOGGLE_BTN:
			return state.set('btnNum', action.value)
		case actionTypes.CHANGE_PAGE:
			return state.set('pageNum', action.value)
		default:
			return state

	}
}
