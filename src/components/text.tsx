import { useRef } from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

import { css } from "@emotion/react";
import { motion } from "framer-motion";

import useCreateRipple from "@/shared/hooks/use-create-ripple";
import * as styles from "@/shared/ui/button/button.styles";
import LoaderSpin from "@/shared/ui/spinner/spinner";
import { alphaColorBuilder } from "@/shared/utils/alpha-color-builder";
import { colors } from "@/theme";
import { RIPPLE } from "@/theme/animations";

export type ButtonColors = "blue" | "green" | "red" | "white" | "yellow";
export type ButtonVariants = "solid" | "outline" | "ghost" | "link";
export type ButtonSizes = "xs" | "md" | "lg";

export type ButtonType = {
  color?: ButtonColors;
  size?: ButtonSizes;
  variant?: ButtonVariants;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  loading?: boolean;
  loader?: ReactNode;
  fullWidth?: boolean;
  ripple?: boolean;
  disabled?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

//setter functions
const setOtherColor = (color: ButtonColors) => {
  switch (color) {
    case "blue":
      return styles.blueOutline;
    case "red":
      return styles.redOutline;
    case "green":
      return styles.greenOutline;
    case "white":
      return styles.whiteOutline;
    case "yellow":
      return styles.yellowOutline;

    default:
      return styles.greenOutline;
  }
};

const setSolidColor = (color: ButtonColors) => {
  switch (color) {
    case "blue":
      return styles.blue;
    case "red":
      return styles.red;
    case "green":
      return styles.green;
    case "white":
      return styles.white;
    case "yellow":
      return styles.yellow;

    default:
      return styles.green;
  }
};

const setVariant = (variant: ButtonVariants) => {
  switch (variant) {
    case "solid":
      return styles.solid;
    case "outline":
      return styles.outline;
    case "ghost":
      return styles.ghost;
    case "link":
      return styles.link;

    default:
      return styles.solid;
  }
};

const setRipple = (color: ButtonColors, variant: ButtonVariants) => {
  if (variant === "solid") {
    return styles.solidRipple;
  } else {
    return css`
      ${styles.ripple};
      background-color: ${findColor(color)};
    `;
  }
};

const findColor = (color: ButtonColors) => {
  switch (color) {
    case "blue":
      return alphaColorBuilder(colors.blue500, 0.1);

    case "green":
      return alphaColorBuilder(colors.green600, 0.1);

    case "red":
      return alphaColorBuilder(colors.red500, 0.1);

    case "white":
      return alphaColorBuilder(colors.gray400, 0.1);

    case "yellow":
      return alphaColorBuilder(colors.yellow500, 0.1);

    default:
      return alphaColorBuilder(colors.green600, 0.1);
  }
};

const setSize = (size: ButtonSizes) => {
  switch (size) {
    case "xs":
      return styles.xs;
    case "md":
      return styles.md;
    default:
      return styles.lg;
  }
};

export const Button = ({
  color = "green",
  size = "md",
  variant = "solid",
  type = "button",
  leftIcon,
  rightIcon,
  loader,
  loading = false,
  disabled = false,
  fullWidth = false,
  //experimental
  ripple = true,
  children,
  ...props
}: ButtonType) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { circleStyle, handleRipple, rippleControl } =
    useCreateRipple<HTMLButtonElement>({
      ref: buttonRef,
    });
  const composedBaseStyles =
    variant === "solid"
      ? [
          styles.base,
          styles.solid,
          setSolidColor(color),
          loading && styles.loading,
          disabled && styles.disabled,
          fullWidth && styles.fw,
          setSize(size),
        ]
      : [
          styles.base,
          setOtherColor(color),
          setVariant(variant),
          loading && styles.loading,
          disabled && styles.disabled,
          fullWidth && styles.fw,
          setSize(size),
        ];

  return (
    <button
      {...props}
      type={type}
      disabled={disabled}
      ref={buttonRef}
      css={composedBaseStyles}
      onClick={(e) => {
        ripple && handleRipple(e);
        props.onClick && props.onClick(e);
      }}
    >
      <div css={[styles.loadingWrapper, loading ? styles.hide : null]}>
        {leftIcon && <i css={styles.leftIcon}>{leftIcon}</i>}
        {children}
        {rightIcon && <i css={styles.rightIcon}>{rightIcon}</i>}
      </div>

      {loading && (
        <div css={styles.loadingOverlay}>
          {loader ? loader : <LoaderSpin color={"adaptive"} />}
        </div>
      )}
      {ripple && (
        <motion.span
          style={circleStyle}
          variants={RIPPLE}
          transition={{ duration: 0.7 }}
          initial="initial"
          animate={rippleControl}
          css={setRipple(color, variant)}
        />
      )}
    </button>
  );
};

export default Button;
