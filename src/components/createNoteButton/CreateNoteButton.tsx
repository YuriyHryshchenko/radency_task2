import React from 'react'

type ButtonProps = {
	onClick: () => void
 }
const CreateNoteButton = ({onClick}: ButtonProps) => {
  return (
	<div className="container mx-auto text-center mt-3">
		<div className="flex justify-center items-center">
				<button type="button" className="bg-blue-600 p-2 text-white rounded hover:bg-blue-700" onClick={onClick}>Create Note</button>
		</div>
 	</div>
  )
}

export default CreateNoteButton;