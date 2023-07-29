import ArchivedNotesTable from "./archivedNotesTable/ArchivedNotesTable";
import NotesTable from "./notesTable/NotesTable";
import SummaryNotesTable from "./summaryNotesTable/SummaryNotesTable";

function App() {
  return (
    <>
      <NotesTable/>
      <ArchivedNotesTable/>
      <SummaryNotesTable/>
    </>
  );
}

export default App;
