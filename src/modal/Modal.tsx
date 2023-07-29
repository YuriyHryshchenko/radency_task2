import React, { useState } from 'react'
import { useAppDispatch } from '../store/hooks'
import { v4 as uuidv4 } from 'uuid';
import { addNote, editNote } from '../store/noteSlice';

type ModalProps = {
	modalId: string,
	note?: Note
}

const Modal = ({modalId, note}: ModalProps) => {

	const dispatch = useAppDispatch();
	const [name, setName] = useState('');
	const [category, setCategory] = useState('Task');
	const [content, setContent] = useState('');
	const [date, setDate] = useState('');

	const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value)
	}
	const onChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setCategory(e.target.value);
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if(modalId === 'modalNote') {
			const timeOfCreation = new Date().toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'});
			const note: Note = {
				id: uuidv4(),
				name,
				timeOfCreation,
				category,
				content,
				date: [date]
			}
			dispatch(addNote(note));
		}
		else if (modalId === 'editModalNote') {
			const newNote = {
				name, 
				category,
				content,
				date: [date]
			}

			const payload = {
				id: note?.id,
				note: newNote
			}

			dispatch(editNote(payload))
		}

		setName('');
		setCategory('Task');
		setContent('')
		setDate('')
	}
  return (	 
   <div className="modal fade" id={modalId} tabIndex={-1} aria-labelledby={modalId} aria-hidden="true">
		<div className="modal-dialog">
		  <div className="modal-content">
			 <div className="modal-header">
				<h2 className="modal-title fs-5" id="exampleModalLabel">{modalId === 'modalNote' ? 'Create Note' : 'Edit Note'}</h2>
				<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
			 </div>
			 <div className="modal-body">
				<form className="note-form" onSubmit={handleSubmit}>
					<div className="mb-3">
						<label htmlFor="note-name" className="col-form-label">Name:</label>
						<input value={name} onChange={onChangeName} type="text" className="form-control" />
					</div>
					<div className="mb-3">
						<label htmlFor="note-category" className="col-form-label">Category:</label>
						<select value={category} onChange={onChangeCategory} className="form-control">
							<option value="Task">Task</option>
							<option value="Random Thought">Random Thought</option>
							<option value="Idea">Idea</option>
						</select>
					</div>
					<div className="mb-3">
						<label htmlFor="note-content" className="col-form-label">Content:</label>
						<textarea value={content} className="form-control" onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)}></textarea>
					</div>
					<div className="mb-3">
						<label htmlFor="note-date" className="col-form-label">Date:</label>
						<input value={date} type="date" className="form-control" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDate(e.target.value)}></input>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
						<button type="submit" className="btn btn-primary form-button">{modalId === 'modalNote' ? 'Create Note' : 'Edit Note'}</button>
					</div>
				</form>
			 </div>
		  </div>
		</div>
	 </div>
  )
}

export default Modal