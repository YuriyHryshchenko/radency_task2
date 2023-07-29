import NotesTableHeader from "../notesTableHeader/NotesTableHeader";
import { useAppSelector } from "../store/hooks";

const SummaryNotesTable = () => {
  const summaryCategories = useAppSelector(state => state.noteSlice.summary);
  return (
    <>
      <NotesTableHeader headerType="summary" />
      <div className="container text-center text-dark bg-body-secondary py-2 mt-2 summary-container">
        <div className="row border-top border-bottom border-warning py-3 summary-task-row">
          <div className="col border-end border-warning">Task</div>
          <div className="col border-end border-warning summary-task-active">{summaryCategories.taskActive}</div>
          <div className="col summary-task-archived">{summaryCategories.taskArchived}</div>
        </div>
        <div className="row border-bottom border-warning py-3 summary-idea-row">
          <div className="col border-end border-warning">Idea</div>
          <div className="col border-end border-warning summary-idea-active">{summaryCategories.ideaActive}</div>
          <div className="col summary-idea-archived">{summaryCategories.ideaArchived}</div>
        </div>
        <div className="row border-warning py-3 summary-thought-row">
          <div className="col border-end border-warning">Random Thought</div>
          <div className="col border-end border-warning summary-thought-active">{summaryCategories.thoughtActive}</div>
          <div className="col summary-thought-archived">{summaryCategories.thoughtArchived}</div>
        </div>
      </div>
    </>
  );
};

export default SummaryNotesTable;
