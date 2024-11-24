import favorite from "assets/Favorite.svg";
import logo from "assets/Logo.svg";
import randomTitle from "assets/RandomTitle.svg";
import { NavLink } from "react-router-dom";
import { routerPath } from "utils/types";
import { Button } from "../Button";
import { Typography } from "../Typography";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Libion" className={styles.logo} />

      <div className={styles.buttons}>
        <NavLink to={routerPath.RANDOM_TITLE}>
          <img
            src={randomTitle}
            alt="Случайное аниме"
            className={styles.icon}
          />
        </NavLink>

        <NavLink to={routerPath.FAVORITE}>
          <img src={favorite} alt="Избранное" className={styles.icon} />
        </NavLink>

        <Button buttonType="primary">
          <Typography.Text type="medium">Войти</Typography.Text>
        </Button>
      </div>
    </header>
  );
};
