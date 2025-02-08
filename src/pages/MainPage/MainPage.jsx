import { MainLogo } from "../../components/MainLogo/MainLogo";
import css from "./MainPage.module.css";

export const MainPage = () => {
  return (
    <div className={css.mainWrapper}>
      <MainLogo bgColor={"white"} />
    </div>
  );
};
