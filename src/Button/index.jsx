// @flow

import React from 'react';
import styled from '@emotion/styled';
import _theme from './../theme';

type Props = {
  children: any,
  className?: string,
  disable?: boolean,
  fluid?: any,
  icon: string,
  onClick?: Function,
};

const Button = (props: Props) => {
  const StyledButton = styled.button`
    width: ${props.fluid ? '100%' : 'auto'};
    padding: ${_theme.rythm.base}px;
    font-size: ${_theme.typo.scale[3]};
    background: url(${_theme.imageDirectory}${props.icon}.svg) no-repeat 98% #4664D3;
    color: white;
    border: none;
    background-size: 40px 30px;
    background-position-x: 96%;
    cursor: ${props.disable ? 'not-allowed' : 'pointer'};
    opacity: ${props.disable ? '0.4' : 1};
  `;

  return (
    <StyledButton
      className={`${props.className}`}
      onClick={props.disable ? () => {} : props.onClick}
      disable={props.disable}
    >
      {props.children}
    </StyledButton>
  )
};

export default Button;
