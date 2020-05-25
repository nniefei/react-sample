/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/2/26
 * Time: 16:45
 */

import React, { Fragment } from 'react'
import {GoodsOverviewCol, GoodsOverviewRow} from './styled'

const GoodOverview = () => (
	<Fragment>
		<GoodsOverviewCol>
			<GoodsOverviewRow className="title">已上架</GoodsOverviewRow>
			<GoodsOverviewRow className="num">20</GoodsOverviewRow>
		</GoodsOverviewCol>
		<GoodsOverviewCol>
			<GoodsOverviewRow className="title">已下架</GoodsOverviewRow>
			<GoodsOverviewRow className="num">326</GoodsOverviewRow>
		</GoodsOverviewCol>
		<GoodsOverviewCol>
			<GoodsOverviewRow className="title">待审核</GoodsOverviewRow>
			<GoodsOverviewRow className="num">12</GoodsOverviewRow>
		</GoodsOverviewCol>
	</Fragment>
)

export default GoodOverview
