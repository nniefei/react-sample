/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/3/7
 * Time: 16:55
 */
import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Row, Col, List } from 'antd'
import { fromJS } from 'immutable'
import PropType from 'prop-types'
import * as actionCreators from '../store/creators'
import { FeiLargeWideRoundBtn } from '../../../../../components/styled'
import { setSS } from '../../../../../util/fei-session-storage'
import './style.scss'

class GoodsPublishStep1 extends Component {

	componentDidMount () {
		const { getCategoryList } = this.props
		getCategoryList()
	}

	render () {
		const { firstCategoryList, secondCategoryList, thirdCategoryList, localFirstCategory, localSecondCategory, localThirdCategory, changeCategory, toStep2 } = this.props
		return (
			<div className="goods-publish-box">
				<div className="list">
					<Row className="title-box" type="flex" justify="start" align="middle">
						<Col className="title-0">您当前的商品类别是：</Col>
						<Col className="title-1">{localFirstCategory.categoryName}</Col>
						<Col className="title-2">{localSecondCategory.categoryName}</Col>
						<Col className="title-3">{localThirdCategory.categoryName}</Col>
					</Row>
					<Row gutter={40}>
						<Col span={5}>
							<List
								header={<div>请选择一级品类</div>}
								bordered
								size="small"
								dataSource={firstCategoryList}
								renderItem={(item, index) => (<List.Item className={item.categoryId === localFirstCategory.categoryId ? 'ant-list-item-active' : ''} onClick={() => (changeCategory(this, item, index, 'first'))}>{item.categoryName}</List.Item>)}
							/>
						</Col>
						<Col span={5}>
							<List
								header={<div>请选择二级品类</div>}
								bordered
								size="small"
								dataSource={secondCategoryList}
								renderItem={(item, index) => (<List.Item className={item.categoryId === localSecondCategory.categoryId ? 'ant-list-item-active' : ''} onClick={() => (changeCategory(this, item, index, 'second'))}>{item.categoryName}</List.Item>)}
							/>
						</Col>
						<Col span={5}>
							<List
								header={<div>请选择三级品类</div>}
								bordered
								size="small"
								dataSource={thirdCategoryList}
								renderItem={(item, index) => (<List.Item className={item.categoryId === localThirdCategory.categoryId ? 'ant-list-item-active' : ''} onClick={() => (changeCategory(this, item, index, 'third'))}>{item.categoryName}</List.Item>)}
							/>
						</Col>
					</Row>
					<Row gutter={40} type="flex" justify="start" align="middle">
						<Col span={15} type="flex" justify="center" align="middle">
							<br/>
							<FeiLargeWideRoundBtn className="reverse" onClick={() => (toStep2(this))}>下一步</FeiLargeWideRoundBtn>
						</Col>
					</Row>
				</div>
				<div className="notice">
					<article>
						<p className="title">发布须知：</p>
						<p className="content">禁止发布侵犯他人知识产权的商品，请确认商品符合知识产品保护的规定</p>
					</article>
					<article>
						<p className="title">原则：</p>
						<p className="content">第一条 XXX</p>
						<p className="content">第二条 XXX</p>
						<p className="content">第三条 XXX</p>
					</article>
				</div>
			</div>
		)
	}
}

const state2props = (state) => {
	return {
		firstCategoryList: state.getIn(['goods', 'firstCategoryList']).toJS(),
		secondCategoryList: state.getIn(['goods', 'secondCategoryList']).toJS(),
		thirdCategoryList: state.getIn(['goods', 'thirdCategoryList']).toJS(),
		localFirstCategory: state.getIn(['goods', 'localFirstCategory']).toJS(),
		localSecondCategory: state.getIn(['goods', 'localSecondCategory']).toJS(),
		localThirdCategory: state.getIn(['goods', 'localThirdCategory']).toJS()
	}
}

const dispatch2props = (dispatch) => {
	return {
		getCategoryList: () => {
			const action = actionCreators.getCategorysAction()
			dispatch(action)
		},
		changeCategory: (target, item, index, level) => {
			switch (level) {
				case 'first':
					{
						const tobeSetSecondCategory = target.props.firstCategoryList[index].nextCategoryList && target.props.firstCategoryList[index].nextCategoryList.length > 0 ? target.props.firstCategoryList[index].nextCategoryList : []
						const tobeSetThirdCategory = tobeSetSecondCategory[0].nextCategoryList && tobeSetSecondCategory[0].nextCategoryList.length > 0 ? tobeSetSecondCategory[0].nextCategoryList : []

						const tobeSetSecondLocal = tobeSetSecondCategory && tobeSetSecondCategory.length > 0 ? tobeSetSecondCategory[0] : {}
						const tobeSetThirdLocal = tobeSetThirdCategory && tobeSetThirdCategory.length > 0 ? tobeSetThirdCategory[0] : {}

						// 修改一级类目当前数据
						let changeFirstLocalAction = actionCreators.setLocalFirstCategoryAction(fromJS(item))
						dispatch(changeFirstLocalAction)

						// 修改二级类目列表
						let changeLevelSecondCategoryAction = actionCreators.setLevelSecondCategoryAction(fromJS(tobeSetSecondCategory))
						dispatch(changeLevelSecondCategoryAction)
						// 修改二级类目当前数据
						let changeLevelSecondLocalAction = actionCreators.setLocalSecondCategoryAction(fromJS(tobeSetSecondLocal))
						dispatch(changeLevelSecondLocalAction)

						// 修改三级类目列表
						let changeLevelThirdCategoryAction = actionCreators.setLevelThirdCategoryAction(fromJS(tobeSetThirdCategory))
						dispatch(changeLevelThirdCategoryAction)
						// 修改三级类目当前数据
						let changeLevelThirdLocalAction = actionCreators.setLocalThirdCategoryAction(fromJS(tobeSetThirdLocal))
						dispatch(changeLevelThirdLocalAction)
					}
					break
				case 'second':
					{
						const tobeSetThirdCategory = target.props.secondCategoryList[index].nextCategoryList && target.props.secondCategoryList[index].nextCategoryList.length > 0 ? target.props.secondCategoryList[index].nextCategoryList : []
						const tobeSetThirdLocal = tobeSetThirdCategory && tobeSetThirdCategory.length > 0 ? tobeSetThirdCategory[0] : {}

						// 修改二级类目当前数据
						let changeSecondLocalAction = actionCreators.setLocalSecondCategoryAction(fromJS(item))
						dispatch(changeSecondLocalAction)
						// 修改三级类目列表
						let changeLevelThirdCategoryAction = actionCreators.setLevelThirdCategoryAction(fromJS(tobeSetThirdCategory))
						dispatch(changeLevelThirdCategoryAction)
						// 修改三级类目当前数据
						let changeLevelThirdLocalAction = actionCreators.setLocalThirdCategoryAction(fromJS(tobeSetThirdLocal))
						dispatch(changeLevelThirdLocalAction)

					}
					break
				case 'third':
					{
						// 修改三级类目当前数据
						let changeThirdLocalAction = actionCreators.setLocalThirdCategoryAction(fromJS(item))
						dispatch(changeThirdLocalAction)
					}
					break
				default:
					break
			}
		},
		toStep2: (target) => {
			setSS('LOCAL_FIRST_CATEGORY', JSON.stringify(target.props.localFirstCategory))
			setSS('LOCAL_SECOND_CATEGORY', JSON.stringify(target.props.localSecondCategory))
			setSS('LOCAL_THIRD_CATEGORY', JSON.stringify(target.props.localThirdCategory))
			target.props.history.push({pathname:'/main/goods/publish/step2'})
		}
	}
}

GoodsPublishStep1.propTypes = {
	firstCategoryList: PropType.array,
	secondCategoryList: PropType.array,
	thirdCategoryList: PropType.array,
	localFirstCategory: PropType.object,
	localSecondCategory: PropType.object,
	localThirdCategory: PropType.object,
	getCategoryList: PropType.func,
	changeCategory: PropType.func,
	toStep2: PropType.func
}

export default connect(state2props, dispatch2props)(GoodsPublishStep1)
