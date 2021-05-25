/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/2/26
 * Time: 15:42
 */
import React from 'react'
import { Row, Col, Divider } from 'antd'
import {
	StoresOverviewNum,
	StoresOverviewWord,
	StoresOverviewTitle,
	StoresOverviewWrapper,
	StoresOverviewTitleWork,
	StoresOverviewTitleRest,
	StoresOverviewTitleClose,
	StoresOverviewTitleTime,
	StoresOverviewTitleLocation
} from '../styled'

const StoresOverview = () => (
	<StoresOverviewWrapper>
		<Row style={{height: '100%'}} type="flex" justify="center" align="middle">
			<Col span={11}>
				<StoresOverviewTitle className="stores-overview-name">
					龙船小调.串串火锅
					<StoresOverviewTitleWork/>
					<StoresOverviewTitleClose/>
					<StoresOverviewTitleRest/>
				</StoresOverviewTitle>
				<StoresOverviewTitle className="stores-overview-describ">
					传承正宗重庆串串火锅
				</StoresOverviewTitle>
				<StoresOverviewTitle className="stores-overview-time">
					<StoresOverviewTitleTime/>
					营业时间：周一至周日 11:00-04:00
				</StoresOverviewTitle>
				<StoresOverviewTitle className="stores-overview-location">
					<StoresOverviewTitleLocation/>
					地理位置：广州市天河区天xxx街
				</StoresOverviewTitle>
			</Col>
			<Col span={4}>
				<StoresOverviewWord>总营业额（元）</StoresOverviewWord>
				<StoresOverviewNum className="stores-overview-num-left">189900.00</StoresOverviewNum>
			</Col>
			<Divider type="vertical" style={{height: '48px'}} />
			<Col span={3} style={{paddingLeft: '25px'}}>
				<StoresOverviewWord>总订单（件）</StoresOverviewWord>
				<StoresOverviewNum className="stores-overview-num-middle">346</StoresOverviewNum>
			</Col>
			<Divider type="vertical" style={{height: '48px'}} />
			<Col span={5} style={{paddingLeft: '25px'}}>
				<StoresOverviewWord>可提现金额（元）</StoresOverviewWord>
				<StoresOverviewNum className="stores-overview-num-right">164200.00</StoresOverviewNum>
			</Col>
		</Row>
	</StoresOverviewWrapper>
)

export default StoresOverview
