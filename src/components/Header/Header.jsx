import { MainLogo } from "../MainLogo/MainLogo";
import { UserBar } from "../UserBar/UserBar";
import { UserNav } from "../UserNav/UserNav";
import css from "./Header.module.css";

export const Header = () => {
  return (
    <div className={css.headerWrapper}>
      <MainLogo />
      <div className={css.navBlock}>
        <UserBar />
        <UserNav />
      </div>
    </div>
  );
};
