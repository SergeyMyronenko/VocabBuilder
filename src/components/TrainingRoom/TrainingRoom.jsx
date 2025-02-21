import image from "../../image/blood-report.png";
import iconUa from "../../image/ukraine.png";
import iconUk from "../../image/united-kingdom.png";
import { useForm } from "react-hook-form";
import sprite from "/Vocab-builder/sprite.svg";
import css from "./TrainingRoom.module.css";
import { useState } from "react";
import { ProgressBar } from "../ProgressBar/ProgressBar";

export const TrainingRoom = () => {
  const [data, setData] = useState([
    // { id: 1, name: "apple", translation: "яблуко", progress: 50 },
  ]);
  const { register, handleSubmit } = useForm();

  return (
    <div className={css.mainWrapper}>
      {data.length === 0 ? (
        <div className={css.infoBlock}>
          <img
            className={css.imagePaper}
            src={image}
            alt="image paper on page"
          />
          <h3 className={css.title}>
            You don&#39;t have a single word to learn right now.
          </h3>
          <p className={css.titleText}>
            Please create or add a word to start the workout. We want to improve
            your vocabulary and develop your knowledge, so please share the
            words you are interested in adding to your study.
          </p>
        </div>
      ) : (
        <div>
          <div className={css.progress}>
            <ProgressBar />
          </div>

          <form onSubmit={handleSubmit}>
            <div className={css.uaBlock}>
              <p>Введіть переклад</p>
              <input
                type="text"
                className={css.input}
                defaultValue=""
                {...register("wordUa", { min: 2 })}
              />
              <div className={css.uaItem}>
                <div className={css.buttonBox}>
                  <button className={css.buttonNext} type="button">
                    Next
                  </button>
                  <svg className={css.iconArrow}>
                    <use href={`${sprite}#icon-arrow-right`}></use>
                  </svg>
                </div>
                <div className={css.ukraine}>
                  <img src={iconUa} alt="icon ukrainian flag" />
                  <p>Ukraine</p>
                </div>
              </div>
            </div>
            <div className={css.ukBlock}>
              <p>Break in</p>
              <input
                className={css.input}
                type="text"
                defaultValue=""
                {...register("wordUk", { min: 2 })}
              />
              <div className={css.english}>
                <img src={iconUk} alt="icon ukrainian flag" />
                <p>English</p>
              </div>
            </div>
          </form>
        </div>
      )}
      <div className={css.buttonBottom}>
        <button className={css.buttonThirst} type="button">
          {data.length === 0 ? "Add" : "Save"}
        </button>
        <button className={css.buttonSecond} type="button">
          Cancel
        </button>
      </div>
    </div>
  );
};
