/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/3/26
 * Time: 11:52
 */
import * as actionTypes from './constants'

const toggleBaiduMapFullScreenAction = (value) => ({
	type: actionTypes.TOGGLE_BAIDU_MAP_FULL_SCREEN,
	value: value
})

const baiduMapNoticeAction = (value) => ({
	type: actionTypes.BAIDU_MAP_NOTICE,
	value: value
})

export {
	toggleBaiduMapFullScreenAction,
	baiduMapNoticeAction
}
