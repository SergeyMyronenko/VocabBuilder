import { MainLogo } from "../MainLogo/MainLogo";
import { UserBar } from "../UserBar/UserBar";
import { UserNav } from "../UserNav/UserNav";
import css from "./Header.module.css";

export const Header = () => {
  return (
    <div>
      <div className={css.headerWrapper}>
        <MainLogo />
        <div className={css.navBlock}>
          <UserBar />
          <UserNav />
        </div>
      </div>

      {/* ----Modal-menu---- */}

      <div className={css.modal}>
        <div className={css.modalHeader}>
          <UserBar bgIcon={"white"} />
          <svg className={css.iconClose}>
            <use href="/Vocab-builder/sprite.svg#icon-close"></use>
          </svg>
        </div>
      </div>
    </div>
  );
};
