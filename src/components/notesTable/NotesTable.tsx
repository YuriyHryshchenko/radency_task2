import { useState } from "react";
import CreateNoteButton from "../createNoteButton/CreateNoteButton";
import Modal from "../modal/Modal";
import NotesTableHeader from "../notesTableHeader/NotesTableHeader";
import archiveIcon from "../../resources/img/archive.svg";
import deleteIcon from "../../resources/img/delete.svg";
import editIcon from "../../resources/img/edit.svg";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { deleteNote, archiveNote } from "../../store/noteSlice";
import { Note } from "../../interfaces/appInterfaces";


const NotesTable = () => {
  const notes = useAppSelector((state) => state.noteSlice.notes);
  const dispatch = useAppDispatch();

  const [note, setNote] = useState<Note>();

  const [openNoteModal, setOpenNoteModal] = useState<string | undefined>();
  const [openEditNoteModal, setOpenEditNoteModal] = useState<
    string | undefined
  >();

  const onEdit = (note: Note) => {
    setNote(note);
    setOpenEditNoteModal("dismissible");
  };

  const onDelete = (id: string) => {
    dispatch(deleteNote(id));
  };

  const onArchive = (note: Note) => {
    dispatch(archiveNote(note));
  };

  return (
    <>
      <NotesTableHeader headerType="notes" />
      <div className="container py-2 mx-auto text-center text-stone-600 mt-2 bg-gray-200">
        {notes.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-6 py-2 border-t-2 border-yellow-400"
          >
            <div className="border-r-2 border-yellow-300">{item.name}</div>
            <div className="border-r-2 border-yellow-300">
              {item.timeOfCreation}
            </div>
            <div className="border-r-2 border-yellow-300">{item.category}</div>
            <div className="border-r-2 border-yellow-300">{item.content}</div>
            <div className="border-r-2 border-yellow-300">{`${item.date.map(item => {
              return ` ${item}`
            })}`}</div>
            <div>
              <button
                onClick={() => onEdit(item)}
                type="button"
                className="bg-blue-700 py-2 px-3 rounded hover:bg-blue-800 mr-1"
              >
                <img src={editIcon} alt="Edit Icon" />
              </button>
              <button
                onClick={() => onArchive(item)}
                type="button"
                className="bg-green-700 py-2 px-3 rounded hover:bg-green-800 mr-1"
              >
                <img src={archiveIcon} alt="Archive Icon" />
              </button>
              <button
                onClick={() => onDelete(item.id)}
                type="button"
                className="bg-red-700 py-2 px-3 rounded hover:bg-red-800"
              >
                <img src={deleteIcon} alt="Delete Icon" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <CreateNoteButton onClick={() => setOpenNoteModal("dismissible")} />
      <Modal
        modalId="modalNote"
        openModal={openNoteModal}
        setOpenModal={setOpenNoteModal}
      />
      <Modal
        modalId="editModalNote"
        note={note}
        openModal={openEditNoteModal}
        setOpenModal={setOpenEditNoteModal}
      />
    </>
  );
};

export default NotesTable;
