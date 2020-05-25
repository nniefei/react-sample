/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/2/20
 * Time: 10:18
 */
import React, { Fragment } from 'react'
import { HashRouter } from 'react-router-dom'
import routeConfigList from './common/route-config'
import feiConstructRouteTree from './util/fei-construct-route-tree'

const FeiRoute = () => (
	<HashRouter>
		<Fragment>{feiConstructRouteTree(routeConfigList)}</Fragment>
	</HashRouter>
)

export default FeiRoute
