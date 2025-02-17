import { useForm } from "react-hook-form";
import css from "./Dashboard.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Box, Modal } from "@mui/material";
import sprite from "/public/sprite.svg";
import uaImg from "../../image/ukraine.png";
import ukImg from "../../image/united-kingdom.png";

export const Dashboard = () => {
  const [add, setAdd] = useState(false);
  const [checked, setChecked] = useState("regular");
  const { register, handleSubmit } = useForm();

  const handleRadioChange = (value) => {
    setChecked(value);
  };

  const handleOpen = () => {
    setAdd(true);
  };

  const handleClose = () => {
    setAdd(false);
  };

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
      <p className={css.text}>
        To study: <span className={css.textValue}>20</span>
      </p>
      <div className={css.wordBox}>
        <div className={css.wordBoxText}>
          <p>Add word</p>
          <svg className={css.iconWordBox} onClick={handleOpen}>
            <use href="/Vocab-builder/sprite.svg#icon-plus"></use>
          </svg>
        </div>
        <div className={css.wordBoxText}>
          <p>Train oneself</p>
          <Link to="/training">
            <svg className={css.iconWordBox}>
              <use href="/Vocab-builder/sprite.svg#icon-arrow-right"></use>
            </svg>
          </Link>
        </div>
      </div>

      {/* ----- addWordModal ----- */}

      <Modal
        open={add}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
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
          <form onSubmit={handleSubmit}>
            <svg className={css.modalClose} onClick={handleClose}>
              <use href={`${sprite}#icon-close`}></use>
            </svg>
            <h2 className={css.addTitle}>Add word</h2>
            <p className={css.textLanguage}>
              Adding a new word to the dictionary is an important step in
              enriching the language base and expanding the vocabulary.
            </p>
            <div className={css.inputWrapper}>
              <select
                className={css.inputModal}
                name="Categories"
                id="Categories"
                {...register("category")}
              >
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
              <svg className={css.iconArrowModal}>
                <use href="/Vocab-builder/sprite.svg#icon-arrow-down"></use>
              </svg>
              <div className={css.radioBox}>
                <div
                  className={css.radioBoxItem}
                  onClick={() => handleRadioChange("regular")}
                >
                  <span>
                    <svg className={css.radioBpxPoint}>
                      <use
                        href={`${sprite}${
                          checked === "regular"
                            ? "#icon-checked-radio"
                            : "#icon-empty-radio"
                        }`}
                      ></use>
                    </svg>
                  </span>
                  <input
                    className={css.inputRadio}
                    type="radio"
                    id="regular"
                    name="verb"
                    value="regular"
                    checked={checked === "regular"}
                    onChange={() => handleRadioChange("regular")}
                  />
                  <label htmlFor="regular">Regular</label>
                </div>
                <div
                  className={css.radioBoxItem}
                  onClick={() => handleRadioChange("irregular")}
                >
                  <span>
                    <svg className={css.radioBpxPoint}>
                      <use
                        href={`${sprite}${
                          checked === "irregular"
                            ? "#icon-checked-radio"
                            : "#icon-empty-radio"
                        }`}
                      ></use>
                    </svg>
                  </span>
                  <input
                    className={css.inputRadio}
                    type="radio"
                    id="irregular"
                    name="verb"
                    value="irregular"
                    checked={checked === "irregular"}
                    onChange={() => handleRadioChange("irregular")}
                  />
                  <label htmlFor="irregular">Irregular</label>
                </div>
              </div>
            </div>
            <div className={css.titleText}>
              <img src={uaImg} alt="ukrainian flag" />
              <p>Ukraine</p>
            </div>
            <input
              className={css.inputModal}
              {...register("uaword", { required: true })}
            />
            <div className={css.titleText}>
              <img src={ukImg} alt="uk flag" />
              <p>English</p>
            </div>
            <input
              className={css.inputModal}
              {...register("ukword", { required: true })}
            />
            <div className={css.buttonBox}>
              <button
                className={css.buttonAdd}
                type="submit
              "
              >
                Add
              </button>
              <button
                className={css.buttonCancel}
                type="button"
                onClick={handleClose}
              >
                Cancel
              </button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
};
