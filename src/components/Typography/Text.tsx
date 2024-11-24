import clsx from "clsx";
import { FC, memo } from "react";
import styles from "./Typography.module.scss";

interface TextProps extends React.HtmlHTMLAttributes<HTMLParagraphElement> {
  type: "big" | "medium";
  bold?: boolean;
}

const Text: FC<TextProps> = memo(
  ({ type, children, bold = false, ...restTextProps }) => {
    return (
      <p
        className={clsx(styles.basic, styles[type], bold && styles.bold)}
        {...restTextProps}
      >
        {children}
      </p>
    );
  },
);

Text.displayName = "Text";

export { Text };
