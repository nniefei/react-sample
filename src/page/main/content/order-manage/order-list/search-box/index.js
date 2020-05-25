/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/2/26
 * Time: 17:57
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import moment from 'moment'
import * as actionCreator from '../../store/creators'
import {Row, Col, Button, DatePicker, Input, Form} from 'antd'
import {FeiNomallRoundBtn} from '../../../../../../components/styled'

class SearchBox extends Component{

	disabledStartDate = (startValue) => {
		const endValue = this.props.endValue
		if (!startValue || !endValue) {
			return false
		}
		return startValue.valueOf() > endValue.valueOf()
	}

	disabledEndDate = (endValue) => {
		const startValue = this.props.startValue
		if (!endValue || !startValue) {
			return false
		}
		return endValue.valueOf() <= startValue.valueOf()
	}

	onStartChange = (value) => {
		this.onChange('startValue', value)
	}

	onEndChange = (value) => {
		this.onChange('endValue', value)
	}

	onChange = (field, value) => {
		this.props.changeSearchCondition({type: field, value: value})
	}

	handleStartOpenChange = (open) => {
		if (!open) {
			this.props.changeSearchCondition({type: 'endOpen', value: true})
		}
	}

	handleEndOpenChange = (open) => {
		this.props.changeSearchCondition({type: 'endOpen', value: open})
	}

	changeIdNumber = (e) => {
		const value = e.target.value
		this.props.changeSearchCondition({type: 'idNumber', value: value})
	}

	changeCardNumber = (e) => {
		const value = e.target.value
		this.props.changeSearchCondition({type: 'cardNumber', value: value})
	}

	quickTime = (num) => {
		const { changeSearchCondition, tottleBtn } = this.props
		switch (num) {
			case 1:
				changeSearchCondition({type: 'startValue', value: moment(Date.now())})
				changeSearchCondition({type: 'endValue', value: moment(Date.now())})
				tottleBtn(num)
				break
			case 2:
				changeSearchCondition({type: 'startValue', value: moment(Date.now() - 24 * 60 * 60 * 1000)})
				changeSearchCondition({type: 'endValue', value: moment(Date.now())})
				tottleBtn(num)
				break
			case 3:
				changeSearchCondition({type: 'startValue', value: moment(Date.now() - 24 * 60 * 60 * 1000 * 6)})
				changeSearchCondition({type: 'endValue', value: moment(Date.now())})
				tottleBtn(num)
				break
			case 4:
				changeSearchCondition({type: 'startValue', value: moment(Date.now() - 24 * 60 * 60 * 1000 * 29)})
				changeSearchCondition({type: 'endValue', value: moment(Date.now())})
				tottleBtn(num)
				break
			case 5:
				tottleBtn(num)
				break
			case 6:
				tottleBtn(num)
				break
		}
	}

	render () {
		const { startValue, endValue, endOpen, btnNum } = this.props
		return (
			<div className="search-box">
				<Row className="row-1">
					<FeiNomallRoundBtn className={btnNum===1 ? 'row-1-btn row-1-btn-selected' : 'row-1-btn'} onClick={() => (this.quickTime(1))}>今天</FeiNomallRoundBtn>
					<FeiNomallRoundBtn className={btnNum===2 ? 'row-1-btn row-1-btn-selected' : 'row-1-btn'} onClick={() => (this.quickTime(2))}>昨天</FeiNomallRoundBtn>
					<FeiNomallRoundBtn className={btnNum===3 ? 'row-1-btn row-1-btn-selected' : 'row-1-btn'} onClick={() => (this.quickTime(3))}>近7天</FeiNomallRoundBtn>
					<FeiNomallRoundBtn className={btnNum===4 ? 'row-1-btn row-1-btn-selected' : 'row-1-btn'} onClick={() => (this.quickTime(4))}>近30天</FeiNomallRoundBtn>
					<FeiNomallRoundBtn className={btnNum===5 ? 'row-1-btn row-1-btn-selected' : 'row-1-btn'} onClick={() => (this.quickTime(5))}>交易成功</FeiNomallRoundBtn>
					<FeiNomallRoundBtn className={btnNum===6 ? 'row-1-btn row-1-btn-selected' : 'row-1-btn'} onClick={() => (this.quickTime(6))}>交易失败</FeiNomallRoundBtn>
				</Row>
				<Form layout="horizontal" labelCol={{span: 0}} wrapperCol={{span: 24}}>
					<Row gutter={24} className="row-2">
						<Col span={8}>
							<Form.Item label="订单时间：" labelCol={{span: 5}} wrapperCol={{span: 19}}>
								<Row gutter={24}>
									<Col span={12}>
										<DatePicker className="date-range-left" disabledDate={this.disabledStartDate} format="YYYY-MM-DD" value={startValue} placeholder="请选择开始时间" onChange={this.onStartChange} onOpenChange={this.handleStartOpenChange}  />
									</Col>
									<Col span={12}>
										<DatePicker className="date-range-right" disabledDate={this.disabledEndDate} format="YYYY-MM-DD" value={endValue} placeholder="请选择结束时间" onChange={this.onEndChange} open={endOpen} onOpenChange={this.handleEndOpenChange}  />
									</Col>
								</Row>
							</Form.Item>
						</Col>
						<Col span={3}>
							<Form.Item label="">
								<Input placeholder="请输入订单编号" onChange={this.changeIdNumber} />
							</Form.Item>
						</Col>
						<Col span={3}>
							<Form.Item label="">
								<Input placeholder="请输入付款账号" onChange={this.changeCardNumber} />
							</Form.Item>
						</Col>
						<Col span={3}>
							<Form.Item label="">
								<Button>搜索</Button>
							</Form.Item>
						</Col>
					</Row>
				</Form>
			</div>
		)
	}
}

const state2props = (state) => {
	return {
		endOpen: state.getIn(['order', 'endOpen']),
		startValue: state.getIn(['order', 'startValue']),
		endValue: state.getIn(['order', 'endValue']),
		idNumber: state.getIn(['order', 'idNumber']),
		cardNumber: state.getIn(['order', 'cardNumber']),
		btnNum: state.getIn(['order', 'btnNum'])
	}
}

const dispatch2props = (dispatch) => {
	return {
		changeSearchCondition: (value) => {
			const action = actionCreator.changeSearchConditionAction(value)
			dispatch(action)
		},
		tottleBtn: (value) => {
			const action = actionCreator.toggleBtnAction(value)
			dispatch(action)
		}
	}
}

SearchBox.propTypes = {
	startValue: PropTypes.object,
	endValue: PropTypes.object,
	btnNum: PropTypes.number,
	endOpen: PropTypes.bool,
	tottleBtn: PropTypes.func,
	changeSearchCondition: PropTypes.func
}

export default connect(state2props, dispatch2props)(SearchBox)
