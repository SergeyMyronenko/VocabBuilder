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

export const WordsTable = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const [placement, setPlacement] = useState("bottom-end");

  const [data] = useState([
    { id: 1, name: "apple", translation: "яблуко", progress: 50 },
    { id: 2, name: "car", translation: "авто", progress: 70 },
    { id: 3, name: "house", translation: "будинок", progress: 30 },
    { id: 4, name: "sun", translation: "сонце", progress: 90 },
    { id: 5, name: "computer", translation: "комп'ютер", progress: 60 },
    { id: 6, name: "book", translation: "книга", progress: 80 },
    { id: 7, name: "tree", translation: "дерево", progress: 40 },
    { id: 8, name: "phone", translation: "телефон", progress: 65 },
    { id: 9, name: "table", translation: "стіл", progress: 75 },
    { id: 10, name: "window", translation: "вікно", progress: 55 },
  ]);

  const { register, handleSubmit } = useForm();

  const popperRef = useRef(null);

  const handleOpen = () => setOpenEdit(true);
  const handleClose = () => setOpenEdit(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => !prev);
    setPlacement("bottom-end");
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

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClosePopup);
      return () => {
        document.removeEventListener("mousedown", handleClosePopup);
      };
    }
  }, [open]);

  console.log(anchorEl);

  return (
    <div>
      <TableContainer className={css.container}>
        <Table className={css.table}>
          <TableHead className={css.title}>
            <TableRow>
              <TableCell className={css.tableRow}>Word</TableCell>
              <TableCell className={css.tableRow}>Translation</TableCell>
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
                  <ProgressBar value={item.progress} />
                </TableCell>
                <TableCell className={css.bodyTableRow}>
                  <button className={css.button} onClick={handleClick}>
                    <p className={css.text}>...</p>
                  </button>
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
        anchorEl={popperRef.current}
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
                <button className={css.buttonModal}>
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
        <Box
          sx={{
            borderRadius: "16px",
            backgroundColor: "var(--accent-color)",
            width: "343px",
            padding: "48px 16px",
            position: "relative",
          }}
        >
          <form onSubmit={handleSubmit}>
            <svg className={css.modalClose} onClick={handleClose}>
              <use href={`${sprite}#icon-close`}></use>
            </svg>
            <div className={css.titleText}>
              <img src={uaImg} alt="ukrainian flag" />
              <p>Ukraine</p>
            </div>
            <input
              className={css.input}
              {...register("uaword", { required: true })}
            />
            <div className={css.titleText}>
              <img src={ukImg} alt="uk flag" />
              <p>English</p>
            </div>
            <input
              className={css.input}
              {...register("ukword", { required: true })}
            />
            <div className={css.buttonBox}>
              <button
                className={css.buttonSave}
                type="submit
              "
              >
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
