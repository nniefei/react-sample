/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/2/20
 * Time: 14:24
 */
import React from 'react'
import {ROUTE_TYPE} from '../common/constant'
import {Redirect, Route} from 'react-router-dom'

const feiConstructRouteTree = (dataList) => (
	dataList.map(item => {
		switch (item.type) {
			case ROUTE_TYPE.ROUTE:
				return <Route exact={item.exact} path={item.path} component={item.component} key={item.key} />
			case ROUTE_TYPE.REDIRECT:
				return <Route exact={item.exact} path={item.from} render={() => (<Redirect to={item.to} />)} key={item.key} />
			default:
				return null
		}
	})
)

export default feiConstructRouteTree
