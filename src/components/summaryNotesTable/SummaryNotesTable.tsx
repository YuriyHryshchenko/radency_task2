import NotesTableHeader from "../notesTableHeader/NotesTableHeader";
import { useAppSelector } from "../../store/hooks";

const SummaryNotesTable = () => {
  const summaryCategories = useAppSelector((state) => state.noteSlice.summary);
  return (
    <>
      <NotesTableHeader headerType="summary" />
      <div className="container mx-auto text-center bg-gray-200 py-2 mt-2 mb-8">
        <div className="grid grid-cols-3 py-2 border-t-2 border-white">
          <div className="border-r-2 border-white">Task</div>
          <div className="border-r-2 border-white">
            {summaryCategories.sumCategoriesActive.Task}
          </div>
          <div>{summaryCategories.sumCategoriesArchived.Task}</div>
        </div>
        <div className="grid grid-cols-3 py-2 border-t-2 border-white">
          <div className="border-r-2 border-white">Idea</div>
          <div className="border-r-2 border-white">
            {summaryCategories.sumCategoriesActive.Idea}
          </div>
          <div>{summaryCategories.sumCategoriesArchived.Idea}</div>
        </div>
        <div className="grid grid-cols-3 py-2 border-t-2 border-white">
          <div className="border-r-2 border-white">Random Thought</div>
          <div className="border-r-2 border-white">
            {summaryCategories.sumCategoriesActive["Random Thought"]}
          </div>
          <div>{summaryCategories.sumCategoriesArchived["Random Thought"]}</div>
        </div>
      </div>
    </>
  );
};

export default SummaryNotesTable;
