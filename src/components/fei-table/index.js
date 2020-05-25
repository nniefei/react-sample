/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/2/28
 * Time: 14:01
 */
import React, { Component } from 'react'
import { Table, Pagination, Row, Col } from 'antd'
import { FeiSmallRoundBtn } from '../styled'
import PropTypes from 'prop-types'

class FeiTable extends Component{

	shouldComponentUpdate (nextProps) {
		return nextProps.totalNum > 0
	}

	render () {
		const { dataColumn, dataSource, pageNum, pageSize, totalNum, changePagination, exportList, rowSelection, uid, header } = this.props
		return (
			<div style={{background: 'white', padding: '20px', marginBottom: '80px'}}>
				<Table
					title={header}
					rowSelection={rowSelection}
					rowKey={record => record[uid]}
					columns={dataColumn}
					dataSource={dataSource}
					pagination={false}
				/>
				<Row
					type="flex"
					justify="center"
					align="middle"
					style={{padding: '30px 20px 10px 20px', display: totalNum > 0 ? 'flex' : 'none'}}
				>
					<Col span={2}>
						<span>导出Excel：</span>
					</Col>
					<Col span={5}>
						<FeiSmallRoundBtn onClick={() => (exportList(1))}>导出全部</FeiSmallRoundBtn>
						<FeiSmallRoundBtn onClick={() => (exportList(0))} style={{marginLeft: '5px'}}>导出当前页</FeiSmallRoundBtn>
					</Col>
					<Col span={10} style={{textAlign: 'center'}}>
						<Pagination
							current={pageNum}
							pageSize={pageSize}
							total={totalNum}
							onChange={changePagination}
						/>
					</Col>
					<Col span={5}/>
					<Col span={2}/>
				</Row>
			</div>
		)
	}
}

FeiTable.propTypes = {
	uid: PropTypes.string.isRequired,
	exportList: PropTypes.func,
	changePagination: PropTypes.func,
	header: PropTypes.func,
	rowSelection: PropTypes.object,
	dataSource: PropTypes.array,
	dataColumn: PropTypes.array,
	pageNum: PropTypes.number,
	pageSize: PropTypes.number,
	totalNum: PropTypes.number
}

FeiTable.defaultProps = {
	uid: '0'
}

export default FeiTable
