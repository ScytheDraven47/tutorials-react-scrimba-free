const Sidebar = ({
	notes,
	currentNote,
	setCurrentNoteId,
	newNote,
	deleteNote,
}) => {
	const noteElements = notes.map((note) => (
		<div key={note.id}>
			<div
				className={`title ${
					note.id === currentNote.id ? 'selected-note' : ''
				}`}
				onClick={() => setCurrentNoteId(note.id)}
			>
				<h4 className='text-snippet'>{note.body.split('\n')[0]}</h4>
				<p className='summary'>
					{new Date(note.modified).toLocaleString('en-NZ', {
						day: '2-digit',
						month: 'short',
						year: '2-digit',
						hour: '2-digit',
						minute: '2-digit',
					})}
				</p>
				<button
					className='delete-btn'
					onClick={(e) => deleteNote(e, note.id)}
				>
					<i className='gg-trash trash-icon'></i>
				</button>
			</div>
		</div>
	))

	return (
		<section className='pane sidebar'>
			<div className='sidebar--header'>
				<h3>Notes</h3>
				<button className='new-note' onClick={newNote}>
					+
				</button>
			</div>
			{noteElements}
		</section>
	)
}

export default Sidebar
