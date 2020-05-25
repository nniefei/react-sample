/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/2/25
 * Time: 15:47
 */
import React from 'react'
import PropTypes from 'prop-types'
import test from '../../static/image/sider/sider1.png'

const FeiMenuIcon = props => (
	<div style={{position: 'relative'}}>
		<img src={test} style={{width: '16px', height: '16px', position: 'absolute', top: '50%', transform: 'translateY(-50%)'}} alt=""/>
		<span style={{position: 'relative', left: '20%'}}>{props.title}</span>
	</div>
)

FeiMenuIcon.propTypes = {
	title: PropTypes.string
}

export {
	FeiMenuIcon
}

