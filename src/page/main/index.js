/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/2/22
 * Time: 10:55
 */
import React from 'react'
import Layout from 'antd/es/layout'
import FeiSider from './sider'
import FeiHeader from './header'
import FeiContent from './content'
import FeiFoot from './footer'
import PropTpye from 'prop-types'

const MainContent = (props) => (
	<Layout style={{width: '100%', height: '100vh'}}>
		<FeiSider/>
		<Layout>
			<FeiHeader/>
			<FeiContent history={props.history}/>
			<FeiFoot/>
		</Layout>
	</Layout>
)

MainContent.propTypes = {
	history: PropTpye.object
}

export default MainContent
