/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/2/25
 * Time: 15:25
 */
import React from 'react'
import { Icon } from 'antd'
import test from '../../static/image/sider/sider1.png'

const FeiIcon = props => (
	<Icon component={
		() => (<img src={test} style={{heigth: '16px', width: '16px'}}/>)
	} />
)
export {
	FeiIcon
}
