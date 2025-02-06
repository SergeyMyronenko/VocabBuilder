import css from "./UserNav.module.css";

export const UserNav = () => {
  return (
    <div className={css.wrapper}>
      <button className={css.button}>
        <svg className={css.icon}>
          <use href="/Vocab-builder/sprite.svg#icon-nav"></use>
        </svg>
      </button>
    </div>
  );
};
