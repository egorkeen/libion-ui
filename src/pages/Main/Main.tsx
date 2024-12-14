import { Header } from "components";
import { FeedCarousel } from "./components";
import styles from "./Main.module.scss";

export const Main = () => {
  return (
    <div className={styles.main}>
      <Header />
      <FeedCarousel />
    </div>
  );
};
