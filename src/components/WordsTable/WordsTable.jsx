import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Popper,
  Fade,
  Paper,
  Modal,
  Box,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import css from "./WordsTable.module.css";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import sprite from "/public/sprite.svg";
import uaImg from "../../image/ukraine.png";
import ukImg from "../../image/united-kingdom.png";

export const WordsTable = ({ arrowOn }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [itemId, setItemId] = useState(null);

  const [placement, setPlacement] = useState("bottom-end");

  const [data, setData] = useState([
    {
      id: 1,
      name: "apple",
      translation: "яблуко",
      progress: 50,
      category: "Noun",
    },
    { id: 2, name: "car", translation: "авто", progress: 70, category: "Noun" },
    {
      id: 3,
      name: "house",
      translation: "будинок",
      progress: 30,
      category: "Noun",
    },
    {
      id: 4,
      name: "sun",
      translation: "сонце",
      progress: 90,
      category: "Noun",
    },
    {
      id: 5,
      name: "computer",
      translation: "комп'ютер",
      progress: 60,
      category: "Noun",
    },
    {
      id: 6,
      name: "book",
      translation: "книга",
      progress: 80,
      category: "Noun",
    },
    {
      id: 7,
      name: "tree",
      translation: "дерево",
      progress: 40,
      category: "Noun",
    },
    {
      id: 8,
      name: "phone",
      translation: "телефон",
      progress: 65,
      category: "Noun",
    },
    {
      id: 9,
      name: "table",
      translation: "стіл",
      progress: 75,
      category: "Noun",
    },
    {
      id: 10,
      name: "window",
      translation: "вікно",
      progress: 55,
      category: "Noun",
    },
  ]);

  const { register, handleSubmit } = useForm();

  const popperRef = useRef(null);

  const handleOpen = () => setOpenEdit(true);
  const handleClose = () => setOpenEdit(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => !prev);
    setPlacement("bottom-end");
    setItemId(event.currentTarget.dataset.id);
  };

  const handleClosePopup = (event) => {
    if (
      popperRef.current &&
      !popperRef.current.contains(event.target) &&
      !anchorEl.contains(event.target)
    ) {
      setOpen(false);
    }
  };

  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClosePopup);
      return () => {
        document.removeEventListener("mousedown", handleClosePopup);
      };
    }
  }, [open]);

  return (
    <div className={css.tableComponent}>
      <TableContainer className={css.container}>
        <Table className={css.table}>
          <TableHead className={css.title}>
            <TableRow>
              <TableCell className={css.tableRow}>
                <div className={css.flagTAblet}>
                  <span>Word</span>
                  <img src={ukImg} alt="icon uk flag " />
                </div>
              </TableCell>
              <TableCell className={css.tableRow}>
                <div className={css.flagTAblet}>
                  <span>Translation</span>
                  <img src={uaImg} alt="icon ukrainian flag" />
                </div>
              </TableCell>
              <TableCell className={css.tableRowTablet}>Category</TableCell>
              <TableCell className={css.tableRow}>Progress</TableCell>
              <TableCell className={css.tableRow}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody className={css.bodyTable}>
            {data.map((item) => (
              <TableRow key={item.id} className={css.rowList}>
                <TableCell className={css.bodyTableRow}>{item.name}</TableCell>
                <TableCell className={css.bodyTableRow}>
                  {item.translation}
                </TableCell>
                <TableCell className={css.bodyTableRow}>
                  {item.category}
                </TableCell>
                <TableCell className={css.bodyTableRow}>
                  <ProgressBar value={item.progress} />
                </TableCell>
                <TableCell className={css.bodyTableRow}>
                  {arrowOn === "arrow" ? (
                    <button className={css.button}>
                      <svg className={css.iconArrow}>
                        <use href={`${sprite}#icon-arrow-right`}></use>
                      </svg>
                    </button>
                  ) : (
                    <button
                      className={css.button}
                      onClick={handleClick}
                      data-id={item.id}
                    >
                      <p className={css.text}>...</p>
                    </button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* ---- Popover ----- */}
      <Popper
        sx={{ zIndex: 20 }}
        open={open}
        anchorEl={anchorEl}
        placement={placement}
        transition
        ref={popperRef}
      >
        {({ TransitionProps }) => (
          <Fade
            {...TransitionProps}
            timeout={350}
            sx={{ borderRadius: "16px" }}
          >
            <Paper>
              <Typography
                sx={{
                  padding: "12px 24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <button className={css.buttonModal} onClick={handleOpen}>
                  <svg className={css.iconModal}>
                    <use href={`${sprite}#icon-edit-01`}></use>
                  </svg>
                  Edit
                </button>
                <button
                  className={css.buttonModal}
                  onClick={() => handleDelete(itemId)}
                >
                  <svg className={css.iconModal}>
                    <use href={`${sprite}#icon-trash`}></use>
                  </svg>
                  Delete
                </button>
              </Typography>
            </Paper>
          </Fade>
        )}
      </Popper>

      {/* ----- Edit Modal ----- */}

      <Modal
        open={openEdit}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box className={css.editModal}>
          <form onSubmit={handleSubmit}>
            <svg className={css.modalClose} onClick={handleClose}>
              <use href={`${sprite}#icon-close`}></use>
            </svg>
            <div className={css.formWrapper}>
              <div className={css.titleText}>
                <img src={uaImg} alt="ukrainian flag" />
                <p className={css.country}>Ukraine</p>
              </div>
              <div className={css.labelModal}>
                <input
                  className={css.input}
                  {...register("uaword", { required: true })}
                />
                <div className={css.titleTextModal}>
                  <img
                    className={css.imageModal}
                    src={uaImg}
                    alt="ukrainian flag"
                  />
                  <p className={css.country}>Ukraine</p>
                </div>
              </div>

              <div className={css.titleText}>
                <img src={ukImg} alt="uk flag" />
                <p className={css.country}>English</p>
              </div>
              <div className={css.labelModal}>
                <input
                  className={css.input}
                  {...register("ukword", { required: true })}
                />
                <div className={css.titleTextModal}>
                  <img src={ukImg} alt="uk flag" />
                  <p className={css.country}>English</p>
                </div>
              </div>
            </div>

            <div className={css.buttonBox}>
              <button className={css.buttonSave} type="submit">
                Save
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
