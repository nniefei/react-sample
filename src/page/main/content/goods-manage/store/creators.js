/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/3/6
 * Time: 10:44
 */
import * as actionTypes from './constants'

const getCategorysAction = (value) => ({
	type: actionTypes.GET_CATEGORYS,
	value: value
})

const setLevelFirstCategoryAction = (value) => ({
	type: actionTypes.SET_LEVEL_FIRST_CATEGORY,
	value: value
})

const setLevelSecondCategoryAction = (value) => ({
	type: actionTypes.SET_LEVEL_SECOND_CATEGORY,
	value: value
})

const setLevelThirdCategoryAction = (value) => ({
	type: actionTypes.SET_LEVEL_THIRD_CATEGORY,
	value: value
})

const setLocalFirstCategoryAction = (value) => ({
	type: actionTypes.SET_LOCAL_FIRST_CATEGORY,
	value: value
})

const setLocalSecondCategoryAction = (value) => ({
	type: actionTypes.SET_LOCAL_SECOND_CATEGORY,
	value: value
})

const setLocalThirdCategoryAction = (value) => ({
	type: actionTypes.SET_LOCAL_THIRD_CATEGORY,
	value: value
})

const getGoodsListAction = (value) => ({
	type: actionTypes.GET_GOODS_LIST,
	value: value
})

const setGoodsListAction = (value) => ({
	type: actionTypes.SET_GOODS_LIST,
	value: value
})

const changeGoodsListPageAction = (value) => ({
	type: actionTypes.CHANGE_GOODS_LIST_PAGE,
	value: value
})

const changeGoodsListTypeAction = (value) => ({
	type: actionTypes.CHANGE_GOODS_LIST_TYPE,
	value: value
})

const setSelectedGoodsAction = (value) => ({
	type: actionTypes.SELECTED_GOODS,
	value: value
})

const setGoodsSelectedMarkAction = (value) => ({
	type: actionTypes.GOODS_SELECTED_MARK,
	value: value
})

const setGoodsAllSelectedMarkAction = (value) => ({
	type: actionTypes.GOODS_ALL_SELECTED_MARK,
	value: value
})

const changeSelectedRowKeysAction = (value) => ({
	type: actionTypes.SELECTED_ROW_KEYS,
	value: value
})

export {
	getCategorysAction,
	setLevelFirstCategoryAction,
	setLevelSecondCategoryAction,
	setLevelThirdCategoryAction,
	setLocalFirstCategoryAction,
	setLocalSecondCategoryAction,
	setLocalThirdCategoryAction,
	getGoodsListAction,
	setGoodsListAction,
	changeGoodsListPageAction,
	changeGoodsListTypeAction,
	setSelectedGoodsAction,
	setGoodsSelectedMarkAction,
	setGoodsAllSelectedMarkAction,
	changeSelectedRowKeysAction
}
