import React from 'react';
import styled from '@emotion/styled';
import {
  backgroundImage,
  d_flex,
  flex_wrap,
  padding_l,
  pos_expand,
  pos_relative,
  scale_12,
  transition,
  zIndex_1,
} from 'config/styles';

const Parent = styled.div`
  ${pos_relative}
  ${d_flex}
`
const Wrapper = styled.div`
    ${backgroundImage}
    ${pos_expand}
    ${zIndex_1}
    ${scale_12}
    filter: blur(${props => props.blur + 'px'});
    background-image: url(${props => props.image})
`
const Content = styled.div`
    ${transition}
    ${flex_wrap}
    ${zIndex_1}
    ${padding_l}
`
export default function Filter (props) {
  return (
    <Parent onClick={props.onClick}>
      <Wrapper image={props.image} blur={props.blur} />
      <Content>{props.children}</Content>
    </Parent>
  )
}
