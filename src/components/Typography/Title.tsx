import { FC, memo } from "react";
import styles from "./Typography.module.scss";

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  type: "h1" | "h2";
}

const Title: FC<TitleProps> = memo(({ type, children, ...restTitleProps }) => {
  const Tag = type;

  return (
    <Tag className={(styles.basic, styles[type])} {...restTitleProps}>
      {children}
    </Tag>
  );
});

Title.displayName = "Title";

export { Title };
