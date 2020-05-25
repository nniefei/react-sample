/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/2/26
 * Time: 17:34
 */
import styled from 'styled-components'
import { Row, Col } from 'antd'

const GoodsOverviewCol = styled(Col)`
	flex-grow: 1;
	margin-left: 30px;
`

const GoodsOverviewRow = styled(Row)`
	&.title{
		color: #999;
		font-size: 14px;
	}
	&.num{
		color: #333;
		font-size: 24px;
	}
`

export {
	GoodsOverviewCol,
	GoodsOverviewRow
}
