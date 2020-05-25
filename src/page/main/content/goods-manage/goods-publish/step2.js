/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/3/7
 * Time: 16:55
 */
import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getSS } from '../../../../../util/fei-session-storage'
import { Form, Input, Row, Col, Select, Radio, Checkbox, DatePicker, Button, Table  } from 'antd'
import {FeiLargeRoundBtn} from '../../../../../components/styled'
import * as feiNotify from '../../../../../util/fei-notify'
import FeiImgUpload from '../../../../../components/fei-img-upload'
import FeiVideoUpload from '../../../../../components/fei-video-upload'
import FeiWangEditor3 from '../../../../../components/fei-wang-editor3'
import PropType from 'prop-types'
import './style.scss'

class GoodsPublishStep2 extends Component {

	constructor (props) {
		super(props)
		this.feiEditorRef = React.createRef()
	}

	getFieldDecoratorTemp = (key, name, initValue, validateFirst, ifRequired, allowWhitespace, component, aRule = []) => {
		aRule = allowWhitespace ? [{required: ifRequired, whitespace: allowWhitespace, message: `${name}不能为空！`}, ...aRule] : [{required: ifRequired, message: `${name}不能为空！`}, ...aRule]
		return this.props.form.getFieldDecorator(key, {
			initialValue: initValue,
			validateFirst: validateFirst,
			rules: aRule
		})(component)
	}

	testLenghtValidator = (rule, value, callback) => {
		if (value.toString().length <= 7) {
			callback('不能少于7个字符！')
		} else {
			callback()
		}
	}

	testImageValidator = (rule, value, callback) => {
		console.log(value)
		if (value <= 0) {
			callback('至少上传1张图片！')
		} else {
			callback()
		}
	}

	render () {
		// const { getFieldDecorator, getFieldValue } = this.props.form
		const { backToStep1, publishGoods, shelvesGoods } = this.props
		const localFirstCategory = getSS('LOCAL_FIRST_CATEGORY')
		const localSecondCategory = getSS('LOCAL_SECOND_CATEGORY')
		const localThirdCategory = getSS('LOCAL_THIRD_CATEGORY')

		const tableColumns = [
			{
				title: '规格1',
				dataIndex: 'specifications1'
			},
			{
				title: '规格2',
				dataIndex: 'specifications2'
			},
			{
				title: '最低结算价',
				dataIndex: 'minPrice'
			},
			{
				title: '零售价',
				dataIndex: 'retailPrice'
			},
			{
				title: '折扣',
				dataIndex: 'discount'
			},
			{
				title: '库存',
				dataIndex: 'storeNum'
			},
			{
				title: '库存预警',
				dataIndex: 'storeNumWarn'
			},
			{
				title: '商品条形码',
				dataIndex: 'productLineCode'
			}
		]
		const tableData = [
			{
				key: 1,
				specifications1: 111,
				specifications2: 111,
				minPrice: 111,
				retailPrice: 111,
				discount: 111,
				storeNum: 111,
				storeNumWarn: 111,
				productLineCode: 111

			},
			{
				key: 2,
				specifications1: 222,
				specifications2: 222,
				minPrice: 222,
				retailPrice: 222,
				discount: 222,
				storeNum: 222,
				storeNumWarn: 222,
				productLineCode: 222

			},
			{
				key: 3,
				specifications1: 333,
				specifications2: 333,
				minPrice: 333,
				retailPrice: 333,
				discount: 333,
				storeNum: 333,
				storeNumWarn: 333,
				productLineCode: 333

			}
		]

		return (
			<div className="goods-publish-box">
				<div className="list">
					<Form layout="horizontal" labelCol={{span: 2}} wrapperCol={{span: 8}}>
						<Form.Item label="商品分类" className="title-box">
							<span className="title-1">{localFirstCategory.categoryName}</span>
							<span className="title-2">{localSecondCategory.categoryName}</span>
							<span className="title-3">{localThirdCategory.categoryName}</span>
							<span className="anticon-settled anticonedit title-4" onClick={() => (backToStep1(this))}>重选分类</span>
						</Form.Item>
						<Form.Item label="商品分类">
							{
								this.getFieldDecoratorTemp('categoryName', '商品分类', '', true, true, true, <Input placeholder="请输入商品分类"/>)
							}
						</Form.Item>
						<Form.Item label="副标题">
							{
								this.getFieldDecoratorTemp('goodsSubTitle', '商品副标题', '', true, true, true, <Input placeholder="请输入商品副标题"/>)
							}
						</Form.Item>
						<Form.Item label="型号">
							{
								this.getFieldDecoratorTemp('goodsModel', '商品型号', '', true, true, true, <Input placeholder="请输入商品型号"/>)
							}
						</Form.Item>
						<Form.Item label="市场价格">
							{
								this.getFieldDecoratorTemp('goodsMarketPrice', '市场价格', '', true, true, true, <Input placeholder="请输入市场价格"/>)
							}
						</Form.Item>
						<Form.Item label="零售价">
							{
								this.getFieldDecoratorTemp('goodsRetailPrice', '零售价', '', true, true, true, <Input placeholder="请输入零售价"/>)
							}
						</Form.Item>
						<Form.Item label="商品卖点">
							{
								this.getFieldDecoratorTemp('goodsSellingPoint', '商品卖点', '', true, true, true, <Input.TextArea rows={4} placeholder="请输入商品卖点"/>,
									[{validator: this.testLenghtValidator}])
							}
						</Form.Item>
						<Form.Item label="商品图片" wrapperCol={{span: 20}}>
							<span>商品主图大小不能超过1MB；最好统一尺寸大小；</span>
							{
								this.getFieldDecoratorTemp('goodsPic', '商品图片', '', true, true, null, <FeiImgUpload multipleBool iuMaxNum={9}/>,
									[{ validator: this.testImageValidator }])
							}
						</Form.Item>
						<Form.Item label="商品视频" wrapperCol={{span: 20}}>
							<span>1.时长：30秒以内，建议6-15秒； 2.尺寸：建议1:1,16:9,利于消费者前台浏览体验；</span>
							<FeiVideoUpload/>
						</Form.Item>
						<Form.Item label="商品属性" wrapperCol={{span: 20}}>
							<span>错误填写商品属性，可能会引起商品描述不符，影响您的正常销售，请认真准确填写！</span>
							<Row style={{padding: '30px', background: '#F8F8F8'}}>
								<Col span={10}>
									<Form.Item label="面料" labelCol={{span: 6}} wrapperCol={{span: 12}}>
										<Select defaultValue="sc">
											<Select.Option value="mb">棉布</Select.Option>
											<Select.Option value="pg">皮革</Select.Option>
											<Select.Option value="sc">丝绸</Select.Option>
										</Select>
									</Form.Item>
									<Form.Item label="适用年龄" labelCol={{span: 6}} wrapperCol={{span: 12}}>
										<Radio.Group style={{'marginTop': '5px'}}>
											<Radio style={{display: 'block', height: '30px', 'lineHeight': '30px'}} value={1}>18-24周岁</Radio>
											<Radio style={{display: 'block', height: '30px', 'lineHeight': '30px'}} value={2}>25-29周岁</Radio>
											<Radio style={{display: 'block', height: '30px', 'lineHeight': '30px'}} value={3}>30-49周岁</Radio>
											<Radio style={{display: 'block', height: '30px', 'lineHeight': '30px'}} value={4}>50周岁以上</Radio>
										</Radio.Group>
									</Form.Item>
									<Form.Item label="日期" labelCol={{span: 6}} wrapperCol={{span: 12}}>
										<DatePicker/>
									</Form.Item>
								</Col>
								<Col span={10}>
									<Form.Item label="成分含量" labelCol={{span: 6}} wrapperCol={{span: 12}}>
										<Select defaultValue="75">
											<Select.Option value="50">50%</Select.Option>
											<Select.Option value="75">75%</Select.Option>
											<Select.Option value="90">90%</Select.Option>
										</Select>
									</Form.Item>
									<Form.Item label="重量" labelCol={{span: 6}} wrapperCol={{span: 12}}>
										<Select defaultValue="250">
											<Select.Option value="100">100g</Select.Option>
											<Select.Option value="250">250g</Select.Option>
											<Select.Option value="500">500g</Select.Option>
										</Select>
									</Form.Item>
								</Col>
							</Row>
						</Form.Item>
						<Form.Item label="商品规格" wrapperCol={{span: 20}}>
							<span>错误填写商品属性，可能会引起商品描述不符，影响您的正常销售，请认真准确填写！</span>
							<div style={{padding: '30px', background: '#F8F8F8'}}>
								<Row><b>规格1</b></Row>
								<Checkbox.Group style={{width: '100%'}}>
									<Row>
										<Col span={6}>
											<Checkbox style={{display: 'block', height: '30px', 'lineHeight': '30px'}} value={1}>18-24周岁</Checkbox>
										</Col>
										<Col span={6}>
											<Checkbox style={{display: 'block', height: '30px', 'lineHeight': '30px'}} value={2}>25-29周岁</Checkbox>
										</Col>
										<Col span={6}>
											<Checkbox style={{display: 'block', height: '30px', 'lineHeight': '30px'}} value={3}>30-49周岁</Checkbox>
										</Col>
										<Col span={6}>
											<Checkbox style={{display: 'block', height: '30px', 'lineHeight': '30px'}} value={4}>50周岁以上</Checkbox>
										</Col>
										<Col span={6}>
											<Checkbox style={{display: 'block', height: '30px', 'lineHeight': '30px'}} value={5}>18-24周岁</Checkbox>
										</Col>
										<Col span={6}>
											<Checkbox style={{display: 'block', height: '30px', 'lineHeight': '30px'}} value={6}>25-29周岁</Checkbox>
										</Col>
										<Col span={6}>
											<Checkbox style={{display: 'block', height: '30px', 'lineHeight': '30px'}} value={7}>30-49周岁</Checkbox>
										</Col>
										<Col span={6}>
											<Checkbox style={{display: 'block', height: '30px', 'lineHeight': '30px'}} value={8}>50周岁以上</Checkbox>
										</Col>
										<Col span={6}>
											<Checkbox style={{display: 'block', height: '30px', 'lineHeight': '30px'}} value={9}>18-24周岁</Checkbox>
										</Col>
										<Col span={6}>
											<Checkbox style={{display: 'block', height: '30px', 'lineHeight': '30px'}} value={10}>25-29周岁</Checkbox>
										</Col>
										<Col span={6}>
											<Checkbox style={{display: 'block', height: '30px', 'lineHeight': '30px'}} value={11}>30-49周岁</Checkbox>
										</Col>
										<Col span={6}>
											<Checkbox style={{display: 'block', height: '30px', 'lineHeight': '30px'}} value={12}>50周岁以上</Checkbox>
										</Col>
										<Col span={6}>
											<Checkbox style={{display: 'block', height: '30px', 'lineHeight': '30px'}} value={13}>18-24周岁</Checkbox>
										</Col>
										<Col span={6}>
											<Checkbox style={{display: 'block', height: '30px', 'lineHeight': '30px'}} value={14}>25-29周岁</Checkbox>
										</Col>
										<Col span={6}>
											<Checkbox style={{display: 'block', height: '30px', 'lineHeight': '30px'}} value={15}>30-49周岁</Checkbox>
										</Col>
										<Col span={6}>
											<Checkbox style={{display: 'block', height: '30px', 'lineHeight': '30px'}} value={16}>50周岁以上</Checkbox>
										</Col>
									</Row>
								</Checkbox.Group>
								<Row><b>规格2</b></Row>
								<Checkbox.Group style={{width: '100%'}}>
									<Row>
										<Col span={6}>
											<Checkbox style={{display: 'block', height: '30px', 'lineHeight': '30px'}} value={180}>180g</Checkbox>
										</Col>
										<Col span={6}>
											<Checkbox style={{display: 'block', height: '30px', 'lineHeight': '30px'}} value={220}>220g</Checkbox>
										</Col>
										<Col span={6}>
											<Checkbox style={{display: 'block', height: '30px', 'lineHeight': '30px'}} value={240}>240g</Checkbox>
										</Col>
										<Col span={6}>
											<Checkbox style={{display: 'block', height: '30px', 'lineHeight': '30px'}} value={280}>280g</Checkbox>
										</Col>
										<Col span={6}>
											<Checkbox style={{display: 'block', height: '30px', 'lineHeight': '30px'}} value={500}>500g</Checkbox>
										</Col>
										<Col span={6}>
											<Checkbox style={{display: 'block', height: '30px', 'lineHeight': '30px'}} value={1000}>1000g</Checkbox>
										</Col>
									</Row>
								</Checkbox.Group>
							</div>
						</Form.Item>
						<Form.Item label="商品性质">
							<Radio.Group value={'dh'}>
								<Radio value={'xh'}>现货</Radio>
								<Radio value={'dh'}>订货</Radio>
							</Radio.Group>
						</Form.Item>
						<Form.Item label="销售方式">
							<Checkbox.Group defaultValue={['md']}>
								<Checkbox value={'pf'}>批发</Checkbox>
								<Checkbox value={'md'}>线下门店供货</Checkbox>
								<Checkbox value={'dz'}>定制</Checkbox>
							</Checkbox.Group>
						</Form.Item>
						<Form.Item label="商品价格" wrapperCol={{span: 22}}>
							<Row gutter={6}>
								<Col span={2}><b>批量填充：</b></Col>
								<Col span={3}><Input placeholder="最低结算价"/></Col>
								<Col span={2}><Input placeholder="零售价"/></Col>
								<Col span={2}><Input placeholder="库存"/></Col>
								<Col span={2}><Input placeholder="库存预警"/></Col>
								<Col span={3}><Input placeholder="商品条形码"/></Col>
								<Col span={6} style={{display: 'flex', 'justifyContent': 'center'}}><span>自动上架：</span>
									<Radio.Group value={'f'}>
										<Radio value={'s'}>是</Radio>
										<Radio value={'f'}>否</Radio>
									</Radio.Group>
								</Col>
								<Col span={2}><Button>确认</Button></Col>
							</Row>
							<Row>
								<Table
									columns={tableColumns}
									dataSource={tableData}
									pagination={false}
									size="small"
									bordered
								/>
							</Row>
							<article>
								<span style={{display: 'block', height: '25px'}}>备注：</span>
								<span style={{display: 'block', height: '25px'}}>应范平台的价格体系包含：结算价，采购价，新零售；</span>
								<span style={{display: 'block', height: '25px'}}>结算价：应范平台与供应商结算的价格；</span>
								<span style={{display: 'block', height: '25px'}}>采购价：采购商在平台批量采购的价格；</span>
								<span style={{display: 'block', height: '25px'}}>新零售：线上c店，线下实体门店的统一零售价格。</span>
							</article>
						</Form.Item>
						<Form.Item label="详情页编辑" wrapperCol={{span: 20}}>
							<span>上传详情页，宽度790像素，高度不限</span>
							<FeiWangEditor3 ref={this.feiEditorRef}/>
						</Form.Item>
						<Row type="flex" justify="center" gutter={16}>
							<Col span={12} style={{display: 'flex', justifyContent: 'flex-end'}}>
								<FeiLargeRoundBtn className="reverse" onClick={() => (publishGoods(this))}>发布</FeiLargeRoundBtn>
							</Col>
							<Col span={12} style={{display: 'flex', justifyContent: 'flex-start'}}>
								<FeiLargeRoundBtn onClick={() => (shelvesGoods())}>上架</FeiLargeRoundBtn>
							</Col>
						</Row>
					</Form>
				</div>
				<div className="notice">
					<article>
						<p className="title">发布须知：</p>
						<p className="content">应范禁止发布侵犯他人知识产权的商品，请确认商品符合知识产品保护的规定</p>
					</article>
					<article>
						<p className="title">应范原则：</p>
						<p className="content">第一条
							为促进开放、透明、分享、责任的新商业文明，保障应范用户合法权益，维护应范正常经营秩序，根据《应范注册协议》及《应范服务协议》、《应范品控标准》，制定本规则</p>
						<p className="content">第二条 应范规则，是对应范用户增加基本义务或限制基本权利的条款</p>
						<p className="content">第三条 违规行为的认定与处理，应基于应范认定的事实并严格依规执行，应范用户在适用规则上一律平等</p>
					</article>
				</div>
			</div>
		)
	}
}

const dispatch2Props = () => {
	return {
		backToStep1: (target) => {
			target.props.history.goBack()
		},
		publishGoods: (target) => {
			console.log(target)
			target.feiEditorRef.current.disableEditor()
			feiNotify.info({msg: '发布'})
		},
		shelvesGoods: () => {
			feiNotify.info({msg: '上架'})
		}
	}
}

GoodsPublishStep2.propTypes = {
	form: PropType.object,

	iuIndex: PropType.number,
	iuTodal: PropType.number,
	iuMaxNum: PropType.number,

	'form.getFieldDecorator': PropType.func,
	'form.getFieldValue': PropType.func,
	getFieldDecorator: PropType.func,
	getFieldValue: PropType.func,
	backToStep1: PropType.func,
	publishGoods: PropType.func,
	shelvesGoods: PropType.func
}

const WrapperGoodsPublishStep2Form = Form.create({
	name: 'GoodsPublishStep2',
	onFieldsChange: (props, fields) => {
		console.log(props)
		console.log(fields)
	}
})(GoodsPublishStep2)

export default connect(null, dispatch2Props)(WrapperGoodsPublishStep2Form)
