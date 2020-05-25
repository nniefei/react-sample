/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/2/27
 * Time: 17:58
 */
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {FeiSmallRoundBtn} from '../../../../../../components/styled'
import PropTypes from 'prop-types'
import FeiTable from '../../../../../../components/fei-table'
import FeiHideMoreSpan from '../../../../../../components/fei-hide-more-span'
import clipboard from 'clipboard-js'
import * as actionCreator from '../../store/creators'
import * as feiFilter from '../../../../../../util/fei-filter'
import * as feiNotify from '../../../../../../util/fei-notify'
import * as feiMessage from '../../../../../../util/fei-message'
import * as FeiSS from '../../../../../../util/fei-session-storage'

class SearchList extends Component{
	componentDidMount () {
		const { getOrderList } = this.props
		getOrderList()
	}
	render () {
		const { dataSource, orderDetail, copyOrderId, changePagination, exportList, pageNum, pageSize, totalNum } = this.props
		const { columnWidth } = { columnWidth: 100 }
		const dataColumn = [{
			title: '订单编号',
			dataIndex: 'idNum',
			width: columnWidth,
			render: (value) => (<FeiHideMoreSpan width={`${columnWidth}px`} content={value}/>)
		}, {
			title: '创建时间',
			dataIndex: 'date',
			render: (value) => (<span>{feiFilter.stamp2dateFilter(value, 1)}</span>)
		}, {
			title: '付款账号',
			dataIndex: 'cardNum',
			width: columnWidth,
			render: (value) => (<FeiHideMoreSpan width={`${columnWidth}px`} content={value}/>)
		}, {
			title: '支付金额（元）',
			dataIndex: 'paidPrice',
			render: (value) => (<span>{feiFilter.priceFilter(value)}</span>)
		}, {
			title: '支付方式',
			dataIndex: 'paidType',
			render: (value) => (<span>{feiFilter.payTypeFilter(value)}</span>)
		}, {
			title: '交易状态',
			dataIndex: 'dealType',
			render: (value) => (<span>{feiFilter.dealTypeFilter(value)}</span>)
		}, {
			title: '操作',
			dataIndex: '',
			key: 'action',
			render: (value) => {
				return (
					<Fragment>
						<FeiSmallRoundBtn onClick={() => (orderDetail(this, value))}>查看详情</FeiSmallRoundBtn>
						<FeiSmallRoundBtn onClick={() => (copyOrderId(value))} style={{marginLeft: '5px'}}>复制单号</FeiSmallRoundBtn>
					</Fragment>
				)
			}
		}]
		return (
			<Fragment>
				<FeiTable
					uid="date"
					dataColumn={dataColumn}
					dataSource={dataSource}
					totalNum={totalNum}
					pageNum={pageNum}
					pageSize={pageSize}
					changePagination={changePagination}
					exportList={exportList}
				/>
			</Fragment>
		)
	}
}

const state2props = (state) => {
	return {
		dataSource: state.getIn(['order', 'dataSource']).toJS(),
		totalNum: state.getIn(['order', 'totalNum']),
		pageNum: state.getIn(['order', 'pageNum']),
		pageSize: state.getIn(['order', 'pageSize'])
	}
}

const dispatch2props = (dispatch) => {
	return {
		getOrderList: () => {
			const action = actionCreator.getOrderListAction()
			dispatch(action)
		},
		changePagination: (pageNum) => {
			const action = actionCreator.changePageAction(pageNum)
			dispatch(action)
			feiMessage.info({msg: `当前第${pageNum}页`})
		},
		exportList: (num) => {
			if (num === 1) {
				feiNotify.info({msg: '导全部'})
			} else if (num === 0) {
				feiNotify.info({msg: '导当前页'})
			}
		},
		orderDetail: (target, item) => {
			FeiSS.setSS('ORDER_DETAIL', JSON.stringify(item)).then(() => {
				target.props.history.push({pathname:'/main/order/list/detail/' + item.idNum})
			})
		},
		copyOrderId: (item) => {
			clipboard.copy(item.idNum)
			feiNotify.info({msg: `订单号${item.idNum}已成功复制至剪切板`})
		}
	}
}

SearchList.propTypes = {
	uid: PropTypes.string,
	changePagination: PropTypes.func,
	getOrderList: PropTypes.func,
	orderDetail: PropTypes.func,
	copyOrderId: PropTypes.func,
	exportList: PropTypes.func,
	dataColumn: PropTypes.array,
	dataSource: PropTypes.array,
	pageSize: PropTypes.number,
	totalNum: PropTypes.number,
	pageNum: PropTypes.number
}

export default connect(state2props, dispatch2props)(SearchList)
