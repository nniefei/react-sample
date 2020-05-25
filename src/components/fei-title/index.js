/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/2/26
 * Time: 15:05
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const FeiTitleWrapper = styled.div`
	width: 100%;
	height: 65px;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
`

const FeiTitleIcon = styled.div`
	margin-right: 8px;
	width: 4px;
	height: 16px;
	border-radius: 2px;
	background: #03A861;
`

const FeiTitleWord = styled.span`
	color: #333;
	font-size:16px;
	height: 65px;
	line-height: 65px;
`

const FeiSubtitle = styled.span`
	color: #03A861;
	cursor: pointer;
	font-size:13px;
	padding-left: 7px;
	height: 65px;
	line-height: 65px;
`

class FeiTitle extends Component {
	render () {
		const { title, subtitle, beBack, history } = this.props
		if (subtitle) {
			return (
				<FeiTitleWrapper>
					<FeiTitleIcon/>
					<FeiTitleWord>{title}</FeiTitleWord>
					<FeiSubtitle onClick={() => (beBack(this, history))}>{'<'}</FeiSubtitle>
					<FeiSubtitle onClick={() => (beBack(this, history))}>{subtitle}</FeiSubtitle>
				</FeiTitleWrapper>
			)
		} else {
			return (
				<FeiTitleWrapper>
					<FeiTitleIcon/>
					<FeiTitleWord>{title}</FeiTitleWord>
				</FeiTitleWrapper>
			)
		}
	}
}

const dispatch2props = () => ({
	beBack: (target, history) => {
		history.goBack()
	}
})

FeiTitle.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
	beBack: PropTypes.func,
	history: PropTypes.object
}

export default connect(null, dispatch2props)(FeiTitle)
