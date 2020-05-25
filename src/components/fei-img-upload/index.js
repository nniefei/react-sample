/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/3/8
 * Time: 15:34
 */
import React, { Component } from 'react'
import {Icon, Modal, Upload} from 'antd'
import { connect } from 'react-redux'
import {fromJS} from 'immutable'
import PropType from 'prop-types'
import * as actionCreators from './store/creators'
import * as feiNotify from '../../util/fei-notify'
import './style.scss'

class FeiImageUpload extends Component {
	shouldComponentUpdate (nextProps) {
		return nextProps.fileList[this.props.iuIndex].length !== this.props.fileList[this.props.iuIndex].length || nextProps.previewImageVisible[this.props.iuIndex] !== this.props.previewImageVisible[this.props.iuIndex]
	}

	componentWillUnmount () {
		this.props.clearFileList()
	}

	triggerChange = (changedValue) => {
		const onChange = this.props.onChange
		if (onChange) {
			onChange(changedValue)
		}
	}

	render () {
		const { iuIndex, iuTodal, iuMaxNum, fileList, listType, previewImage, previewImageVisible, multipleBool, showUploadList, handleChange, handlePreview, handleCancel, beforeUpload, customRequest, uploadButton } = this.props
		{
			for (let i = 0; i <= iuTodal; i++) {
				if (iuIndex === i) {
					return (
						<div className="clearfix">
							<Upload
								accept=".png,.jpg"
								listType={listType}
								multiple={multipleBool}
								showUploadList={showUploadList}
								fileList={fileList[iuIndex]}
								onChange={(data) => (handleChange(this, data))}
								onPreview={(data) => (handlePreview(this, data))}
								beforeUpload={(data) => (beforeUpload(this, data))}
								customRequest={(data) => (customRequest(this, data))}
							>
								{fileList[iuIndex].length >= iuMaxNum ? null : uploadButton}
							</Upload>
							<Modal visible={previewImageVisible[iuIndex]} footer={null} onCancel={() => (handleCancel(this))}>
								<img alt="example" style={{ width: '100%', height: '100%' }} src={previewImage[iuIndex]} />
							</Modal>
						</div>
					)
				}
			}
		}
	}
}

const state2Props = (state) => {
	return {
		fileList: state.getIn(['uploadImage', 'fileList']).toJS(),
		previewImage: state.getIn(['uploadImage', 'previewImage']).toJS(),
		previewImageVisible: state.getIn(['uploadImage', 'previewImageVisible']).toJS()
	}
}

const dispatch2Props = (dispatch) => {
	return {
		// 增删图片
		handleChange: (target, data) => {
			let iuIndex = target.props.iuIndex
			let triggerIndex = target.props.fileList[iuIndex].length
			if (data.file.status === 'removed') {
				triggerIndex--
				const action = actionCreators.setImageFileListAction(fromJS({type: 'del', data: {index: iuIndex, value: data.fileList}}))
				dispatch(action)
			} else if (data.file.status === 'uploading') {
				triggerIndex++
			}
			target.triggerChange(triggerIndex)
		},
		// 预览
		handlePreview: (target, data) => {
			let iuIndex = target.props.iuIndex
			const actionVisible = actionCreators.changePreviewImageVisibleAction({index: iuIndex, value: true})
			const actionImage = actionCreators.changePreviewImageAction({index: iuIndex, value: data.url || data.thumbUrl})
			dispatch(actionVisible)
			dispatch(actionImage)
		},
		// 取消预览
		handleCancel: (target) => {
			let iuIndex = target.props.iuIndex
			const action = actionCreators.changePreviewImageVisibleAction({index: iuIndex, value: false})
			dispatch(action)
		},
		// 上传之前的一些操作
		beforeUpload: (target, data) => {
			return new Promise((resolve, reject) => {
				if (data.size > 3 * 1024 *1024) {
					feiNotify.error({message: '上传图片大小不得大于1M', msg: `已中断图片${data.name}上传`})
					reject(`图片：${data.name}大小超过1M，已放弃该图片上传！`)
				} else {
					resolve(true)
				}
			})
		},
		// 自定义的上传行为
		customRequest: (target, data) => {
			let iuIndex = target.props.iuIndex
			let iuMaxNum = target.props.iuMaxNum
			const action = actionCreators.upLoadImageAction({index: iuIndex, value: data.file, max: iuMaxNum})
			dispatch(action)
		},
		// clear fileList
		clearFileList: () => {
			const action = actionCreators.clearImageAction(null)
			dispatch(action)
		}
	}
}

FeiImageUpload.propTypes = {
	fileList: PropType.array,  // 已上传的图片列表
	previewImage: PropType.array,  // 当前预览的图片
	previewImageVisible: PropType.array,  // 是否预览图片

	iuIndex: PropType.number,  // 当前是第几个图片上传组件（下标从0开始）
	iuTodal: PropType.number,  // 总共有几个图片上传组件
	iuMaxNum: PropType.number, // 单个组件最多可上传几张图片

	multipleBool: PropType.bool,  // 是否可多选上传
	showUploadList: PropType.bool, // 是否显示上传列表

	onChange: PropType.func,
	handleChange: PropType.func,
	handlePreview: PropType.func,
	handleCancel: PropType.func,
	beforeUpload: PropType.func,
	customRequest: PropType.func,
	clearFileList: PropType.func,

	uploadButton: PropType.object,  // 上传按钮
	listType: PropType.string // 上传列表的内建样式
}

FeiImageUpload.defaultProps = {
	iuIndex: 0, // 默认为第一个图片组件
	iuTodal: 1,  // 默认只有一个上传图片组件
	iuMaxNum: 1, // 默认单个组件最多只能上传一张图片
	multipleBool: false,  // 默认不可可多选
	showUploadList: true,  // 默认显示上传列表
	uploadButton: (  // 默认的上传按钮样式
		<div>
			<Icon type="plus" />
			<div className="ant-upload-text">点击上传</div>
		</div>
	),
	listType: 'picture-card' // 默认的上传列表的内建样式
}

export default connect(state2Props, dispatch2Props)(FeiImageUpload)
