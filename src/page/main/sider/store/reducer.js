/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/2/15
 * Time: 14:03
 */
import * as actionTypes from './constants'
import { fromJS } from 'immutable'
import { getSS, setSS } from '../../../../util/fei-session-storage'

const defaultState = fromJS({
	list: [],
	openKeys: [],
	rootSubmenuKeys: []
})

export default (state = defaultState, action) => {
	switch (action.type) {
		// 储存侧边栏信息，并判断需要激活那一栏侧边栏
		case actionTypes.SET_SIDER_LIST:
		{
			let list = []
			const SIDER_LIST = getSS('SIDER_LIST')
			const SIDER_OPEN_KEY = getSS('SIDER_OPEN_KEY')
			if (SIDER_LIST) {
				SIDER_LIST.map(item => {list.push(item.key)})
				if (SIDER_OPEN_KEY) {
					return state.set('list', fromJS(SIDER_LIST)).set('rootSubmenuKeys', fromJS(list)).set('openKeys', fromJS(SIDER_OPEN_KEY))
				} else {
					return state.set('list', fromJS(SIDER_LIST)).set('rootSubmenuKeys', fromJS(list)).set('openKeys', fromJS([list[0]]))
				}
			} else {
				setSS('SIDER_LIST', JSON.stringify(action.value.toJS()))
				action.value.map(item => {list.push(item.get('key'))})
				return state.set('list', fromJS(action.value)).set('rootSubmenuKeys', fromJS(list)).set('openKeys', fromJS([list[0]]))			}
		}
		// 修改当前激活的侧边栏、并记录进sessionStorage
		case actionTypes.CHANGE_OPEN_KEYS:
		{
			const latestOpenKey = action.value.find(key => state.get('openKeys').indexOf(key) === -1)
			if (state.get('rootSubmenuKeys').indexOf(latestOpenKey) === -1) {
				setSS('SIDER_OPEN_KEY', action.value)
				return state.set('openKeys', fromJS(action.value))
			} else {
				setSS('SIDER_OPEN_KEY', latestOpenKey ? JSON.stringify([latestOpenKey]) : JSON.stringify([]))
				return state.set('openKeys', latestOpenKey ? fromJS([latestOpenKey]) : fromJS([]))
			}
		}
		default:
			return state

	}
}
