/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/2/25
 * Time: 14:46
 */
/**
 * 系统内通用的按钮样式
 * 1、按钮添加".reverse"clas则样式颜色反转
 * 2、提供有4中尺寸大小
 */
import styled from 'styled-components'
import { Button } from 'antd'

const FeiLargeWideRoundBtn = styled(Button).attrs({
	shape: 'round',
	size: 'large'
})`
	width: 150px;
	color: #03A861!important;
	border: 1px solid #03A861!important;
	font-size: 12px!important;
	&:hover{
		background: #03A861!important;
		color: white!important;
	}
	&.reverse{
		background: #03A861!important;
		color: white!important;
		border: 1px solid #03A861!important;
		font-size: 12px!important;
		&:hover{
			background: white!important;
			color: #03A861!important;
		}
	}
	
`

const FeiLargeRoundBtn = styled(Button).attrs({
	shape: 'round',
	size: 'large'
})`
	color: #03A861!important;
	border: 1px solid #03A861!important;
	font-size: 12px!important;
	width: 150px;
	&:hover{
		background: #03A861!important;
		color: white!important;
	}
	&.reverse{
		background: #03A861!important;
		color: white!important;
		border: 1px solid #03A861!important;
		font-size: 12px!important;
		&:hover{
			background: white!important;
			color: #03A861!important;
		}
	}
`

const FeiNomallRoundBtn = styled(Button).attrs({
	shape: 'round'
})`
	color: #03A861!important;
	border: 1px solid #03A861!important;
	font-size: 12px!important;
	&:hover{
		background: #03A861!important;
		color: white!important;
	}
	&.reverse{
		background: #03A861!important;
		color: white!important;
		border: 1px solid #03A861!important;
		font-size: 12px!important;
		&:hover{
			background: white!important;
			color: #03A861!important;
		}
	}
`

const FeiSmallRoundBtn = styled(Button).attrs({
	shape: 'round',
	size: 'small'
})`
	color: #03A861!important;
	border: 1px solid #03A861!important;
	font-size: 12px!important;
	&:hover{
		background: #03A861!important;
		color: white!important;
	}
	&.reverse{
		background: #03A861!important;
		color: white!important;
		border: 1px solid #03A861!important;
		font-size: 12px!important;
		&:hover{
			background: white!important;
			color: #03A861!important;
		}
	}
`

export {
	FeiLargeWideRoundBtn,
	FeiLargeRoundBtn,
	FeiNomallRoundBtn,
	FeiSmallRoundBtn
}
