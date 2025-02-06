import css from "./UserBar.module.css";

export const UserBar = () => {
  return (
    <div className={css.userBox}>
      <p>Name</p>
      <span className={css.iconBox}>
        <svg className={css.icon}>
          <use href="/Vocab-builder/sprite.svg#icon-user"></use>
        </svg>
      </span>
    </div>
  );
};
