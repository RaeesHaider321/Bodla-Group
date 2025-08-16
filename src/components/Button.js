import React from 'react';
import PropTypes from 'prop-types';
import { Button as BootstrapButton } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Button.css';

const Button = ({
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  children,
  icon,
  className = 'btn-custom',
  type = 'button',
  to, // New prop for navigation
  ...props
}) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (to) {
      navigate(to);
    }
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <BootstrapButton
      variant={variant}
      size={size}
      onClick={handleClick}
      disabled={disabled}
      className={className}
      type={type}
      {...props}
    >
      {icon && <span className="icon">{icon}</span>}
      {children}
    </BootstrapButton>
  );
};
Button.propTypes = {
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
    'link',
  ]),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  icon: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

export default Button;