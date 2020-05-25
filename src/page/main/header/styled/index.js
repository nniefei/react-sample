/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/2/25
 * Time: 16:16
 */
import React from 'react'
import styled from 'styled-components'

const HeadWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 180px;
	width: calc(100% - 180px);
	height: 80px;
	background: #fff;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
	padding-right: 30px;
	z-index: 100;
`

const LoginName = styled.span`
	color: #333;
	font-size: 12px;
	padding-right: 14px;
`

const LogoutBtn = styled.span`
	color: #999;
	font-size: 10px;
	border: 1px solid #999;
	border-radius: 2px;
	padding: 0 5px;
	cursor: pointer;
	:hover {
		color: #03a861
	}
`

const HeadStyled = () => (
	<HeadWrapper>
		<LoginName>欢迎您，13333333333</LoginName>
		<LogoutBtn>退出</LogoutBtn>
	</HeadWrapper>
)

export {
	HeadStyled
}
