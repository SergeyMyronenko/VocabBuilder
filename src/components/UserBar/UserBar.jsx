import css from "./UserBar.module.css";
import clsx from "clsx";

export const UserBar = ({ bgIcon }) => {
  return (
    <div className={css.userBox}>
      <p
        className={clsx(
          css.userTitle,
          bgIcon === "white" && css.userTitleWhite
        )}
      >
        Name
      </p>
      <span
        className={clsx(css.iconBox, bgIcon === "white" && css.iconBoxWhite)}
      >
        <svg className={clsx(css.icon, bgIcon === "white" && css.iconBg)}>
          <use href="/Vocab-builder/sprite.svg#icon-user"></use>
        </svg>
      </span>
    </div>
  );
};
