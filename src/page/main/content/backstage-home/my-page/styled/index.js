/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/2/26
 * Time: 15:24
 */
import styled from 'styled-components'
import {Row} from 'antd'
import closePng from '../../../../../../static/image/my-page/close.png'
import restPng from '../../../../../../static/image/my-page/rest.png'
import workPng from '../../../../../../static/image/my-page/work.png'
import timePng from '../../../../../../static/image/my-page/time.png'
import locationPng from '../../../../../../static/image/my-page/location.png'

const MypageWrapper = styled.div`
	padding: 0 20px;
`

const StoresOverviewWrapper = styled.div`
	height: 168px;
	width: 100%;
	background: white;
`

const StoresOverviewTitle = styled(Row)`
	padding-left: 21px;
	justify-content: flex-start;
	align-items: center;
	&.stores-overview-name{
		font-size: 24px;
		font-weight: bold;
		color: #333;
		margin-bottom: 10px;
		display: flex;
		flex-direction: row;
	}
	&.stores-overview-describ{
		font-size: 14px;
		color: #999;
		margin-bottom: 10px;
		display: flex;
		flex-direction: row;
	}
	&.stores-overview-time{
		font-size: 14px;
		color: #999;
		margin-bottom: 10px;
		display: flex;
		flex-direction: row;
	}
	&.stores-overview-location{
		font-size: 14px;
		color: #999;
		display: flex;
		flex-direction: row;
	}
`

const StoresOverviewWord = styled(Row)`
	color: #999;
	font-size: 14px;
`

const StoresOverviewNum = styled(Row)`
	font-size: 30px;
	&.stores-overview-num-left{
		color: #FB4818
	}
	&.stores-overview-num-middle{
		color: #333
	}
	&.stores-overview-num-right{
		color: #03A861
	}
`

const StoresOverviewTitleWork = styled.img.attrs({
	src: `${workPng}`
})`
	width: 44px;
	height: 16px;
	margin-left: 12px;
`
const StoresOverviewTitleClose = styled.img.attrs({
	src: `${closePng}`
})`
	width: 44px;
	height: 16px;
	margin-left: 12px;
`
const StoresOverviewTitleRest = styled.img.attrs({
	src: `${restPng}`
})`
	width: 44px;
	height: 16px;
	margin-left: 12px;
`
const StoresOverviewTitleTime = styled.img.attrs({
	src: `${timePng}`
})`
	width: 12px;
	height: 12px;
	margin-right: 7px;
`
const StoresOverviewTitleLocation = styled.img.attrs({
	src: `${locationPng}`
})`
	width: 12px;
	height: 12px;
	margin-right: 7px;
`

const OrderGoodsWrapper = styled.div`
	height: 110px;
	width: 100%;
`

const OrderGoodsRow = styled(Row).attrs({
	gutter: 16,
	type: 'flex',
	justify: 'center',
	align: 'middle'
})`
	height: 100%;
`

const OrderGoodsBox = styled.div`
	background: white;
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`

export {
	MypageWrapper,
	StoresOverviewWrapper,
	StoresOverviewTitle,
	StoresOverviewWord,
	StoresOverviewNum,
	StoresOverviewTitleWork,
	StoresOverviewTitleClose,
	StoresOverviewTitleRest,
	StoresOverviewTitleTime,
	StoresOverviewTitleLocation,
	OrderGoodsWrapper,
	OrderGoodsRow,
	OrderGoodsBox
}
