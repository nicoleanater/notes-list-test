import React from 'react';

function NotesList ({ list }) {
	return (
    <tbody data-testid="noteList">
      {list.map((note, i) => (
        <tr key={i}>
          <td>{note.title}</td>
          <td>{note.status}</td>
        </tr>
      ))}
    </tbody>
	);
}

export default NotesList;