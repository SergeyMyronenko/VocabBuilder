import { Link } from "react-router-dom";
import css from "./UserNav.module.css";

export const UserNav = ({ isOpen }) => {
  return (
    <div className={css.wrapper}>
      <button className={css.button} onClick={isOpen}>
        <svg className={css.icon}>
          <use href="/Vocab-builder/sprite.svg#icon-nav"></use>
        </svg>
      </button>
      <div className={css.logout}>
        <Link to="/Vocab-builder/log-out" className={css.logoutLink}>
          Log out
        </Link>
        <svg className={css.iconOut}>
          <use href="/Vocab-builder/sprite.svg#icon-arrow-out"></use>
        </svg>
      </div>
    </div>
  );
};
