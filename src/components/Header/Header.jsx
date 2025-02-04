import sprite from "../../image/sprite.svg";

export const Header = () => {
  return (
    <div>
      <svg className="logo">
        <use href={`${sprite}#icon-union`}></use>
      </svg>
    </div>
  );
};
