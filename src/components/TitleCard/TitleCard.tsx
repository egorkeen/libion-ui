import { FC } from "react";
import { Title } from "utils/types";
import styles from "./TitleCard.module.scss";

type TitleCardProps = {
  title: Title;
};

export const TitleCard: FC<TitleCardProps> = () => {
  return <div className={styles.titleCard}></div>;
};
