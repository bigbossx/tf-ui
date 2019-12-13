import React from 'react';
import styled from '@emotion/styled';
import { padding_10, transition } from 'config/styles';
import './const.iconfont'

const Svg = styled.svg`
  ${transition}
  ${padding_10}
  width:${props => props.size + 'px'};
  height:${props => props.size + 'px'};
`;
export default function Icon (props) {
  return (
    <Svg aria-hidden="true" size={props.size} onClick={props.onClick}>
      <use xlinkHref={`#${props.name}`}></use>
    </Svg>
  );
}
