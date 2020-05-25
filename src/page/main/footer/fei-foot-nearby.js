/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/3/1
 * Time: 11:30
 */
import React from 'react'
import styled from 'styled-components'
import { Divider } from 'antd'
import { Link } from 'react-router-dom'

const FootWrapperNearBy = styled.div`
	position: relative;
	left: 0;
	width: 100%;
	height: 80px;
	background: transparent;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	color: #999;
	font-size: 12px;
	z-index: 100;
`

const FootLinkList = styled.div`
	height: 12px;
	padding-top: 20px;
	border-top: 1px solid rgba(236,236,236,0.5);
`
const FootInfo = styled.div`
	height: 12px;
	margin-top: 16px;
	padding-top: 16px;
`

const FeiFoot = () => (
	<FootWrapperNearBy>
		<FootLinkList>
			<Link to="/main" style={{color: '#999'}}>首页</Link><Divider style={{margin: '0 30px'}} type="vertical" />
			<Link style={{color: '#999'}}>XXX</Link><Divider style={{margin: '0 30px'}} className="split-line" type="vertical" />
			<Link style={{color: '#999'}}>XXX</Link><Divider style={{margin: '0 30px'}} className="split-line" type="vertical" />
			<Link style={{color: '#999'}}>XXX</Link><Divider style={{margin: '0 30px'}} className="split-line" type="vertical" />
			<Link style={{color: '#999'}}>XXX</Link>
		</FootLinkList>
		<FootInfo>XXX号 XXX有限公司</FootInfo>
	</FootWrapperNearBy>
)

export default FeiFoot
