import { UserBar } from "../UserBar/UserBar";
import { UserNav } from "../UserNav/UserNav";
import css from "./Header.module.css";

export const Header = () => {
  return (
    <div className={css.headerWrapper}>
      <div className={css.logoWrapper}>
        <a className={css.logoLink} href="/">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={css.logo}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.9494 10.6667C17.2329 6.68175 17.4662 4.26667 11.9494 0C6.32743 4.35771 7.05206 6.66752 11.9494 10.6667ZM10.6667 12.0504C6.68175 6.76691 4.26667 6.53366 0 12.0504C4.35771 17.6724 6.66752 16.9478 10.6667 12.0504ZM24.0007 12.0504C20.0157 6.76694 17.6007 6.5337 13.334 12.0504C17.6917 17.6725 20.0015 16.9478 24.0007 12.0504ZM11.9494 23.9997C17.2329 20.0148 17.4662 17.5997 11.9494 13.333C6.32743 17.6907 7.05206 20.0005 11.9494 23.9997Z"
            />
          </svg>
        </a>
        <p>VocabBuilder</p>
      </div>
      <div className={css.navBlock}>
        <UserBar />
        <UserNav />
      </div>
    </div>
  );
};
