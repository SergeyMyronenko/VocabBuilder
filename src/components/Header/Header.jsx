import { useState } from "react";
import { MainLogo } from "../MainLogo/MainLogo";
import { UserBar } from "../UserBar/UserBar";
import { UserNav } from "../UserNav/UserNav";
import css from "./Header.module.css";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className={css.headerBlock}>
      <div className={css.headerWrapper}>
        <MainLogo />
        <div className={css.navBlock}>
          <UserBar />
          <UserNav isOpen={openModal} />
        </div>
      </div>

      {/* ----Modal-menu---- */}

      {isOpen && (
        <div className={css.modal}>
          <div className={css.modalHeader}>
            <UserBar bgIcon={"white"} />
            <svg className={css.iconClose} onClick={closeModal}>
              <use href="/Vocab-builder/sprite.svg#icon-close"></use>
            </svg>
          </div>
          <ul className={css.linkList}>
            <li className={css.linkItemActive}>
              <Link to="/Vocab-builder/dictionary" onClick={closeModal}>
                Dictionary
              </Link>
            </li>
            <li className={css.linkItem} onClick={closeModal}>
              <Link to="/Vocab-builder/recommend">Recommend</Link>
            </li>
            <li className={css.linkItem} onClick={closeModal}>
              <Link to="/Vocab-builder/training">Training</Link>
            </li>
            <li className={css.logout} onClick={closeModal}>
              <Link to="/Vocab-builder/log-out">Log out</Link>
              <svg className={css.iconOut}>
                <use href="/Vocab-builder/sprite.svg#icon-arrow-out"></use>
              </svg>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
