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
import * as actionCreators from './store/creators'
import './style.scss'
import PropType from 'prop-types'
import * as feiNotify from '../../util/fei-notify'

class FeiVideoUpload extends Component {
	componentDidMount () {
		this.props.setPreviewVideoView()
	}
	shouldComponentUpdate (nextProps) {
		return nextProps.fileList[this.props.iuIndex].length !== this.props.fileList[this.props.iuIndex].length || nextProps.previewVideoVisible[this.props.iuIndex] !== this.props.previewVideoVisible[this.props.iuIndex]
	}
	componentDidUpdate () {
		this.props.setPreviewVideoView()
	}

	componentWillUnmount () {
		this.props.clearFileList()
	}

	render () {
		const { iuIndex, iuTodal, iuMaxNum, fileList, listType, previewVideo, previewVideoVisible, multipleBool, showUploadList, handleChange, handlePreview, handleCancel, beforeUpload, customRequest, uploadButton } = this.props
		{
			for (let i = 0; i<= iuTodal; i++) {
				if (iuIndex === i) {
					return (
						<div className="clearfix fei-video-upload">
							<Upload
								accept=".mp4"

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
							<Modal visible={previewVideoVisible[iuIndex]} footer={null} onCancel={() => (handleCancel(this))}>
								<video style={{ width: '100%', height: '100%' }} src={previewVideo[iuIndex]} controls="controls"/>
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
		fileList: state.getIn(['uploadVideo', 'fileList']).toJS(),
		previewVideo: state.getIn(['uploadVideo', 'previewVideo']).toJS(),
		previewVideoVisible: state.getIn(['uploadVideo', 'previewVideoVisible']).toJS()
	}
}

const dispatch2Props = (dispatch) => {
	return {
		// 增删图片
		handleChange: (target, data) => {
			let iuIndex = target.props.iuIndex
			if (data.file.status === 'removed') {
				const action = actionCreators.setVideoFileListAction(fromJS({type: 'del', data: {index: iuIndex, value: data.fileList}}))
				dispatch(action)
			}
		},
		// 预览
		handlePreview: (target, data) => {
			let iuIndex = target.props.iuIndex
			const actionVisible = actionCreators.changePreviewVideoVisibleAction({index: iuIndex, value: true})
			const actionImage = actionCreators.changePreviewVideoAction({index: iuIndex, value: data.url || data.thumbUrl})
			dispatch(actionVisible)
			dispatch(actionImage)
		},
		// 取消预览
		handleCancel: (target) => {
			let iuIndex = target.props.iuIndex
			const action = actionCreators.changePreviewVideoVisibleAction({index: iuIndex, value: false})
			dispatch(action)
		},
		// 上传之前的一些操作
		beforeUpload: (target, data) => {
			return new Promise((resolve, reject) => {
				if (data.size > 20 * 1024 *1024) {
					feiNotify.error({message: '上传视频大小不得大于20M', msg: `已中断视频${data.name}上传`})
					reject(`图片：${data.name}大小超过20M，已放弃该视频上传！`)
				} else {
					resolve(true)
				}
			})
		},
		// 自定义的上传行为
		customRequest: (target, data) => {
			let iuIndex = target.props.iuIndex
			let iuMaxNum = target.props.iuMaxNum
			const action = actionCreators.upLoadVideoAction({index: iuIndex, value: data.file, max: iuMaxNum})
			dispatch(action)
		},
		// setPreviewVideoView
		setPreviewVideoView () {
			const imgs = document.querySelectorAll('.fei-video-upload .ant-upload-list-item-thumbnail')
			for (let i = 0; i<imgs.length; i++){
				let video = document.createElement('video')
				video.src = imgs[i].href
				video.style.width = '100%'
				video.style.height = '100%'
				imgs[i].innerHTML = ''
				imgs[i].append(video)
			}
		},
		// clear fileList
		clearFileList: () => {
			const action = actionCreators.clearVideoAction(null)
			dispatch(action)
		}
	}
}

FeiVideoUpload.propTypes = {
	fileList: PropType.array,  // 已上传的视频列表
	previewVideo: PropType.array,  // 当前预览的视频
	previewVideoVisible: PropType.array,  // 是否预览视频

	iuIndex: PropType.number,  // 当前是第几个视频上传组件（下标从0开始）
	iuTodal: PropType.number,  // 总共有几个视频上传组件
	iuMaxNum: PropType.number,  // 单个组件最多可上传几张视频

	multipleBool: PropType.bool,  // 是否可多选上传
	showUploadList: PropType.bool, // 是否显示上传列表

	handleChange: PropType.func,
	handlePreview: PropType.func,
	handleCancel: PropType.func,
	beforeUpload: PropType.func,
	customRequest: PropType.func,
	clearFileList: PropType.func,
	setPreviewVideoView: PropType.func,

	uploadButton: PropType.object,  // 上传按钮
	listType: PropType.string // 上传列表的内建样式
}

FeiVideoUpload.defaultProps = {
	iuIndex: 0, // 默认为第一个上传组件
	iuTodal: 1,  // 默认只有一个上传组件
	iuMaxNum: 1, // 默认单个组件最多只能上传一个视频
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

export default connect(state2Props, dispatch2Props)(FeiVideoUpload)
