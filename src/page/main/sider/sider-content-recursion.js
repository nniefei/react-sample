/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/2/22
 * Time: 16:26
 */
import React from 'react'
import Menu from 'antd/es/menu'
import { NavLink } from 'react-router-dom'

const SiderContentRecursion = (firstLevelMenu) => {
	return firstLevelMenu.get('children').map(secondLevelMenu => {
		if (secondLevelMenu.get('children').size > 0) {
			return (
				<Menu.SubMenu key={secondLevelMenu.get('key')} title={secondLevelMenu.get('name')}>
					{
						SiderContentRecursion(secondLevelMenu)
					}
				</Menu.SubMenu>
			)
		} else {
			return (
				<Menu.Item key={secondLevelMenu.get('key')}>
					<NavLink to={`${secondLevelMenu.get('path')}`} activeStyle={{color: '#03A861'}}>{secondLevelMenu.get('name')}</NavLink>
				</Menu.Item>
			)
		}
	})
}

export default SiderContentRecursion
