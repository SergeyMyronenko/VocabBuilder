import { Dashboard } from "../../components/Dashboard/Dashboard";
// import { WordsTable } from "../../components/WordsTable/WordsTable";
import { WordsTable } from "../../components/WordsTable/WordsTable";

export const DictionaryPage = () => {
  return (
    <div>
      <Dashboard />
      <WordsTable />
      {/* <WordTable /> */}
    </div>
  );
};
