/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/2/26
 * Time: 10:15
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fromJS} from 'immutable'
import { Row, Col, Button, Divider, Modal, Popconfirm } from 'antd'
import PropType from 'prop-types'
import mediaEmpty from '../../../../../static/image/info-manage/media_empty.png'
import play from '../../../../../static/image/info-manage/play.png'
import FeiVideoUpload from '../../../../../components/fei-video-upload'
import FeiImgUpload from '../../../../../components/fei-img-upload'
import FeiTitle from '../../../../../components/fei-title'
import * as actionCreators from '../store/creators'
import './style.scss'

class StoresAlbum extends Component {
	componentDidMount () {
		const { getImageList, getVideoList } = this.props
		getImageList()
		getVideoList()
	}
	shouldComponentUpdate (nextProps) {
		const { imageAdd, videoAdd, tabNum } = this.props
		if (nextProps.imageFileList[0].length !== this.props.imageFileList[0].length && tabNum === 1) {
			imageAdd(this, [...nextProps.imageFileList[0]].pop())
		}
		if (nextProps.videoFileList[0].length !== this.props.videoFileList[0].length && tabNum === 2) {
			videoAdd(this, [...nextProps.videoFileList[0]].pop())
		}
		return nextProps.imageList.length !== this.props.imageList.length ||
			nextProps.videoList.length !== this.props.videoList.length ||
			nextProps.tabNum !== this.props.tabNum ||
			nextProps.typeNum !== this.props.typeNum ||
			nextProps.localMedia !== this.props.localMedia ||
			nextProps.mediaModal.visible !== this.props.mediaModal.visible
	}

	render () {
		const { mediaModal, tabNum, typeNum, changeTabNum, changeTypeNum, renderImageOrVideo, closeModal } = this.props
		return (
			<div className="fei-store-album-box">
				<FeiTitle title="门店相册"/>
				<div className="fei-store-album-title">
					<Row type="flex" justify="start" className="tab" gutter={24}>
						<Col span={8} className="album-title-left">
							<Button onClick={() => (changeTabNum(1))} className={tabNum===1 ? 'tab-btn tab-btn-selected' : 'tab-btn'}>门店图片</Button><Divider type="vertical" />
							<Button onClick={() => (changeTabNum(2))} className={tabNum===2 ? 'tab-btn tab-btn-selected' : 'tab-btn'}>门店视频</Button><Divider type="vertical" />
						</Col>
						<Col span={16} className="album-title-right">
							<span>门店相关图片，每张最好不要超过1M；门店视频最好控制在10s内</span>
						</Col>
					</Row>
					<Row type="flex" justify="start" className="tab" gutter={24}>
						<Col span={8} className="album-title-left">
							<span onClick={() => (changeTypeNum(1))} className={typeNum===1 ? 'type-btn type-btn-selected' : 'type-btn'}>综合排序</span>
							<span onClick={() => (changeTypeNum(2))} className={typeNum===2 ? 'type-btn type-btn-selected' : 'type-btn'}>按时间排序</span>
							<span onClick={() => (changeTypeNum(3))} className={typeNum===3 ? 'type-btn type-btn-selected' : 'type-btn'}>按名称排序</span>
						</Col>
						<Col span={16} className="album-title-right">
							{
								tabNum === 1 ?
									<FeiImgUpload multipleBool iuMaxNum={100} showUploadList={false} listType="text" uploadButton={(<Button icon="upload">上传图片</Button>)}/> :
									<FeiVideoUpload multipleBool iuMaxNum={100} showUploadList={false} listType="text" uploadButton={(<Button icon="upload">上传视频</Button>)}/>
							}
						</Col>
					</Row>
				</div>
				<div className="fei-store-album-content">
					{renderImageOrVideo(this, tabNum)}
				</div>
				<Modal footer={null} centered visible={mediaModal.visible} onCancel={() => (closeModal())}>
					{
						mediaModal.type === 'image' ?
							<img src={mediaModal.url} alt="图片" style={{width: '100%'}}/> :
							<video src={mediaModal.url} style={{width: '100%'}} controls/>
					}
				</Modal>
			</div>
		)
	}
}

const state2Props = (state) => {
	return {
		mediaModal: state.getIn(['storeInfo', 'mediaModal']).toJS(),
		localMedia: state.getIn(['storeInfo', 'localMedia']),
		tabNum: state.getIn(['storeInfo', 'tabNum']),
		typeNum: state.getIn(['storeInfo', 'typeNum']),
		imageList: state.getIn(['storeInfo', 'imageList']).toJS(),
		videoList: state.getIn(['storeInfo', 'videoList']).toJS(),
		imageFileList: state.getIn(['uploadImage', 'fileList']).toJS(),
		videoFileList: state.getIn(['uploadVideo', 'fileList']).toJS()
	}
}

const dispatch2Props = (dispatch) => {
	return {
		renderImageOrVideo: (target, tabNum) => {
			const { showModal, localMedia, imageList, videoList, imageDel, videoDel, mouseOverMedia, mouserOutMedia } = target.props
			switch (tabNum) {
				case 1:
					if (imageList && imageList.length > 0) {
						return (
							<div>
								{
									imageList.map((item, index) => {
										return (
											<div key={item} className="img-box" onMouseOver={() => (mouseOverMedia(item))} onMouseOut={() => (mouserOutMedia())}>
												<div><img src={item} alt="图片" onClick={() => (showModal(this, item, 'image'))}/></div>
												<div hidden={item !== localMedia}>
													<Popconfirm
														title="是否删除？"
														okText="是"
														cancelText="否"
														onConfirm={() => (imageDel(target, item, index))}
													>
														<span>删除图片</span>
													</Popconfirm>
												</div>
											</div>
										)
									})
								}
							</div>
						)
					} else {
						return (
							<div style={{'dispaly': 'flex', 'flexDirection': 'column', 'justifyContent': 'center', 'alignItems': 'center' }}>
								<br/><img src={mediaEmpty} alt="空图片状态"/><br/>
								<p>哎呀，竟然还没有上传图片！</p>
							</div>
						)
					}
				case 2:
					if (videoList && videoList.length > 0) {
						return (
							<div>
								{
									videoList.map((item, index) => {
										return (
											<div key={item} className="video-box" onMouseOver={() => (mouseOverMedia(item))} onMouseOut={() => (mouserOutMedia())}>
												<div>
													<img className="video-play-btn" src={play} alt="play"/>
													<video src={item} onClick={() => (showModal(this, item, 'video'))} />
												</div>
												<div hidden={item !== localMedia}>
													<Popconfirm
														title="是否删除？"
														okText="是"
														cancelText="否"
														onConfirm={() => (videoDel(target, item, index))}
													>
														<span>删除视频</span>
													</Popconfirm>
												</div>
											</div>
										)
									})
								}
							</div>
						)
					} else {
						return (
							<div style={{'dispaly': 'flex', 'flexDirection': 'column', 'justifyContent': 'center', 'alignItems': 'center' }}>
								<br/><img src={mediaEmpty} alt="空视频状态"/><br/>
								<p>哎呀，竟然还没有上传视频！</p>
							</div>
						)
					}
				default:
					return null
			}
		},
		changeTabNum: (num) => {
			const action = actionCreators.changeTabAction(num)
			dispatch(action)
		},
		changeTypeNum: (num) => {
			const action = actionCreators.changeTypeAction(num)
			dispatch(action)
		},
		getImageList: () => {
			const action = actionCreators.getImageListAction()
			dispatch(action)
		},
		getVideoList: () => {
			const action = actionCreators.getVideoListAction()
			dispatch(action)
		},
		mouseOverMedia: (item) => {
			const action = actionCreators.changeLocalMediaAction(item)
			dispatch(action)
		},
		mouserOutMedia: () => {
			const action = actionCreators.changeLocalMediaAction('')
			dispatch(action)
		},
		imageDel: (target, item, index) => {
			const newImageList = target.props.imageList.filter((item1, index1) => (index !== index1))
			const action = actionCreators.setImageListAction(fromJS(newImageList))
			dispatch(action)
		},
		videoDel: (target, item, index) => {
			const newVideoList = target.props.videoList.filter((item1, index1) => (index !== index1))
			const action = actionCreators.setVideoListAction(fromJS(newVideoList))
			dispatch(action)
		},
		imageAdd: (target, localImage) => {
			const newImageList = [...target.props.imageList, localImage.url]
			const action = actionCreators.setImageListAction(fromJS(newImageList))
			dispatch(action)
		},
		videoAdd: (target, localVideo) => {
			const newVideoList = [...target.props.videoList, localVideo.url]
			const action = actionCreators.setVideoListAction(fromJS(newVideoList))
			dispatch(action)
		},
		showModal: (target, url, type) => {
			const action = actionCreators.changeMediaModalAction(fromJS({visible: true, url: url, type: type}))
			dispatch(action)
		},
		closeModal: () => {
			const action = actionCreators.changeMediaModalAction(fromJS({visible: false, url: ''}))
			dispatch(action)
		}
	}
}

StoresAlbum.propTypes = {
	mediaModal: PropType.object,

	localMedia: PropType.string,

	tabNum: PropType.number,
	typeNum: PropType.number,

	imageList: PropType.array,
	videoList: PropType.array,
	imageFileList: PropType.array,
	videoFileList: PropType.array,

	renderImageOrVideo: PropType.func,
	changeTabNum: PropType.func,
	changeTypeNum: PropType.func,
	getImageList: PropType.func,
	getVideoList: PropType.func,
	mouseOverMedia: PropType.func,
	mouserOutMedia: PropType.func,
	imageDel: PropType.func,
	videoDel: PropType.func,
	imageAdd: PropType.func,
	videoAdd: PropType.func,
	showModal: PropType.func,
	closeModal: PropType.func
}

export default connect(state2Props, dispatch2Props)(StoresAlbum)
