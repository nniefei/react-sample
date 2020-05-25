/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/2/25
 * Time: 17:42
 */
import React from 'react'
import {Switch} from 'react-router-dom'
import feiConstructRouteTree from '../../../util/fei-construct-route-tree'
import routeConfigList from '../../../common/route-config'

const FeiContent = () => {
	const contentStyle = {position: 'relative',width: 'calc(100% - 180px)',height: 'calc(100% - 80px)',background: '#f8f8f8',top: '80px',left: '180px'}
	return (
		<div style={contentStyle}>
			<Switch>
				{
					feiConstructRouteTree(
						(routeConfigList.find((item) => (item.key === 'Main')).children).find((item1) => (item1.key === 'OrderList')).children
					)
				},
				{
					feiConstructRouteTree(
						(routeConfigList.find((item) => (item.key === 'Main')).children).find((item1) => (item1.key === 'goods-publish')).children
					)
				},
				{
					feiConstructRouteTree(
						routeConfigList.find((item) => (item.key === 'Main')).children
					)
				}
			</Switch>
		</div>
	)
}

export default FeiContent
