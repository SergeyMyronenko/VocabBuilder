import {
  Table,
  Header,
  HeaderRow,
  Body,
  Row,
  HeaderCell,
  Cell,
} from "@table-library/react-table-library/table";
import { useTheme } from "@table-library/react-table-library/theme";

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

  const customTheme = {
    Table: `
       display: grid;  
      grid-template-columns: 82px 116px 96px 49px;  
      width: 100%;
      padding: 0 16px;
    `,
    Header: `
    border-radius: 8px 8px 0 0;
    `,
    HeaderRow: `
    width: 100%;
    background-color:rgba(133, 170, 159, 0.1);;
     
    `,
    HeaderCell: `
    border-bottom: 1px solid #dbdbdb;
    border-right: 1px solid #dbdbdb;
    padding: 16px 14px;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    color: var(--text-color);
    
    `,
    Body: `
    background-color: var(--white);
    `,
    Cell: `
    padding: 16px 14px;
    border-bottom: 1px solid #dbdbdb;
    border-right: 1px solid #dbdbdb;
    justify-items: flex-start;
    align-items: center;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 14px;
    color: var(--black);
    word-break: keep-all;
    `,
  };

  const theme = useTheme(customTheme);

  return (
    <Table data={data} theme={theme}>
      {(tableList) => (
        <>
          <Header>
            <HeaderRow>
              <HeaderCell>Word</HeaderCell>
              <HeaderCell>Translation</HeaderCell>
              <HeaderCell>Progress</HeaderCell>
              <HeaderCell></HeaderCell>
            </HeaderRow>
          </Header>

          <Body>
            {tableList.map((item) => (
              <Row key={item.id} item={item}>
                <Cell>{item.name}</Cell>
                <Cell>{item.translation}</Cell>
                <Cell>{item.progress}</Cell>
                <Cell>
                  <button className={css.button}>
                    <p className={css.text}>...</p>
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
