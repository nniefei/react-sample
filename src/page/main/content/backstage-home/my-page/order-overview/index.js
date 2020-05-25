/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/2/26
 * Time: 17:15
 */
import React, { Fragment } from 'react'
import {OrderOverviewCol, OrderOverviewRow} from './styled'

const OrderOverview = () => (
	<Fragment>
		<OrderOverviewCol>
			<OrderOverviewRow className="title">今日有效订单</OrderOverviewRow>
			<OrderOverviewRow className="num">20</OrderOverviewRow>
		</OrderOverviewCol>
		<OrderOverviewCol>
			<OrderOverviewRow className="title">交易完成</OrderOverviewRow>
			<OrderOverviewRow className="num">326</OrderOverviewRow>
		</OrderOverviewCol>
		<OrderOverviewCol>
			<OrderOverviewRow className="title">待付款</OrderOverviewRow>
			<OrderOverviewRow className="num">12</OrderOverviewRow>
		</OrderOverviewCol>
		<OrderOverviewCol>
			<OrderOverviewRow className="title">待评价</OrderOverviewRow>
			<OrderOverviewRow className="num">36</OrderOverviewRow>
		</OrderOverviewCol>
		<OrderOverviewCol>
			<OrderOverviewRow className="title">交易关闭</OrderOverviewRow>
			<OrderOverviewRow className="num">8</OrderOverviewRow>
		</OrderOverviewCol>
	</Fragment>
)

export default OrderOverview
