import archiveIcon from "../../resources/img/archive.svg";
import NotesTableHeader from "../notesTableHeader/NotesTableHeader";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { unarchiveNote } from "../../store/noteSlice";
import { Note } from "../../interfaces/appInterfaces";

const ArchivedNotesTable = () => {
  const archivedNotes = useAppSelector(
    (state) => state.noteSlice.archivedNotes
  );

  const displayArchiveTable = useAppSelector(
    (state) => state.uiSlice.displayArchiveTable
  );

  const dispatch = useAppDispatch();

  const onUnarchive = (item: Note) => {
    dispatch(unarchiveNote(item));
  };

  return (
    <>
      <NotesTableHeader headerType="archivedNotes" />
      <div
        className={`container mx-auto text-center text-stone-600 mt-2 bg-gray-200
		 ${displayArchiveTable ? "block" : "hidden"}`}
      >
        {archivedNotes.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-6 border-t-2 border-yellow-400 py-2"
          >
            <div className="border-r-2 border-yellow-300">{item.name}</div>
            <div className="border-r-2 border-yellow-300">
              {item.timeOfCreation}
            </div>
            <div className="border-r-2 border-yellow-300">{item.category}</div>
            <div className="border-r-2 border-yellow-300">{item.content}</div>
            <div className="border-r-2 border-yellow-300">{item.date}</div>
            <div>
              <button
                type="button"
                onClick={() => onUnarchive(item)}
                className="bg-red-700 py-2 px-3 rounded hover:bg-red-800"
              >
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
