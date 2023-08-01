import React, { useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { v4 as uuidv4 } from "uuid";
import { addNote, editNote } from "../../store/noteSlice";
import { Note } from "../../interfaces/appInterfaces";

import {
  Button,
  Modal as ModalWindow,
  Label,
  TextInput,
  Select,
  Textarea,
} from "flowbite-react";
import moment from "moment";

type ModalProps = {
  modalId: string;
  note?: Note;
  openModal: string | undefined;
  setOpenModal: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const Modal = ({ modalId, note, openModal, setOpenModal }: ModalProps) => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Task");
  const [content, setContent] = useState("");

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (modalId === "modalNote") {
      const timeOfCreation = moment().format('MMM DD, YYYY');
      const dateOfCreation = moment().format('DD/MM/YYYY');
      const note: Note = {
        id: uuidv4(),
        name,
        timeOfCreation,
        category,
        content,
        date: [dateOfCreation],
      };
      dispatch(addNote(note));
    } else if (modalId === "editModalNote") {

      const dateParsedFromContent = content.match(/^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[\/\-]\d{4}$/g) || []
      const newNote = {
        name,
        category,
        content,
        date: [...dateParsedFromContent],
      };

      const payload = {
        id: note?.id,
        note: newNote,
      };

      dispatch(editNote(payload));
    }

    setName("");
    setCategory("Task");
    setContent("");
    setOpenModal(undefined);
  };
  return (
    <>
      <ModalWindow
        dismissible
        show={openModal === "dismissible"}
        onClose={() => setOpenModal(undefined)}
      >
        <ModalWindow.Header>
          <div className="text-xl font-medium text-gray-900 dark:text-white">
            {modalId === "modalNote" ? "Create Note" : "Edit Note"}
          </div>
        </ModalWindow.Header>
        <ModalWindow.Body>
          <form onSubmit={handleSubmit}>
            <div>
              <div className="mb-2 block">
                <Label htmlFor={`${modalId}Name`} value="Name" />
              </div>
              <TextInput
                id={`${modalId}Name`}
                placeholder="Shopping List"
                onChange={onChangeName}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor={`${modalId}Category`} value="Category" />
              </div>
              <Select
                id={`${modalId}Category`}
                defaultValue="Task"
                onChange={onChangeCategory}
              >
                <option value="Task">Task</option>
                <option value="Random Thought">Random Thought</option>
                <option value="Idea">Idea</option>
              </Select>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor={`${modalId}Content`} value="Content" />
              </div>
              <Textarea
                id={`${modalId}Content`}
                placeholder="Tomatoes, bread..."
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>{
                  setContent(e.target.value);
                }}
                required
              />
            </div>
            <div className="flex items-center space-x-2 rounded-b border-gray-200 py-6 dark:border-gray-600">
              <Button type="submit">
                {modalId === "modalNote" ? "Create Note" : "Edit Note"}
              </Button>
              <Button color="gray" onClick={() => setOpenModal(undefined)}>
                Сlose
              </Button>
            </div>
          </form>
        </ModalWindow.Body>
      </ModalWindow>
    </>
  );
};

export default Modal;
