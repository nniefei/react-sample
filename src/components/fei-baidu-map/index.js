/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/3/25
 * Time: 17:38
 */
import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Icon } from 'antd'
import PropType from 'prop-types'
import Search from 'antd/es/input/Search'
import * as feiNotify from '../../util/fei-notify'
import * as actionCreators from './store/creators'
import './style.scss'

let localPoint = null
let localPlace = ''

class FeiMap extends Component {
	constructor (props) {
		super(props)
		this.mapRef = React.createRef()
	}

	componentDidMount () {
		document.querySelector('.fei-baidu-map-search input').id = 'suggestId'
		this.props.initMap(this)
	}

	render () {
		const { ifFullScreen, baiduMapNotice, toggleFullScreen, zoomIn, zoomOut, clearMark, searchLocation } = this.props
		return (
			<div className={ifFullScreen ? 'fei-baidu-map-box-full' : 'fei-baidu-map-box'}>
				<div className="fei-baidu-map" ref={this.mapRef}/>
				<Search
					className="fei-baidu-map-search"
					placeholder="输入查询地点关键字"
					onSearch={value => searchLocation(this, value)}
					enterButton
				/>
				<div className="zoom-box">
					<Icon type={ifFullScreen ? 'fullscreen-exit' : 'fullscreen'} onClick={() => (toggleFullScreen(this))} title={ifFullScreen ? '退出全屏' : '全屏查看'}/>
					<Icon type="plus" onClick={() => (zoomIn(this))} title="放大地图"/>
					<Icon type="minus" onClick={() => (zoomOut(this))} title="缩小地图" />
					<Icon type="delete" onClick={() => (clearMark(this))} title="清除所有覆盖层"/>
				</div>
				<div id="searchResultPanel" />
				<span className="info" style={{display: baiduMapNotice ? 'block' : 'none'}}>地图加载中，请稍后。。。</span>
			</div>
		)
	}
}

const state2Props = (state) => {
	return {
		ifFullScreen: state.getIn(['baiduMap', 'ifFullScreen']),
		baiduMapNotice: state.getIn(['baiduMap', 'baiduMapNotice'])
	}
}

const dispatch2Props = (dispatch) => {
	return {
		// 初始化地图
		initMap: (target) => {
			const { BMap, BMapLib, BMAP_STATUS_SUCCESS, BMAP_ANCHOR_TOP_RIGHT, BMAP_DRAWING_MARKER } = window
			// 创建地图实例
			const feiBaiduMap = new BMap.Map(target.mapRef.current)
			target.feiBaiduMap = feiBaiduMap
			// 浏览器定位获取经纬度
			const geolocation = new BMap.Geolocation()
			const coordinate = () => {
				return new Promise((resolve) => {
					geolocation.getCurrentPosition(function (r) {
						if (this.getStatus() === BMAP_STATUS_SUCCESS){
							console.log(r.point)
							// 标记位置
							// target.props.makeMark(target, r.point)  // 地图默认加载时，不标记位置
							resolve(r.point)
						}
						else {
							feiNotify.error({msg: this.getStatus()})
						}
					},{enableHighAccuracy: true})
				})
			}
			coordinate().then(res => {
				// 设置中心点
				const center = new BMap.Point(res.lng, res.lat)
				// 初始化地图，同时设置地图展示级别
				feiBaiduMap.centerAndZoom(center, 15)
				// 去除地图加载提示语
				dispatch(actionCreators.baiduMapNoticeAction(false))

				// 给地图添加检索功能
				// 建立一个自动完成的对象
				const ac = new BMap.Autocomplete({'input': 'suggestId', 'location' : feiBaiduMap})
				//鼠标放在下拉列表上的事件
				ac.addEventListener('onhighlight', function (e) {
					let str = ''
					let value = ''
					let _value = e.fromitem.value
					if (e.fromitem.index > -1) {
						value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business
					}
					str = 'FromItem<br />index = ' + e.fromitem.index + '<br />value = ' + value
					value = ''
					if (e.toitem.index > -1) {
						_value = e.toitem.value
						value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business
					}
					str += '<br />ToItem<br />index = ' + e.toitem.index + '<br />value = ' + value
					document.querySelector('#searchResultPanel').innerHTML = str
				})

				// 鼠标点击下拉列表后的事件
				ac.addEventListener('onconfirm', function (e) {
					let myValue = ''
					let _value = e.item.value
					myValue = _value.province +  _value.city +  _value.district +  _value.street +  _value.business
					document.querySelector('#searchResultPanel').innerHTML = ''
					target.props.searchLocation(target, myValue)
				})

				// 给地图添加右键标记点功能
				const markMenu = new BMap.ContextMenu()
				markMenu.addItem(new BMap.MenuItem('添加标记点', function (e) {
					// 标记位置前，先清除原有的标记
					target.props.clearMark(target)
					// 根据当前坐标标记位置
					target.props.makeMark(target, e)
				}, 0))
				feiBaiduMap.addContextMenu(markMenu)
			}).catch(e => {
				console.log(e)
				feiNotify.error({msg: '地图初始化异常'})
			})
		},

		// 全屏切换
		toggleFullScreen: (target) => {
			const action = actionCreators.toggleBaiduMapFullScreenAction(!target.props.ifFullScreen)
			dispatch(action)
		},

		// 放大地图
		zoomIn: (target) => {
			target.feiBaiduMap.zoomIn()
		},

		// 缩小地图
		zoomOut: (target) => {
			target.feiBaiduMap.zoomOut()
		},

		// 地点搜索
		searchLocation: (target, name) => {
			if (name) {
				target.feiBaiduMap.clearOverlays()
				const { BMap } = window
				let local = ''
				let point = ''
				const mfeiun = function () {
					point = local.getResults().getPoi(0).point
					target.feiBaiduMap.centerAndZoom(point, 15)
					target.props.makeMark(target, point, name)
				}
				local = new BMap.LocalSearch(target.feiBaiduMap, {
					onSearchComplete: mfeiun
				})
				local.search(name)
			} else {
				feiNotify.info({msg: '请输入要查询的地名关键字！'})
			}
		},

		// 逆地址解析
		inverseGeocoder: (target, point) => {
			const { BMap } = window
			return new Promise((resolve) => {
				const geoc = new BMap.Geocoder()
				geoc.getLocation(point, function (rs) {
					const addComp = rs.addressComponents
					const placeName = `${addComp.province}${addComp.city}${addComp.district}${addComp.street}${addComp.streetNumber}`
					resolve(placeName)
				})
			})
		},

		// 标记点
		makeMark: (target, point, searchName) => {
			const { BMap } = window
			localPoint = point
			target.props.inverseGeocoder(target, point).then(res => {
				console.log('=========坐标=========坐标=========坐标=========坐标=========坐标=========')
				console.log(point)
				if (searchName) {
					console.log('=========地点=========地点=========地点=========地点=========地点=========')
					console.log(searchName)
					localPlace = searchName
				} else {
					console.log('=========地点=========地点=========地点=========地点=========地点=========')
					console.log(res)
					localPlace = res
				}
				const mk = new BMap.Marker(point)
				// 给覆盖物添加右键菜单
				const removeMenu = new BMap.ContextMenu()
				const removeMarker = function (e, ee, marker) {target.feiBaiduMap.removeOverlay(marker)}
				removeMenu.addItem(new BMap.MenuItem('删除当前标记', removeMarker.bind(mk)))
				// 标记当前点
				target.feiBaiduMap.addOverlay(mk)
				mk.addContextMenu(removeMenu)
				target.props.locationCall(localPoint, localPlace)
			})

		},

		// 清除所有标记
		clearMark: (target) => {
			localPoint = null
			localPlace = ''
			target.feiBaiduMap.clearOverlays()
		}

	}
}

FeiMap.propTypes = {
	ifFullScreen: PropType.bool,
	baiduMapNotice: PropType.bool,

	initMap: PropType.func,
	toggleFullScreen: PropType.func,
	zoomIn: PropType.func,
	zoomOut: PropType.func,
	clearMark: PropType.func,
	searchLocation: PropType.func
}

export default connect(state2Props, dispatch2Props)(FeiMap)
