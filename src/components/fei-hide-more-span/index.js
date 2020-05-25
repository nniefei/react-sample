/**
 * Created by WebStorm.
 * User: FEI
 * Date: 2019/3/7
 * Time: 11:02
 */
import React from 'react'
import styled from 'styled-components'
import PropType from 'prop-types'

const HideMoreWrapper = styled.span.attrs((props) => ({
	title: props.content
}))`
	width: ${props => props.width};
	max-width: 150px;
	display: inline-block;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	cursor: pointer;
`

const FeiHiddeMoreSpan = (props) => (
	<HideMoreWrapper width={props.width} content={props.content}>{props.content}</HideMoreWrapper>
)

FeiHiddeMoreSpan.propTypes = {
	width: PropType.string,
	content: PropType.string
}

export default FeiHiddeMoreSpan
