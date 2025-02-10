import {
  Table,
  Header,
  HeaderRow,
  Body,
  Row,
  HeaderCell,
  Cell,
} from "@table-library/react-table-library/table";

import css from "./WordTable.module.css";
import { useState } from "react";

export const WordTable = () => {
  const [data, setData] = useState({
    nodes: [
      { id: 1, name: "apple", translation: "яблуко", progress: "50%" },
      { id: 2, name: "car", translation: "авто", progress: "70%" },
      { id: 3, name: "house", translation: "будинок", progress: "30%" },
      { id: 4, name: "sun", translation: "сонце", progress: "90%" },
      { id: 5, name: "computer", translation: "комп'ютер", progress: "60%" },
      { id: 6, name: "book", translation: "книга", progress: "80%" },
      { id: 7, name: "tree", translation: "дерево", progress: "40%" },
      { id: 8, name: "phone", translation: "телефон", progress: "65%" },
      { id: 9, name: "table", translation: "стіл", progress: "75%" },
      { id: 10, name: "window", translation: "вікно", progress: "55%" },
    ],
  });

  return (
    <Table data={data} className={css.wrapper}>
      {(tableList) => (
        <>
          <Header>
            <HeaderRow>
              <HeaderCell className={css.tableTitle}>Word</HeaderCell>
              <HeaderCell className={css.tableTitle}>Translation</HeaderCell>
              <HeaderCell className={css.tableTitle}>Progress</HeaderCell>
              <HeaderCell className={css.tableTitle}></HeaderCell>
            </HeaderRow>
          </Header>

          <Body>
            {tableList.map((item) => (
              <Row key={item.id} item={item}>
                <Cell>{item.name}</Cell>
                <Cell>{item.translation}</Cell>
                <Cell>{item.progress}</Cell>
                <Cell>
                  <button>
                    <p>. . .</p>
                  </button>
                </Cell>
              </Row>
            ))}
          </Body>
        </>
      )}
    </Table>
  );
};
