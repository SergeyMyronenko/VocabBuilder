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
} from "@mui/material";
import { useState } from "react";
import css from "./WordsTable.module.css";
import { ProgressBar } from "../ProgressBar/ProgressBar";

export const WordsTable = () => {
  const [anchorEl, setAnchorEl] = useState("bottom-end");
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState();

  const [data, setData] = useState([
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

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => !prev);
    setPlacement("bottom-end");
  };
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
              <TableRow key={item.id}>
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
        anchorEl={anchorEl}
        placement={placement}
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <Typography
                sx={{
                  padding: "12px 24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <button className={css.buttonModal}>
                  <svg className={css.iconModal}>
                    <use href="/Vocab-builder/sprite#icon-edit-01"></use>
                  </svg>
                  Edit
                </button>
                <button className={css.buttonModal}>
                  <svg className={css.iconModal}>
                    <use href="/Vocab-builder/sprite#icon-trash"></use>
                  </svg>
                  Delete
                </button>
              </Typography>
            </Paper>
          </Fade>
        )}
      </Popper>
    </div>
  );
};
