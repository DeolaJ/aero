/* eslint-disable complexity */
import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import THEME from '../constants';

export const ButtonText = styled.button`
  font-size: 1rem;
  letter-spacing: 0.02rem;
  padding: .7rem 2rem;
  border-radius: 2px;
  border: none;
  opacity: ${(props) => (props.disabled && '.5')};
  pointer-events: ${(props) => (props.disabled && 'none')};
  outline: none;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);

  ${(props) => (props.type.includes('primary') && `
    color: white;
    background-color: ${THEME.colors.brand.rose};

    &:hover {
      color: #fafafa;
      background-color: #f83545;
    }
  `)};
  
  ${(props) => (props.type.includes('secondary') && `
    background-color: white;
    color: ${THEME.colors.brand.rose};

    &:hover {
      background-color: #fafafa;
      color: #f83545;
    }
  `)}

  ${(props) => (props.type.includes('default') && `
    background: transparent;
    box-shadow: none;
    color: ${THEME.colors.brand.rose};

    &:hover {
      background-color: #fafafa;
      color: #f83545;
    }
  `)}

  &:hover {
    box-shadow: none;
  }
`;

export const ButtonTextIcon = styled(ButtonText)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    margin-right: .5rem;
    width: 10px;
  }
`;

export const ButtonIcon = styled.button`
  background: none;
  border: none;
  color: black;
  box-sizing: border-box;
  cursor: pointer;
  opacity: ${(props) => (props.disabled && '.5')};
  pointer-events: ${(props) => (props.disabled && 'none')};
  outline: none;
`;

// eslint-disable-next-line max-lines-per-function
export const Button = ({
  type, text, icon, iconLink, onClick, disabled, className,
}) => {
  switch (type) {
    case 'primary':
    case 'secondary':
    case 'default': return (
      <ButtonText type={type} onClick={onClick} disabled={disabled} className={className}>
        {text}
      </ButtonText>
    );

    case 'primary icon':
    case 'secondary icon': return (
      <ButtonTextIcon type={type} onClick={onClick} disabled={disabled} className={className}>
        {
          icon && (
            <img src={iconLink} alt="button icon" />
          )
        }
        <span>
          {text}
        </span>
      </ButtonTextIcon>
    );

    case 'icon': return (
      <ButtonIcon onClick={onClick} disabled={disabled} aria-label={text} className={className}>
        <img src={iconLink} alt="button icon" />
      </ButtonIcon>
    );

    default: return null;
  }
};

Button.defaultProps = {
  text: '',
  iconLink: '',
  icon: false,
  onClick: () => null,
  disabled: false,
  className: '',
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string,
  icon: PropTypes.bool,
  iconLink: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default {
  Button,
  ButtonText,
  ButtonTextIcon,
  ButtonIcon,
};
