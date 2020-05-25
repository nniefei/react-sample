/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/2/25
 * Time: 17:47
 */
import React from 'react'
import FeiTitle from '../../../../../components/fei-title'
import { Row, Col } from 'antd'
import { MypageWrapper, OrderGoodsBox, OrderGoodsRow, OrderGoodsWrapper } from './styled'
import StoresOverview from './stores-overview'
import OrderOverview from './order-overview'
import GoodOverview from './goods-overview'

const MyPage = () => (
	<MypageWrapper>
		<FeiTitle title="我的门店"/>
		<StoresOverview/>
		<Row gutter={16}>
			<Col span={16}>
				<FeiTitle title="我的订单"/>
			</Col>
			<Col span={8}>
				<FeiTitle title="我的商品"/>
			</Col>
		</Row>
		<OrderGoodsWrapper>
			<OrderGoodsRow>
				<Col span={16} style={{height: '100%'}}>
					<OrderGoodsBox>
						<OrderOverview/>
					</OrderGoodsBox>
				</Col>
				<Col span={8} style={{height: '100%'}}>
					<OrderGoodsBox>
						<GoodOverview/>
					</OrderGoodsBox>
				</Col>
			</OrderGoodsRow>
		</OrderGoodsWrapper>
	</MypageWrapper>
)

export default MyPage
