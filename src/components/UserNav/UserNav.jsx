import css from "./UserNav.module.css";

export const UserNav = ({ isOpen }) => {
  return (
    <div className={css.wrapper}>
      <button className={css.button} onClick={isOpen}>
        <svg className={css.icon}>
          <use href="/Vocab-builder/sprite.svg#icon-nav"></use>
        </svg>
      </button>
    </div>
  );
};
