/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/2/26
 * Time: 10:14
 */
import React, { Component } from 'react'
import FeiTitle from '../../../../../components/fei-title'
import './style.scss'
import { Table } from 'antd'
import {FeiSmallRoundBtn} from '../../../../../components/styled'

class InfoAccountManage extends Component {
	render () {

		const columns = [{
			title: 'title',
			dataIndex: 'title',
			width: '120px'
		}, {
			title: 'content',
			dataIndex: 'content',
			render: (attr, record, index) => {
				return (
					<div>
						<span style={{'paddingRight': '25px'}}>{attr}</span>
						{
							index ? <FeiSmallRoundBtn>修改手机号</FeiSmallRoundBtn> : <FeiSmallRoundBtn>修改密码</FeiSmallRoundBtn>
						}
					</div>
				)
			}
		}]

		const data = [{
			key: '1',
			title: '当前账号：',
			content: '18819366666'
		}, {
			key: '2',
			title: '绑定手机号：',
			content: '18819366666'
		}]

		const columns1 = [{
			title: 'title',
			dataIndex: 'title',
			width: '120px'
		}, {
			title: 'content',
			dataIndex: 'content',
			render: (attr, record, index) => {
				switch (index) {
					case 0:
						return (
							<div>
								<span>{attr}</span>
							</div>
						)
					case 1:
						return (
							<div>
								<span>{attr}</span>
							</div>
						)
					case 2:
						return (
							<div>
								<img src={attr} alt="门店封面图"/>
							</div>
						)
					case 3:
						return (
							<div>
								<span style={{'paddingRight': '25px'}}>{attr}</span>
								<FeiSmallRoundBtn>修改密码</FeiSmallRoundBtn>
							</div>
						)
					case 4:
						return (
							<div>
								<span style={{'paddingRight': '25px'}}>{attr}</span>
								<FeiSmallRoundBtn>修改手机号</FeiSmallRoundBtn>
							</div>
						)
				}
			}
		}]

		const data1 = [{
			key: '1',
			title: '门店编号：',
			content: '0022222'
		}, {
			key: '2',
			title: '门店名称：',
			content: '龙船小调 - 串串火锅'
		}, {
			key: '3',
			title: '门店封面图：',
			content: 'https://via.placeholder.com/100'
		}, {
			key: '4',
			title: '门店账号：',
			content: '18819366666'
		}, {
			key: '5',
			title: '门店手机号：',
			content: '18819366666'
		}]

		return (
			<div className="fei-info-account">
				<FeiTitle title="基本信息管理"/>
				<div className="simulation-simple-form">
					<Table
						columns={columns}
						dataSource={data}
						pagination={false}
						bordered
					/>
				</div>
				<FeiTitle title="门店账号管理"/>
				<div className="simulation-simple-form">
					<Table
						columns={columns1}
						dataSource={data1}
						pagination={false}
						bordered
					/>
				</div>
			</div>
		)
	}
}

export default InfoAccountManage
