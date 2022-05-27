import React from "react";
import classNames from "classnames";

export interface IButtonProps {
  onClick?: () => void;
  // 类型
  primary?: boolean;
  secondary?: boolean;
  outline?: boolean;
  dashed?: boolean;
  link?: boolean;
  text?: boolean;
  // 尺寸
  xLarge?: boolean;
  large?: boolean;
  small?: boolean;
  xSmall?: boolean;
  xxSmall?: boolean;
  // 颜色
  success?: boolean;
  warn?: boolean;
  danger?: boolean;
  // 禁用状态
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const Button = (props: IButtonProps) => {
  const {
    className: tempClassName,
    style,
    onClick,
    children,
    primary,
    secondary,
    outline,
    dashed,
    link,
    text,
    xLarge,
    large,
    small,
    xSmall,
    xxSmall,
    success,
    danger,
    warn,
    disabled,
  } = props;

  const className = classNames(
    {
      "coochi-button": true,
      "coochi-button-primary": primary,
      "coochi-button-secondary": secondary && !text,
      "coochi-button-outline": outline,
      "coochi-button-dashed": dashed,
      "coochi-button-link": link,
      "coochi-button-text": text && !secondary,
      "coochi-button-text-secondary": secondary && text,
      "coochi-button-xl": xLarge,
      "coochi-button-lg": large,
      "coochi-button-sm": small,
      "coochi-button-xs": xSmall,
      "coochi-button-xxs": xxSmall,
      "coochi-button-success": success,
      "coochi-button-warn": warn,
      "coochi-button-danger": danger,
      "coochi-button-disabled": disabled,
    },
    tempClassName
  );

  return (
    <button
      type="button"
      className={className}
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="coochi-button__content">{children}</span>
    </button>
  );
};
