/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/3/6
 * Time: 10:43
 */
const GET_CATEGORYS = 'goods/get_categorys'

// 设置各级分类列表数据
const SET_LEVEL_FIRST_CATEGORY = 'goods/set_level_first_category'
const SET_LEVEL_SECOND_CATEGORY = 'goods/set_level_second_category'
const SET_LEVEL_THIRD_CATEGORY = 'goods/set_level_third_category'

// 设置各级分类当前选中数据
const SET_LOCAL_FIRST_CATEGORY = 'goods/set_local_first_category'
const SET_LOCAL_SECOND_CATEGORY = 'goods/set_local_second_category'
const SET_LOCAL_THIRD_CATEGORY = 'goods/set_local_third_category'

// 获取商品列表
const GET_GOODS_LIST = 'goods/get_goods_list'
// 存储商品列表
const SET_GOODS_LIST = 'goods/set_goods_list'
// 商品列表切换分页
const CHANGE_GOODS_LIST_PAGE = 'goods/list/change_page'
// 切换商品列表类型
const CHANGE_GOODS_LIST_TYPE = 'goods/change_goods_list_type'
// 选中的商品
const SELECTED_GOODS = 'goods/selected_goods'
// 商品列表多选标记
const GOODS_SELECTED_MARK = 'goods/selected_mark'
// 商品全选标记
const GOODS_ALL_SELECTED_MARK = 'goods/all_selected_mark'

const SELECTED_ROW_KEYS = 'goods/selected_row_keys'

export {
	GET_CATEGORYS,
	SET_LEVEL_FIRST_CATEGORY,
	SET_LEVEL_SECOND_CATEGORY,
	SET_LEVEL_THIRD_CATEGORY,
	SET_LOCAL_FIRST_CATEGORY,
	SET_LOCAL_SECOND_CATEGORY,
	SET_LOCAL_THIRD_CATEGORY,
	GET_GOODS_LIST,
	SET_GOODS_LIST,
	CHANGE_GOODS_LIST_PAGE,
	CHANGE_GOODS_LIST_TYPE,
	SELECTED_GOODS,
	GOODS_SELECTED_MARK,
	GOODS_ALL_SELECTED_MARK,
	SELECTED_ROW_KEYS
}
