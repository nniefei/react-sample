/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/2/26
 * Time: 10:15
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Form, Input, Button, Icon, Select, DatePicker, Col, Row} from 'antd'
import {FeiLargeRoundBtn} from '../../../../../components/styled'
import PropType from 'prop-types'
import FeiImgUpload from '../../../../../components/fei-img-upload'
import FeiMap from '../../../../../components/fei-baidu-map'
import * as FeiNotify from '../../../../../util/fei-notify'
import './style.scss'

let id = 0

class StoresInfoForm extends Component {
	render () {
		const { getFieldDecorator, getFieldValue } = this.props.form
		const { addPhone, removePhone, commitInfo, saveInfo, locationCall, testInput } = this.props
		getFieldDecorator('keys', { initialValue: [] })
		const keys = getFieldValue('keys')
		const formItems = keys.map((k) => (
			<Form.Item required={false} key={k}>
				{getFieldDecorator(`names[${k}]`, {
					validateTrigger: ['onChange', 'onBlur'],
					rules: [{
						required: true,
						whitespace: true,
						message: '手机号或者座机号不能为空！'
					}]
				})(
					<Input placeholder="请输入手机号或者座机号" style={{width: '90%'}}/>
				)}
				{keys.length > 1 ? (
					<Icon
						className="dynamic-delete-button"
						type="minus-circle-o"
						disabled={keys.length === 1}
						onClick={() => (removePhone(this, k))}
					/>
				) : null}
			</Form.Item>
		))

		return (
			<div className="store-info-box">
				<div className="form-box">
					<span className="form-title">基础信息</span>
					<Form className="form-content" layout="horizontal" labelCol={{span: 3}} wrapperCol={{span: 10}}>
						<Form.Item label="门店名称">
							{getFieldDecorator('StoreName', {
								initialValue: '龙船小调.串串火锅',
								rules: [{
									required: true, message: 'Please input your StoreName!'
								}]
							})(
								<Input onChange={() => testInput(this)} />
							)}
						</Form.Item>
						<Form.Item label="门店简介">
							<Input placeholder="请输入门店描述"/>
						</Form.Item>
						<Form.Item label="门店品类">
							<Input placeholder="请输入门店品类，例如餐饮、服饰、服务等~"/>
						</Form.Item>
						<Form.Item label="门店封面图" wrapperCol={{span: 20}}>
							<span>代表门店的图片，例如品牌Logo、门店照片；比例1:1，大小不超过1M；</span>
							<FeiImgUpload multipleBool iuMaxNum={9}/>
						</Form.Item>
						<Form.Item label="门店电话">
							{formItems}
							<Form.Item>
								<Button type="dashed" onClick={() => (addPhone(this))} style={{ width: '60%' }}>
									<Icon type="plus" /> 添加电话号码
								</Button>
							</Form.Item>
						</Form.Item>
						<Form.Item label="门店优惠信息">
							<Input placeholder="请输入门店优惠信息，每个优惠信息之间用英文“”间隔，例如“满50减9”“有Wi-Fi”"/>
						</Form.Item>
						<Form.Item label="营业状态">
							<Select defaultValue="rest">
								<Select.Option value="work">营业中</Select.Option>
								<Select.Option value="rest">休息中</Select.Option>
								<Select.Option value="close">已关门</Select.Option>
							</Select>
						</Form.Item>
						<Form.Item label="营业时间">
							<DatePicker style={{width: '100%'}}/>
						</Form.Item>
					</Form>
				</div>
				<div className="store-location">
					<span className="location-title">地理位置</span>
					<Form className="form-content" layout="horizontal" labelCol={{span: 3}} wrapperCol={{span: 10}}>
						<Form.Item label="地图定位">
							<FeiMap locationCall={locationCall}/>
						</Form.Item>
						<Form.Item label="门店地区">
							<Input placeholder="请输入门店地区信息"/>
						</Form.Item>
						<Form.Item label="门店详细地址">
							<Input placeholder="请输入详细地址信息"/>
						</Form.Item>

						<Row type="flex" justify="center" gutter={16} className="action-bar">
							<Col span={12} style={{display: 'flex', justifyContent: 'flex-end'}}>
								<FeiLargeRoundBtn className="reverse" onClick={commitInfo}>提交</FeiLargeRoundBtn>
							</Col>
							<Col span={12} style={{display: 'flex', justifyContent: 'flex-start'}}>
								<FeiLargeRoundBtn onClick={saveInfo}>保存</FeiLargeRoundBtn>
							</Col>
						</Row>
					</Form>
				</div>
			</div>
		)
	}
}

const dispatch2Props = () => {
	return {
		removePhone: (target, k) => {
			const { form } = target.props
			const keys = form.getFieldValue('keys')
			if (keys.length === 1) {
				return
			}
			form.setFieldsValue({
				keys: keys.filter(key => key !== k)
			})
		},
		addPhone: (target) => {
			const { form } = target.props
			const keys = form.getFieldValue('keys')
			const nextKeys = keys.concat(id++)
			form.setFieldsValue({
				keys: nextKeys
			})
		},
		commitInfo: () => {
			FeiNotify.info({msg: '提交门店信息'})
		},
		saveInfo: () => {
			FeiNotify.info({msg: '保存门店信息'})
		},
		locationCall: (localPoint, localPlace) => {
			console.log(localPoint)
			console.log(localPlace)
		},
		testInput: (target) => {
			console.log(target.props.form.getFieldValue('StoreName'))
		}
	}
}

StoresInfoForm.propTypes = {
	form: PropType.object,

	'for.getFieldDecorator': PropType.func,
	'for.getFieldValue': PropType.func,
	locationCall: PropType.func,
	addPhone: PropType.func,
	removePhone: PropType.func,
	commitInfo: PropType.func,
	saveInfo: PropType.func,
	testInput: PropType.func
}

const WrappedStoresInfoForm = Form.create({ name: 'StoresInfo' })(StoresInfoForm)

export default connect(null, dispatch2Props)(WrappedStoresInfoForm)
