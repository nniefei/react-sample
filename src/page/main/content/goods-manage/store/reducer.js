/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/3/6
 * Time: 10:45
 */
import {fromJS} from 'immutable'
import * as actionTypes from './constants'
import {PAGE} from '../../../../../common/constant'

const defaultState = fromJS({
	firstCategoryList: [],
	secondCategoryList: [],
	thirdCategoryList: [],
	localFirstCategory: {},
	localSecondCategory: {},
	localThirdCategory: {},

	selectedRowKeys: [],
	goodsList: [],
	goodsListSelected: [],
	goodsSelectedMark: false,
	goodsAllSelectedMark: false,
	goodsListType: 1,

	pageNum: PAGE.NUM,
	pageSize: PAGE.SIZE,
	totalNum: 0
})

export default (state = defaultState, action) => {
	switch (action.type) {
		// 设置各分类列表
		case actionTypes.SET_LEVEL_FIRST_CATEGORY:
			return state.set('firstCategoryList', action.value)
		case actionTypes.SET_LEVEL_SECOND_CATEGORY:
			return state.set('secondCategoryList', action.value)
		case actionTypes.SET_LEVEL_THIRD_CATEGORY:
			return state.set('thirdCategoryList', action.value)

		// 设置各分类当前激活的数据
		case actionTypes.SET_LOCAL_FIRST_CATEGORY:
			return state.set('localFirstCategory', action.value)
		case actionTypes.SET_LOCAL_SECOND_CATEGORY:
			return state.set('localSecondCategory', action.value)
		case actionTypes.SET_LOCAL_THIRD_CATEGORY:
			return state.set('localThirdCategory', action.value)

		// 修改商品列表类型
		case actionTypes.CHANGE_GOODS_LIST_TYPE:
			return state.set('goodsListType', action.value)

		// 设置商品列表
		case actionTypes.SET_GOODS_LIST:
			return state.set('goodsList', action.value.get('data')).set('totalNum', action.value.get('totalNum'))

		// 选中的商品列表
		case actionTypes.SELECTED_GOODS:
			return state.set('goodsListSelected', action.value)

		// 商品列表未全选时，标示列表内有选中项的标记
		case actionTypes.GOODS_SELECTED_MARK:
			return state.set('goodsSelectedMark', action.value)

		// 商品列表全选时的标记
		case actionTypes.GOODS_ALL_SELECTED_MARK:
			return state.set('goodsAllSelectedMark', action.value)

		case actionTypes.SELECTED_ROW_KEYS:
			return state.set('selectedRowKeys', action.value)

		// 翻页
		case actionTypes.CHANGE_GOODS_LIST_PAGE:
			return state.set('pageNum', action.value)

		default:
			return state
	}
}
