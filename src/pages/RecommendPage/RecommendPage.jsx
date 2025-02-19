import { Dashboard } from "../../components/Dashboard/Dashboard";
import { WordsPagination } from "../../components/WordsPagination/WordsPagination";
import { WordsTable } from "../../components/WordsTable/WordsTable";

export const RecommendPage = () => {
  return (
    <div>
      <Dashboard hide={"hide"} />
      <WordsTable arrowOn={"arrow"} />
      <WordsPagination />
    </div>
  );
};
