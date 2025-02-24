import { useForm } from "react-hook-form";
import css from "./Dashboard.module.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box, Modal } from "@mui/material";
import sprite from "/public/sprite.svg";
import uaImg from "../../image/ukraine.png";
import ukImg from "../../image/united-kingdom.png";
import clsx from "clsx";

export const Dashboard = ({ hide }) => {
  const [add, setAdd] = useState(false);
  const [checked, setChecked] = useState("regular");
  const [selectedCategory, setSelectedCategory] = useState("");

  const { register, handleSubmit } = useForm();
  const location = useLocation();

  const handleRadioChange = (value) => {
    setChecked(value);
  };

  const handleOpen = () => {
    setAdd(true);
    setSelectedCategory("verb");
  };

  const handleClose = () => {
    setAdd(false);
  };

  const handleSelectCategory = (e) => {
    setSelectedCategory(e.target.value);
  };

  useEffect(() => {
    if (location.state?.openAddWordModal) {
      setAdd(true);
    }
  }, [location.state]);

  return (
    <div className={css.dashboard}>
      <form className={css.form}>
        <div className={css.inputWrapper}>
          <input
            className={css.input}
            defaultValue=""
            {...register("Filter", { min: 2 })}
            placeholder="Find the word"
          />
          <svg className={css.icon}>
            <use href="/Vocab-builder/sprite.svg#icon-search"></use>
          </svg>
        </div>
        <div className={css.inputWrapper}>
          <select
            className={css.input}
            name="CategoriesModal"
            id="CategoriesModal"
            {...register("categoryModal")}
            defaultValue="categories"
            onChange={handleSelectCategory}
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
          {selectedCategory === "verb" && (
            <div className={css.radioWrapper}>
              <div
                className={clsx(
                  css.radioBox,
                  checked !== "regular" && css.radioBoxActive
                )}
              >
                <div
                  className={css.radioBoxItem}
                  onClick={() => handleRadioChange("regular")}
                >
                  <span>
                    <svg
                      className={clsx(
                        css.radioBpxPoint,
                        checked === "regular" && css.radioBpxPointActive
                      )}
                    >
                      <use
                        href={`${sprite}${
                          checked === "regular"
                            ? "#icon-checked-radio-black"
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
                  <label className={css.label} htmlFor="regular">
                    Regular
                  </label>
                </div>
                <div
                  className={css.radioBoxItem}
                  onClick={() => handleRadioChange("irregular")}
                >
                  <span>
                    <svg
                      className={clsx(
                        css.radioBpxPoint,
                        checked === "irregular" && css.radioBpxPointActive
                      )}
                    >
                      <use
                        href={`${sprite}${
                          checked === "irregular"
                            ? "#icon-checked-radio-black"
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
                  <label className={css.label} htmlFor="irregular">
                    Irregular
                  </label>
                </div>
              </div>
              {checked === "irregular" && (
                <p className={css.irregularText}>
                  Such data must be entered in the format I-form II-form
                  III-form.
                </p>
              )}
            </div>
          )}
        </div>
      </form>
      <p className={clsx(css.text, selectedCategory === "verb" && css.textOff)}>
        To study: <span className={css.textValue}>20</span>
      </p>
      <div className={css.wordBox}>
        {hide !== "hide" && (
          <div className={css.wordBoxText}>
            <p>Add word</p>
            <svg className={css.iconWordBox} onClick={handleOpen}>
              <use href="/Vocab-builder/sprite.svg#icon-plus"></use>
            </svg>
          </div>
        )}

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
                defaultValue="verb"
                onChange={handleSelectCategory}
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
              {selectedCategory === "verb" && (
                <div className={css.radioWrapper}>
                  <div
                    className={clsx(
                      css.radioBox,
                      checked !== "regular" && css.radioBoxActive
                    )}
                  >
                    <div
                      className={css.radioBoxItem}
                      onClick={() => handleRadioChange("regular")}
                    >
                      <span>
                        <svg className={css.radioBpxPointModal}>
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
                      <label
                        className={clsx(
                          css.label,
                          add === true && css.labelModal
                        )}
                        htmlFor="regular"
                      >
                        Regular
                      </label>
                    </div>
                    <div
                      className={css.radioBoxItem}
                      onClick={() => handleRadioChange("irregular")}
                    >
                      <span>
                        <svg className={css.radioBpxPointModal}>
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
                      <label
                        className={clsx(
                          css.label,
                          add === true && css.labelModal
                        )}
                        htmlFor="irregular"
                      >
                        Irregular
                      </label>
                    </div>
                  </div>
                  {checked === "irregular" && (
                    <p
                      className={clsx(
                        css.irregularText,
                        add === true && css.irregularTextModal
                      )}
                    >
                      Such data must be entered in the format I-form II-form
                      III-form.
                    </p>
                  )}
                </div>
              )}
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
