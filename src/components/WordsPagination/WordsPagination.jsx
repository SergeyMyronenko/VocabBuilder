import { useState } from "react";
import css from "./WordsPagination.module.css";
import sprite from "/public/sprite.svg";
import clsx from "clsx";

export const WordsPagination = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={css.paginationBox}>
      <div className={css.buttonBlock}>
        <button className={css.buttonIcon}>
          <svg className={css.iconSvg}>
            <use href={`${sprite}#icon-first`}></use>
          </svg>
        </button>
        <button className={css.buttonIcon}>
          <svg className={css.iconSvg}>
            <use href={`${sprite}#icon-prev`}></use>
          </svg>
        </button>
      </div>
      <ul className={css.numberList}>
        <li className={clsx(css.numberListItem, isActive && css.activeNumber)}>
          1
        </li>
        <li className={clsx(css.numberListItem, isActive && css.activeNumber)}>
          2
        </li>
        <li className={clsx(css.numberListItem, isActive && css.activeNumber)}>
          3
        </li>
        <li className={clsx(css.numberListItem, isActive && css.activeNumber)}>
          4
        </li>
      </ul>
      <div className={css.buttonBlock}>
        <button className={css.buttonIcon}>
          <svg className={css.iconSvg}>
            <use href={`${sprite}#icon-next`}></use>
          </svg>
        </button>
        <button className={css.buttonIcon}>
          <svg className={css.iconSvg}>
            <use href={`${sprite}#icon-last`}></use>
          </svg>
        </button>
      </div>
    </div>
  );
};
