/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/2/15
 * Time: 16:30
 */

import * as actionTypes from './constants'

const getSiderListAction = () => ({
	type: actionTypes.GET_SIDER_LIST
})

const setSiderListAction = (value) => ({
	type: actionTypes.SET_SIDER_LIST,
	value: value
})

const changeOpenKeysAction = (value) => ({
	type: actionTypes.CHANGE_OPEN_KEYS,
	value: value
})

export {
	getSiderListAction,
	setSiderListAction,
	changeOpenKeysAction
}
