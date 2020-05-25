/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/3/1
 * Time: 16:06
 */
import React, { Component } from 'react'
import PropType from 'prop-types'
import { Row, Col } from 'antd'
import { connect } from 'react-redux'
import { getSS, delSS } from '../../../../../util/fei-session-storage'
import FeiTitle from '../../../../../components/fei-title'
import * as FeiFilter from '../../../../../util/fei-filter'
import './style.scss'

class OrderDetail extends Component {

	componentWillUnmount () {
		delSS('ORDER_DETAIL')
	}

	render () {
		const { history } = this.props
		const orderDetail = getSS('ORDER_DETAIL')
		return (
			<div className="fei-orderdetail">
				<FeiTitle title="订单详情" subtitle="返回" history={history}/>
				<div className="detail-block">
					<div>
						<Row type="flex" justify="start" align="middle" className="item-title">当前订单状态：<span className="deal-type">{FeiFilter.dealTypeFilter(orderDetail.dealType)}</span></Row>
					</div>
					<div>
						<Row type="flex" justify="start" align="middle"  className="item-title">订单信息：</Row>
						<Row type="flex" justify="start" align="middle"  className="item-content">
							<Col span={8}>
								<span>订单编号：</span>
								<span>{orderDetail.idNum}</span>
							</Col>
							<Col span={8}>
								<span>付款时间：</span>
								<span>{FeiFilter.stamp2dateFilter(orderDetail.data, 1)}</span>
							</Col>
							<Col span={8}>
								<span>支付方式：</span>
								<span>{FeiFilter.payTypeFilter(orderDetail.paidType)}</span>
							</Col>
						</Row>
					</div>
					<div>
						<Row type="flex" justify="start" align="middle"  className="item-title">买家信息：</Row>
						<Row type="flex" justify="start" align="middle"  className="item-content">
							<Col span={8}>
								<span>买家名称：</span>
								<span>{orderDetail.buyername}</span>
							</Col>
							<Col span={8}>
								<span>手机号码：</span>
								<span>{orderDetail.phone}</span>
							</Col>
							<Col span={8}/>
						</Row>
					</div>
					<div>
						<Row type="flex" justify="start" align="middle"  className="item-title">商品清单：</Row>
						<Row type="flex" justify="start" align="middle"  className="item-content">
							<Col span={8}>
								<span>商品名称：</span>
								<span>{orderDetail.productname}</span>
							</Col>
							<Col span={8}>
								<span>结算总价：</span>
								<span className="price">{FeiFilter.amountFilter(orderDetail.paidPrice)}</span>
							</Col>
							<Col span={8}/>
						</Row>
					</div>
				</div>
			</div>
		)
	}
}

OrderDetail.propTypes = {
	history: PropType.object
}

export default connect(null, null)(OrderDetail)
