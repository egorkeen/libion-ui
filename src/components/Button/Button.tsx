import clsx from "clsx";
import { FC, memo } from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
  buttonType: "primary";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = memo(
  ({ buttonType, children, ...restButtonProps }) => {
    return (
      <button
        className={clsx(styles.button, styles[buttonType])}
        {...restButtonProps}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button };
