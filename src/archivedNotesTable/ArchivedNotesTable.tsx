import archiveIcon from "../resources/img/archive.svg";
import NotesTableHeader from "../notesTableHeader/NotesTableHeader";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { unarchiveNote } from "../store/noteSlice";

const ArchivedNotesTable = () => {
  const archivedNotes = useAppSelector(
    (state) => state.noteSlice.archivedNotes
  );

  const displayArchiveTable = useAppSelector(state => state.uiSlice.displayArchiveTable);

  const dispatch = useAppDispatch();

  const onUnarchive = (item: Note) => {
	dispatch(unarchiveNote(item));
  }

  return (
    <>
      <NotesTableHeader headerType="archivedNotes"/>
      <div className={`container text-center text-dark bg-body-secondary py-2 mt-2 archived-notes-container
		 ${displayArchiveTable ? 'd-block' : 'd-none'}`}>
        {archivedNotes.map((item) => (
          <div
            key={item.id}
            className="row border-top border-bottom border-warning py-3"
          >
            <div className="col border-end border-warning">{item.name}</div>
            <div className="col border-end border-warning">
              {item.timeOfCreation}
            </div>
            <div className="col border-end border-warning">{item.category}</div>
            <div className="col border-end border-warning">{item.content}</div>
            <div className="col border-end border-warning">{item.date}</div>
            <div className="col">
              <button type="button" onClick={() => onUnarchive(item)} className="btn btn-danger">
                <img src={archiveIcon} alt="Archive Icon" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ArchivedNotesTable;
