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

  const closeModal = (value) => {
    setSelectedBtn(value);
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
          {login && (
            <ul className={css.headerNavList}>
              <li onClick={() => selectButton("Dictionary")}>
                <Link
                  to="/Vocab-builder/dictionary"
                  className={clsx(
                    css.navListItem,
                    selectedBtn === "Dictionary" && css.activeBtn
                  )}
                >
                  Dictionary
                </Link>
              </li>
              <li onClick={() => selectButton("Recommend")}>
                <Link
                  to="/Vocab-builder/recommend"
                  className={clsx(
                    css.navListItem,
                    selectedBtn === "Recommend" && css.activeBtn
                  )}
                >
                  Recommend
                </Link>
              </li>
              <li onClick={() => selectButton("Training")}>
                <Link
                  to="/Vocab-builder/training"
                  className={clsx(
                    css.navListItem,
                    selectedBtn === "Training" && css.activeBtn
                  )}
                >
                  Training
                </Link>
              </li>
            </ul>
          )}
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
            <li onClick={() => closeModal("Dictionary")}>
              <Link
                to="/Vocab-builder/dictionary"
                className={clsx(
                  css.linkItem,
                  selectedBtn === "Dictionary" && css.linkItemActive
                )}
              >
                Dictionary
              </Link>
            </li>
            <li onClick={() => closeModal("Recommend")}>
              <Link
                to="/Vocab-builder/recommend"
                className={clsx(
                  css.linkItem,
                  selectedBtn === "Recommend" && css.linkItemActive
                )}
              >
                Recommend
              </Link>
            </li>
            <li onClick={() => closeModal("Training")}>
              <Link
                to="/Vocab-builder/training"
                className={clsx(
                  css.linkItem,
                  selectedBtn === "Training" && css.linkItemActive
                )}
              >
                Training
              </Link>
            </li>
            <li className={css.logout}>
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
