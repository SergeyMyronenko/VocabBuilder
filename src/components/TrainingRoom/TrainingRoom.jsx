import image from "../../image/blood-report.png";
import iconUa from "../../image/ukraine.png";
import iconUk from "../../image/united-kingdom.png";
import { useForm } from "react-hook-form";
import sprite from "/Vocab-builder/sprite.svg";
import css from "./TrainingRoom.module.css";
import { useState } from "react";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import clsx from "clsx";
import { Link, useNavigate } from "react-router-dom";
import { Box, Modal } from "@mui/material";
import book from "../../image/open-book.png";
import { p } from "@table-library/react-table-library/styles-492c6342";

export const TrainingRoom = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([
    { id: 1, name: "apple", translation: "яблуко", progress: 50 },
  ]);
  const [incorrectWords, setIncorrectWods] = useState([]);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const openModal = () => {
    if (data.length === 0) {
      navigate("/Vocab-builder/dictionary", {
        state: { openAddWordModal: true },
      });
    } else {
      setIsOpen(true);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    navigate("/Vocab-builder/dictionary");
  };

  return (
    <div className={clsx(css.mainWrapper, data.length !== 0 && css.paddingTop)}>
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
        <div className={css.formBlock}>
          <div className={css.progress}>
            <ProgressBar />
          </div>

          <form onSubmit={handleSubmit}>
            <div className={css.uaBlock}>
              <div className={css.titleWrapper}>
                <p>Введіть переклад</p>
                <div className={css.ukraineTablet}>
                  <img src={iconUa} alt="icon ukrainian flag" />
                  <p>Ukraine</p>
                </div>
              </div>
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
              <div className={css.titleWrapper}>
                <p>Break in</p>
                <div className={css.englishTablet}>
                  <img src={iconUk} alt="icon united kingdom flag" />
                  <p>English</p>
                </div>
              </div>
              <input
                className={css.input}
                type="text"
                defaultValue=""
                {...register("wordUk", { min: 2 })}
              />
              <div className={css.english}>
                <img src={iconUk} alt="icon united kingdom flag" />
                <p>English</p>
              </div>
            </div>
          </form>
        </div>
      )}
      <div className={css.buttonBottom}>
        <button className={css.buttonThirst} type="button" onClick={openModal}>
          {data.length === 0 ? "Add word" : "Save"}
        </button>
        <Link className={css.linkCancel} to="/Vocab-builder/dictionary">
          Cancel
        </Link>
      </div>

      {/* -----  Modal -----  */}
      <Modal
        open={isOpen}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            borderRadius: "16px",
            backgroundColor: "var(--accent-color)",
            width: "343px",
            padding: "48px 16px",
            position: "relative",
            outline: "none",
          }}
        >
          <svg className={css.modalClose} onClick={closeModal}>
            <use href={`${sprite}#icon-close`}></use>
          </svg>

          <h2 className={css.titleModal}>Well done</h2>
          <div className={css.wordsWrapper}>
            <div>
              <p className={css.answer}>Сorrect answers: </p>
              <ul>
                {data.map((word, i) => (
                  <li key={i} className={css.wordItem}>
                    {word.name}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className={css.answer}>Mistakes:</p>
              <ul>
                {incorrectWords.length > 0 ? (
                  incorrectWords.map((word, i) => <li key={i}>{word}</li>)
                ) : (
                  <p className={css.text}>No mistakes</p>
                )}
              </ul>
              <img
                className={clsx(
                  css.iconBook,
                  incorrectWords.length > 4 && css.disable
                )}
                src={book}
                alt="open book icon"
              />
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
