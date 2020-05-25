/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/2/27
 * Time: 17:58
 */
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { FeiSmallRoundBtn } from '../../../../../../components/styled'
import { Row, Checkbox, Popconfirm } from 'antd'
import FeiHideMoreSpan from '../../../../../../components/fei-hide-more-span'
import FeiTable from '../../../../../../components/fei-table'
import clipboard from 'clipboard-js'
import * as actionCreator from '../../store/creators'
import * as feiFilter from '../../../../../../util/fei-filter'
import * as feiNotify from '../../../../../../util/fei-notify'
import * as feiMessage from '../../../../../../util/fei-message'

let chooseGoods = []
let selectKey = 'date'

class SearchList extends Component{
	componentDidMount () {
		const { getGoodsList } = this.props
		getGoodsList()
	}
	render () {
		const {
			dataSource, pageNum, pageSize, totalNum, goodsSelectedMark, goodsAllSelectedMark,
			goodsDetail, goodsShelves, goodsEdit, goodsDel, copyOrderId, changePagination, exportList,
			setSelectedGoods, setGoodsAllSelectedMark, allSelected, changeSelectedRowKeys } = this.props
		const dataColumn = [{
			colSpan: 2,
			title: '商品名称',
			dataIndex: 'name',
			render: (value) => (
				<div style={{display: 'flex', 'flexDirection': 'row', 'justityContent': 'center', 'alignItems': 'center'}}>
					<img src="https://via.placeholder.com/30" alt={value} style={{'paddingRight': '9px'}}/>
					<span title={value}>{value}</span>
				</div>)
		}, {
			title: '创建时间',
			dataIndex: 'date',
			render: (value) => (<FeiHideMoreSpan content={feiFilter.stamp2dateFilter(value, 1)}/>)
		}, {
			title: '价格',
			dataIndex: 'price',
			render: (value) => (<span>{feiFilter.priceFilter(value)}</span>)
		}, {
			title: '销量',
			dataIndex: 'saleNum',
			render: (value) => (<span>{feiFilter.amountFilter(value)}</span>)
		}, {
			title: '库存',
			dataIndex: 'storeNum',
			render: (value) => (<span>{feiFilter.amountFilter(value)}</span>)
		}, {
			title: '状态',
			dataIndex: 'status',
			render: (value) => (<span>{feiFilter.goodsTypeFilter(value)}</span>)
		}, {
			title: '操作',
			dataIndex: '',
			key: 'action',
			render: (value) => {
				return (
					<Fragment>
						<FeiSmallRoundBtn style={{marginLeft: '5px'}} onClick={() => (goodsDetail(this, value))}>查看</FeiSmallRoundBtn>
						<FeiSmallRoundBtn style={{marginLeft: '5px'}} onClick={() => (goodsShelves(this, value, 'single'))}>上架</FeiSmallRoundBtn>
						<FeiSmallRoundBtn style={{marginLeft: '5px'}} onClick={() => (goodsEdit(this, value))}>编辑</FeiSmallRoundBtn>
						<Popconfirm
							title="是否删除？"
							okText="是"
							cancelText="否"
							onConfirm={() => (goodsDel(this, value, 'single'))}
						>
							<FeiSmallRoundBtn style={{marginLeft: '5px'}}>删除</FeiSmallRoundBtn>
						</Popconfirm>
						<FeiSmallRoundBtn style={{marginLeft: '5px'}} onClick={() => (copyOrderId(value))}>复制</FeiSmallRoundBtn>
					</Fragment>
				)
			}
		}]
		const rowSelection = {
			selectedRowKeys:  chooseGoods,
			onChange: (selectedRowKeys, selectedRows) => {
				setSelectedGoods(selectedRows)
				setGoodsAllSelectedMark(this, selectedRows)
				changeSelectedRowKeys(selectedRowKeys)
			}
		}
		return (
			<div className="search-list">
				<FeiTable
					uid="date"
					header={() => (
						<Row>
							<Checkbox
								indeterminate={goodsSelectedMark}
								checked={goodsAllSelectedMark}
								onChange={() => (allSelected(this))}
							>全选</Checkbox>
							<FeiSmallRoundBtn style={{marginLeft: '5px'}} onClick={() => (goodsShelves(this, null, 'batch'))}>上架</FeiSmallRoundBtn>
							<Popconfirm
								title="是否删除？"
								okText="是"
								cancelText="否"
								onConfirm={() => (goodsDel(this, null, 'batch'))}
							>
								<FeiSmallRoundBtn style={{marginLeft: '5px'}}>删除</FeiSmallRoundBtn>
							</Popconfirm>
						</Row>
					)}
					rowSelection={rowSelection}
					dataColumn={dataColumn}
					dataSource={dataSource}
					totalNum={totalNum}
					pageNum={pageNum}
					pageSize={pageSize}
					changePagination={changePagination}
					exportList={exportList}
				/>
			</div>
		)
	}
}

const state2props = (state) => {
	return {
		dataSource: state.getIn(['goods', 'goodsList']).toJS(),
		totalNum: state.getIn(['goods', 'totalNum']),
		pageNum: state.getIn(['goods', 'pageNum']),
		pageSize: state.getIn(['goods', 'pageSize']),
		selectedKeys: state.getIn(['goods', 'selectedRowKeys']),
		goodsListSelected: state.getIn(['goods', 'goodsListSelected']),
		goodsSelectedMark: state.getIn(['goods', 'goodsSelectedMark']),
		goodsAllSelectedMark: state.getIn(['goods', 'goodsAllSelectedMark'])
	}
}

const dispatch2props = (dispatch) => {
	return {
		getGoodsList: () => {
			const action = actionCreator.getGoodsListAction()
			dispatch(action)
		},
		// 设置选中的条目
		setSelectedGoods: (data) => {
			const action = actionCreator.setSelectedGoodsAction(data)
			dispatch(action)
		},
		// 设置全选标记
		setGoodsAllSelectedMark: (target, data) => {
			if (data.length === target.props.dataSource.length) { // 全选
				dispatch(actionCreator.setGoodsAllSelectedMarkAction(true))
				dispatch(actionCreator.setGoodsSelectedMarkAction(false))
			} else { // 未全选
				dispatch(actionCreator.setGoodsAllSelectedMarkAction(false))
				if (data.length > 0) { // 有选中的
					dispatch(actionCreator.setGoodsSelectedMarkAction(true))
				} else { // 没有选中的
					dispatch(actionCreator.setGoodsSelectedMarkAction(false))
				}
			}
		},
		changeSelectedRowKeys: (data) => {
			dispatch(actionCreator.changeSelectedRowKeysAction(data))
			chooseGoods = data
		},
		// 全选
		allSelected: (target) => {
			if (target.props.goodsAllSelectedMark) { // 当前已是全选
				chooseGoods = []
				dispatch(actionCreator.changeSelectedRowKeysAction([]))
				dispatch(actionCreator.setSelectedGoodsAction([]))
			} else {  // 当前不是全选
				let keyList = []
				let dataList = []
				target.props.dataSource.map((item) => {
					keyList.push(item[selectKey])
					dataList.push(item)
				})
				chooseGoods = keyList
				dispatch(actionCreator.changeSelectedRowKeysAction(keyList))
				dispatch(actionCreator.setSelectedGoodsAction(dataList))
			}
			dispatch(actionCreator.setGoodsSelectedMarkAction(false))
			dispatch(actionCreator.setGoodsAllSelectedMarkAction(!target.props.goodsAllSelectedMark))
		},
		goodsDetail: (target, data) => {
			console.log(data)
		},
		goodsShelves: (target, data, type) => {
			console.log(target)
			console.log(data)
			console.log(type)
			switch (type) {
				case 'batch': {
					if (target.props.goodsListSelected.length === 0 || target.props.goodsListSelected.size === 0) {
						feiNotify.info({msg: '请选择需要上架的商品！'})
					} else {
						feiNotify.info({msg: `已选择${target.props.goodsListSelected.length}件待上架商品！`})
					}
					break
				}
				default:
					break
			}
		},
		goodsEdit: (target, data) => {
			console.log(data)
		},
		goodsDel: (target, data, type) => {
			console.log(target)
			console.log(data)
			console.log(type)
			switch (type) {
				case 'batch': {
					if (target.props.goodsListSelected.length === 0 || target.props.goodsListSelected.size === 0) {
						feiNotify.info({msg: '请选择需要删除的商品！'})
					} else {
						feiNotify.info({msg: `已选择${target.props.goodsListSelected.length}件待删除商品！`})
					}
					break
				}
				case 'single': {
					feiNotify.info({msg: '删除当前'})
					break
				}
				default:
					break
			}
		},
		changePagination: (pageNum) => {
			const action = actionCreator.changeGoodsListPageAction(pageNum)
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
		copyOrderId: (item) => {
			clipboard.copy(item.id)
			feiNotify.info({msg: `订单号${item.id}已成功复制至剪切板`})
		}
	}
}

SearchList.propTypes = {
	uid: PropTypes.string,

	changePagination: PropTypes.func,
	getGoodsList: PropTypes.func,
	setSelectedGoods: PropTypes.func,
	setGoodsAllSelectedMark: PropTypes.func,
	allSelected: PropTypes.func,
	changeSelectedRowKeys: PropTypes.func,
	goodsDetail: PropTypes.func,
	goodsShelves: PropTypes.func,
	goodsEdit: PropTypes.func,
	goodsDel: PropTypes.func,

	copyOrderId: PropTypes.func,
	exportList: PropTypes.func,

	goodsSelectedMark: PropTypes.bool,
	goodsAllSelectedMark: PropTypes.bool,

	dataColumn: PropTypes.array,
	dataSource: PropTypes.array,

	pageSize: PropTypes.number,
	totalNum: PropTypes.number,
	pageNum: PropTypes.number
}

export default connect(state2props, dispatch2props)(SearchList)
