/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/2/22
 * Time: 14:59
 */
import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'
import * as actionCreators from './store/creators'
import Menu from 'antd/es/menu'
import { FeiMenuIcon } from '../../../components/fei-menu-icon'
import SiderContentRecursion from './sider-content-recursion'

class SiderContent extends Component {

	componentDidMount () {
		const { getSiderList } = this.props
		getSiderList()
	}

	render () {
		const { siderList, openKeys, onOpenChange } = this.props
		return (
			<Fragment>
				<Menu style={{position: 'relative',top: '80px',zIndex: '99'}} mode="inline" openKeys={openKeys.toJS()} onOpenChange={onOpenChange}>
					{
						siderList.map(firstLevelMenu => {
							return (
								<Menu.SubMenu key={firstLevelMenu.get('key')} title={<FeiMenuIcon icon={firstLevelMenu.get('icon')} title={firstLevelMenu.get('name')}/>}>
									{
										SiderContentRecursion(firstLevelMenu)
									}
								</Menu.SubMenu>
							)
						})
					}
				</Menu>
			</Fragment>
		)
	}
}

const state2Props = (state) => {
	return {
		siderList: state.getIn(['sider', 'list']),
		openKeys: state.getIn(['sider', 'openKeys']),
		rootSubmenuKeys: state.get(['sider', 'rootSubmenuKeys'])
	}
}

const dispatch2Props = (dispatch) => {
	return {
		getSiderList: () => {
			const action = actionCreators.getSiderListAction()
			dispatch(action)
		},
		onOpenChange: (openKeys) => {
			const action = actionCreators.changeOpenKeysAction(openKeys)
			dispatch(action)
		}
	}
}

SiderContent.propTypes = {
	getSiderList: PropTypes.func,
	onOpenChange: PropTypes.func,
	siderList: ImmutablePropTypes.list,
	openKeys: ImmutablePropTypes.list
}

export default connect(state2Props, dispatch2Props)(SiderContent)
