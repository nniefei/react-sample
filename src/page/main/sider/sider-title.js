/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/2/22
 * Time: 14:59
 */
import React from 'react'
import styled from 'styled-components'

const SiderTitleWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 100;
	background: #03A861;
	height: 80px;
	display: flex;
	flex-direction: column;
`

const SiderTitleContent = styled.div`
	width: 180px;
	height: 40px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	font-weight: bold;
	font-size:18px;
	color: #FFFFFF;
	&.contentTop{
		align-items: flex-end;
	}
	&.contentBottom{
		align-items: flex-start;
	}
`

const SiderTitle = () => (
	<SiderTitleWrapper>
		<SiderTitleContent className="contentTop">XXX</SiderTitleContent>
		<SiderTitleContent className="contentBottom">XXX管理中心</SiderTitleContent>
	</SiderTitleWrapper>
)

export default SiderTitle
