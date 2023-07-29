import React from 'react'

const CreateNoteButton = () => {
  return (
	<div className="container text-center mt-3">
		<div className="row">
			<div className="col">
				<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalNote">Create Note</button>
			</div>
		</div>
 	</div>
  )
}

export default CreateNoteButton;