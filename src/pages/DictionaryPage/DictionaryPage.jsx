import { Dashboard } from "../../components/Dashboard/Dashboard";
import { WordsPagination } from "../../components/WordsPagination/WordsPagination";
import { WordsTable } from "../../components/WordsTable/WordsTable";

export const DictionaryPage = () => {
  return (
    <div>
      <Dashboard />
      <WordsTable />
      <WordsPagination />
    </div>
  );
};
