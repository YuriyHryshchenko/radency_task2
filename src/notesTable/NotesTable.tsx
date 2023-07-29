import { useState } from "react";
import CreateNoteButton from "../createNoteButton/CreateNoteButton";
import Modal from "../modal/Modal";
import NotesTableHeader from "../notesTableHeader/NotesTableHeader";
import archiveIcon from "../resources/img/archive.svg";
import deleteIcon from "../resources/img/delete.svg";
import editIcon from "../resources/img/edit.svg";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { deleteNote, archiveNote } from "../store/noteSlice";

const NotesTable = () => {
  const notes = useAppSelector((state) => state.noteSlice.notes);
  const dispatch = useAppDispatch();

  const [note, setNote] = useState<Note>();

  const onEdit = (note: Note) => {
    setNote(note);
  };

  const onDelete = (id: string) => {
	dispatch(deleteNote(id));
  };

  const onArchive = (note: Note) => {
	dispatch(archiveNote(note));
  }

  return (
    <>
      <NotesTableHeader />
      <div className="container text-center text-dark bg-body-secondary py-2 mt-2 notes-container">
        {notes.map((item) => (
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
            <div className="col border-end border-warning">{`${item.date}`}</div>
            <div className="col">
              <button
                onClick={() => onEdit(item)}
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#editModalNote"
              >
                <img src={editIcon} alt="Edit Icon" />
              </button>
              <button
				  	 onClick={() => onArchive(item)}
                type="button"
                className="btn btn-success"
              >
                <img src={archiveIcon} alt="Archive Icon" />
              </button>
              <button onClick={() => onDelete(item.id)} type="button" className="btn btn-danger">
                <img src={deleteIcon} alt="Delete Icon" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <CreateNoteButton />
      <Modal modalId="modalNote" />
      <Modal modalId="editModalNote" note={note} />
    </>
  );
};

export default NotesTable;
