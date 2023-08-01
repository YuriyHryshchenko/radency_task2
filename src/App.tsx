import ArchivedNotesTable from "./components/archivedNotesTable/ArchivedNotesTable";
import NotesTable from "./components/notesTable/NotesTable";
import SummaryNotesTable from "./components/summaryNotesTable/SummaryNotesTable";

function App() {
  return (
    <>
      <NotesTable />
      <ArchivedNotesTable />
      <SummaryNotesTable />
    </>
  );
}

export default App;
