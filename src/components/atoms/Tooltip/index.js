import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { font } from 'styled-theme';
import { ifProp } from 'styled-tools';

const opposites = {
    top: 'bottom',
    right: 'left',
    bottom: 'top',
    left: 'right',
};

export const opposite = ({ position }) => opposites[position];

export const perpendicular = ({ position }) =>
    position === 'left' || position === 'right' ? 'top' : 'left';

export const perpendicularOpposite = props => opposites[perpendicular(props)];

export const perpendicularAxis = ({ position }) =>
    position === 'left' || position === 'right' ? 'Y' : 'X';

const backgroundColor = ifProp('reverse', 'rgba(255, 255, 255, 0.95)', 'rgba(80, 80, 80, 0.95)');

const styles = css`
  position: relative;

  &:before,
  &:after {
    position: absolute;
    pointer-events: none;
    display: block;
    opacity: 0;
    transition: opacity 150ms ease-in-out, ${({ position }) => position} 150ms ease-in-out;
    will-change: ${({ position }) => position};
  }

  &:hover:before,
  &:focus:before {
    opacity: 1;
    ${({ position }) => position}: calc(-100% - 1.5rem);
  }

  &:hover:after,
  &:focus:after {
    opacity: 1;
    ${opposite}: 100%;
  }

  &:before {
    content: attr(data-title);
    font-family: ${font('primary')};
    white-space: nowrap;
    text-transform: none;
    font-size: 0.8125rem;
    line-height: 1.5;
    text-align: center;
    color: ${ifProp('reverse', 'black', 'white')};
    background-color: ${backgroundColor};
    border-radius: 0.15384em;
    padding: 0.65em 0.8em;
    ${({ position }) => position}: calc(-100% - 1rem);
    ${({ align }) => {
        switch(align) {
            case 'start':
                return css`
              ${perpendicular}: 0;
            `;
            case 'center':
                return css`
              ${perpendicular}: 50%;
              transform: translate${perpendicularAxis}(-50%);
            `;
            default:
                return css`
              ${perpendicularOpposite}: 0;
            `
        }
    }}
  }
`;

const Tooltip = styled(({ position, align, reverse, children, theme, ...props }) =>
    React.cloneElement(children, props))`${styles}`;

Tooltip.propTypes = {
    position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    align: PropTypes.oneOf(['start', 'center', 'end']),
    reverse: PropTypes.bool,
    'data-title': PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
};

Tooltip.defaultProps = {
    position: 'top',
    align: 'center',
    tabIndex: 0,
};

export default Tooltip;