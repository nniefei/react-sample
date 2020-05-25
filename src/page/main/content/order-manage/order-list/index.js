/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/2/25
 * Time: 17:48
 */
import React from 'react'
import PropTypes from 'prop-types'
import FeiTitle from '../../../../../components/fei-title'
import './style.scss'
import SearchBox from './search-box'
import SearchList from './search-list'

const OrderList = (props) =>  (
	<div className="fei-orderlist">
		<FeiTitle title="全部订单"/>
		<SearchBox/>
		<SearchList history={props.history}/>
	</div>
)

OrderList.propTypes = {
	history: PropTypes.object
}

export default OrderList
