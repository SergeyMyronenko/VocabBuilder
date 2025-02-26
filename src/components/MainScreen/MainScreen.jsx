import { MainLogo } from "../MainLogo/MainLogo";
import css from "./MainScreen.module.css";

export const MainScreen = () => {
  return (
    <div className={css.mainWrapper}>
      <MainLogo bgColor={"white"} />
    </div>
  );
};
