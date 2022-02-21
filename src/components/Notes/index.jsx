import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import Split from 'react-split'
import Sidebar from './Sidebar'
import Editor from './Editor'
import styled from '@emotion/styled'

const getNotesFromStorage = () =>
	JSON.parse(localStorage.getItem('markdownNotes'))
const saveNotesToStorage = (notes) =>
	localStorage.setItem('markdownNotes', JSON.stringify(notes))

const Notes = () => {
	const [notes, setNotes] = useState(() => getNotesFromStorage() || [])
	const [currentNoteId, setCurrentNoteId] = useState(
		(notes[0] && notes[0].id) || ''
	)

	useEffect(() => saveNotesToStorage(notes), [notes])

	function createNewNote() {
		const newNote = {
			id: nanoid(),
			body: "# Type your markdown note's title here",
		}
		setNotes((prevNotes) => [newNote, ...prevNotes])
		setCurrentNoteId(newNote.id)
	}

	function updateNote(text) {
		setNotes((oldNotes) =>
			oldNotes.map((oldNote) => {
				return oldNote.id === currentNoteId
					? { ...oldNote, body: text }
					: oldNote
			})
		)
	}

	function findCurrentNote() {
		return (
			notes.find((note) => {
				return note.id === currentNoteId
			}) || notes[0]
		)
	}

	return (
		<StyledMain>
			{notes.length > 0 ? (
				<Split
					sizes={[30, 70]}
					direction='horizontal'
					className='split'
				>
					<Sidebar
						notes={notes}
						currentNote={findCurrentNote()}
						setCurrentNoteId={setCurrentNoteId}
						newNote={createNewNote}
					/>
					{currentNoteId && notes.length > 0 && (
						<Editor
							currentNote={findCurrentNote()}
							updateNote={updateNote}
						/>
					)}
				</Split>
			) : (
				<div className='no-notes'>
					<h1>You have no notes</h1>
					<button className='first-note' onClick={createNewNote}>
						Create one now
					</button>
				</div>
			)}
		</StyledMain>
	)
}

export default Notes

const StyledMain = styled.main`
	* {
		box-sizing: border-box;
	}

	body {
		margin: 0;
		padding: 0;
		font-family: 'Karla', sans-serif;
	}

	button:focus {
		outline: none;
	}

	.ql-editor p,
	.ql-editor.ql-blank::before {
		font-size: 1.3em;
		font-weight: 100;
	}

	.pane {
		overflow-y: auto;
		/* padding: 10px; */
	}

	.sidebar {
		width: 20%;
		height: 100vh;
	}

	.sidebar--note {
		/* display: flex; */
	}

	.sidebar--header {
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.sidebar--header > h3 {
		font-size: 1.75rem;
	}

	.new-note {
		cursor: pointer;
		background-color: #4a4e74;
		border: none;
		color: white;
		border-radius: 3px;
		height: 30px;
		width: 30px;
	}

	.first-note {
		cursor: pointer;
		background-color: #4a4e74;
		border: none;
		color: white;
		border-radius: 3px;
		padding: 1rem;
	}

	.editor {
		width: 80%;
		height: 100vh;
	}

	.title {
		overflow: hidden;
		width: 100%;
		cursor: pointer;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.title--delete {
		display: none;
		cursor: pointer;
		background-color: transparent;
		border: none;
	}

	.title:hover .title--delete {
		display: block;
	}

	.note-summary:not(:last-of-type) {
		border-bottom: 1px solid lightgray;
	}

	.text-snippet {
		padding-inline: 5px;
		font-size: 0.8rem;
		font-weight: 400;
		line-height: 1.2rem;
		color: #4a4e74;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.selected-note {
		background-color: #4a4e74;
	}

	.selected-note .text-snippet {
		color: white;
		font-weight: 700;
	}

	.gutter {
		background-color: #eee;

		background-repeat: no-repeat;
		background-position: 50%;
	}

	.gutter.gutter-horizontal {
		background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==');
	}

	.gutter.gutter-horizontal:hover {
		cursor: col-resize;
	}

	.split {
		display: flex;
	}

	.no-notes {
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: whitesmoke;
	}
`
