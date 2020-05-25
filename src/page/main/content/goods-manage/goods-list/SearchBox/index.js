/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/2/26
 * Time: 17:57
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Form, Input, Row, Col, Button, DatePicker, Select, Divider} from 'antd'
import PropTypes from 'prop-types'
import * as actionCreators from '../../store/creators'

class SearchBox extends Component{
	render () {
		const { tabNum, changeGoodsListType } = this.props
		return (
			<div className="search-box">
				<Row type="flex" justify="start" className="tab">
					<Col span={24}>
						<Button className={tabNum===1 ? 'tab-btn tab-btn-selected' : 'tab-btn'} onClick={() => (changeGoodsListType(1))}>全部</Button><Divider type="vertical" />
						<Button className={tabNum===2 ? 'tab-btn tab-btn-selected' : 'tab-btn'} onClick={() => (changeGoodsListType(2))}>上架中</Button><Divider type="vertical" />
						<Button className={tabNum===3 ? 'tab-btn tab-btn-selected' : 'tab-btn'} onClick={() => (changeGoodsListType(3))}>审核中</Button><Divider type="vertical" />
						<Button className={tabNum===4 ? 'tab-btn tab-btn-selected' : 'tab-btn'} onClick={() => (changeGoodsListType(4))}>下架中</Button><Divider type="vertical" />
						<Button className={tabNum===5 ? 'tab-btn tab-btn-selected' : 'tab-btn'} onClick={() => (changeGoodsListType(5))}>违规商品</Button>
					</Col>
				</Row>
				<Form layout="horizontal" labelCol={{span: 5}} wrapperCol={{span: 19}}>
					<Row gutter={24}>
						<Col span={8}>
							<Form.Item label="商品名称">
								<Input/>
							</Form.Item>
						</Col>
						<Col span={8}>
							<Form.Item label="销售方式">
								<Select defaultValue="xs">
									<Select.Option value="xx">线下</Select.Option>
									<Select.Option value="xs">线上</Select.Option>
								</Select>
							</Form.Item>
						</Col>
						<Col span={8}>
							<Form.Item label="商品状态">
								<Select defaultValue="audit">
									<Select.Option value="up">上架中</Select.Option>
									<Select.Option value="audit">审核中</Select.Option>
									<Select.Option value="down">下架中</Select.Option>
									<Select.Option value="out">违规商品</Select.Option>
								</Select>
							</Form.Item>
						</Col>
					</Row>
					<Row gutter={24}>
						<Col span={8}>
							<Form.Item label="商品价格">
								<Row gutter={24}>
									<Col span={12} className="range-input-left"><Input/></Col>
									<Col span={12} className="range-input-right"><Input/></Col>
								</Row>
							</Form.Item>
						</Col>
						<Col span={8}>
							<Form.Item label="发布时间">
								<DatePicker style={{width: '100%'}}/>
							</Form.Item>
						</Col>
						<Col span={8}>
							<Form.Item label="商品品类">
								<Select defaultValue="1">
									<Select.Option value="1">一类</Select.Option>
									<Select.Option value="2">二类</Select.Option>
									<Select.Option value="3">三类</Select.Option>
								</Select>
							</Form.Item>
						</Col>
					</Row>
					<Row gutter={24}>
						<Col span={24} style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
							<span>清除条件</span>&nbsp;&nbsp;
							<Button>搜索</Button>
						</Col>
					</Row>
				</Form>
			</div>
		)
	}
}

const state2props = (state) => {
	return {
		tabNum: state.getIn(['goods', 'goodsListType'])
	}
}

const dispatch2props = (dispatch) => {
	return {
		changeGoodsListType: (num) => {
			const action = actionCreators.changeGoodsListTypeAction(num)
			dispatch(action)
		}
	}
}

SearchBox.propTypes = {
	tabNum: PropTypes.number,
	changeGoodsListType: PropTypes.func
}

export default connect(state2props, dispatch2props)(SearchBox)
