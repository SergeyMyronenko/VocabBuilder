import { useState } from "react";
import { MainLogo } from "../MainLogo/MainLogo";
import { UserBar } from "../UserBar/UserBar";
import { UserNav } from "../UserNav/UserNav";
import css from "./Header.module.css";
import { Link } from "react-router-dom";
import clsx from "clsx";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [login, setLogin] = useState(true);
  const [selectedBtn, setSelectedBtn] = useState("Dictionary");

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const selectButton = (value) => {
    setSelectedBtn(value);
  };

  return (
    <div className={css.headerBlock}>
      <div className={css.headerWrapper}>
        <MainLogo />
        <nav className={css.headerNav}>
          <ul className={css.headerNavList}>
            <li
              className={clsx(
                css.navListItem,
                selectedBtn === "Dictionary" && css.activeBtn
              )}
              onClick={() => selectButton("Dictionary")}
            >
              Dictionary
            </li>
            <li
              className={clsx(
                css.navListItem,
                selectedBtn === "Recommend" && css.activeBtn
              )}
              onClick={() => selectButton("Recommend")}
            >
              Recommend
            </li>
            <li
              className={clsx(
                css.navListItem,
                selectedBtn === "Training" && css.activeBtn
              )}
              onClick={() => selectButton("Training")}
            >
              Training
            </li>
          </ul>
        </nav>
        {login && (
          <div className={css.navBlock}>
            <UserBar />
            <UserNav isOpen={openModal} />
          </div>
        )}
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
