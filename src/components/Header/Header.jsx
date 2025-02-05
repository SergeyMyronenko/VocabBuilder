import css from "./Header.module.css";
// import sprite from "../../image/sprite.svg";
import sprite from "../../image/symbol-defs.svg";

export const Header = () => {
  console.log(sprite);

  return (
    <div>
      {/* <a className={css.logoLink} href="/">
        <svg className={css.logo}>
          <use href="/sprite.svg#icon-union"></use>
        </svg>
      </a> */}
      <svg>
        <use className={css.logo} href={`${sprite}#icon-eye-off`}></use>
      </svg>

      <p>Header</p>
    </div>
  );
};
