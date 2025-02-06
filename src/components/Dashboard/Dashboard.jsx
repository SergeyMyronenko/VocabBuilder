import { useForm } from "react-hook-form";
import css from "./Dashboard.module.css";

export const Dashboard = () => {
  const { register } = useForm();

  return (
    <div className={css.dashboard}>
      <form className={css.form}>
        <div className={css.inputWrapper}>
          <input
            className={css.input}
            defaultValue=""
            {...register("Filter", { min: 2 })}
          />
          <svg className={css.icon}>
            <use href="/Vocab-builder/sprite.svg#icon-search"></use>
          </svg>
        </div>
        <div className={css.inputWrapper}>
          <select
            className={css.input}
            name="Categories"
            id="Categories"
            {...register("category")}
          >
            <option value="">Categories</option>
            <option value="verb">Verb</option>
            <option value="participle">Participle</option>
            <option value="noun">Noun</option>
            <option value="adjective">Adjective</option>
            <option value="pronoun">Pronoun</option>
            <option value="numerals">Numerals</option>
            <option value="adverb">Adverb</option>
            <option value="preposition">Preposition</option>
            <option value="conjunction">Conjunction</option>
            <option value="phrasal-verb">Phrasal verb</option>
            <option value="phrase">Functional phrase</option>
          </select>
          <svg className={css.iconArrow}>
            <use href="/Vocab-builder/sprite.svg#icon-arrow-down"></use>
          </svg>
        </div>
      </form>
    </div>
  );
};
