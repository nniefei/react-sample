/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/2/20
 * Time: 14:41
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import PropType from 'prop-types'
import loadingGif from '../static/image/loading.gif'
import * as actionCreators from '../page/store/creators'
import feiEmitter from '../util/fei-event'
import feiEvent from './fei-event'

const LoadingWrapper = styled.div.attrs((props) => (props.showLoading ? '' : {hidden: true}))`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(255, 255, 255, 0.5);
	margin: 0;
	padding: 0;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	z-index: 10000;
`

const LoadingBox = styled.div`
	border-radius: 25px;
	background: black;
	opacity: 0.5;
	width: 150px;
	height: 150px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`

const LoadingImg = styled.img.attrs({
	src: loadingGif
})`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`

class Loading extends Component {

	componentDidMount () {
		const { changeLoadingFlag } = this.props
		this.eventEmitter = feiEmitter.addListener('CHANGE_LOADING_FLAG', (flag) => {
			changeLoadingFlag(flag)
		})
	}

	componentWillUnmount () {
		feiEmitter.removeListener(this.eventEmitter)
	}

	render () {
		const { flag } = this.props
		return (
			<LoadingWrapper showLoading={flag}>
				<LoadingBox>
					<LoadingImg/>
				</LoadingBox>
			</LoadingWrapper>
		)
	}
}

const Blank = () => {
	return null
}

const state2props = (state) => {
	return {
		flag: state.getIn(['common', 'flag'])
	}
}

const dispatch2props = (dispatch) => {
	return {
		changeLoadingFlag: (flag) => {
			const action = actionCreators.toggleLoadingFlagAction(flag)
			dispatch(action)
		}
	}
}

const showLoading = () => {
	feiEvent.emit('CHANGE_LOADING_FLAG', true)
}

const hideLoading = () => {
	feiEvent.emit('CHANGE_LOADING_FLAG', false)
}

export {
	Blank,
	showLoading,
	hideLoading
}

Loading.propTypes = {
	flag: PropType.bool,
	showLoading: PropType.bool,
	changeLoadingFlag: PropType.func
}

export default connect(state2props, dispatch2props)(Loading)

