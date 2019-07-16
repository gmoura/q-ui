import React from 'react';
import styled from '@emotion/styled';
import If from './../If';

const Avatar = (props) => {
  const StyledAvatar = styled.img`
    width: ${props.size || '80'}px;
    border-radius: ${props.Circle ? '50%' : '0'};
    background-color: #9B9B9B;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, .1)
  `
  return (
    <div>
      <If test={props.photo}>
        <StyledAvatar className={props.className} src={props.photo} />
      </If>

      <If test={props.photo  === null || props.photo === undefined}>
        <StyledAvatar className={props.className} src="../../assets/icons/avatar-icon.svg"/>
      </If>
    </div>
  )
}


export default Avatar;