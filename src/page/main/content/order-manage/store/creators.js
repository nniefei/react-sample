/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/2/15
 * Time: 16:30
 */

import * as actionTypes from './constants'

const setOrderListAction = (value) => ({
	type: actionTypes.SET_ORDER_LIST,
	value: value
})

const getOrderListAction = (value) => ({
	type: actionTypes.GET_ORDER_LIST,
	value: value
})

const changeSearchConditionAction = (value) => ({
	type: actionTypes.CHANGE_SEARCH_CONDITION,
	value: value
})

const toggleBtnAction = (value) => ({
	type: actionTypes.TOGGLE_BTN,
	value: value
})

const changePageAction = (value) => ({
	type: actionTypes.CHANGE_PAGE,
	value: value
})

export {
	setOrderListAction,
	getOrderListAction,
	changeSearchConditionAction,
	toggleBtnAction,
	changePageAction
}
