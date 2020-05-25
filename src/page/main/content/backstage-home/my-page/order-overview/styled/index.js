/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/2/26
 * Time: 17:26
 */
import styled from 'styled-components'
import { Row, Col } from 'antd'

const OrderOverviewCol = styled(Col)`
	flex-grow: 1;
	margin-left: 30px;
`

const OrderOverviewRow = styled(Row)`
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
	OrderOverviewCol,
	OrderOverviewRow
}
