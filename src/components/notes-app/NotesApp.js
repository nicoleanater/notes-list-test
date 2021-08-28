import React, { useState }  from "react";
import NotesInput from "../notes-input/NotesInput";
import NotesList from "../notes-list/NotesList";
import SubmitButton from "../submit-button/SubmitButton";
import "./index.css";

function NotesApp () {
  const [newNoteTitle, setNewNoteTitle] = useState('');
  const [newNoteStatus, setNewNoteStatus] = useState('');
  const [notesList, setNotesList] = useState([]);
  // const [notesList, setNotesList] = useState([
  //   {
  //     title: 'Different 2',
  //     status: 'Different',
  //     addedOn: new Date('2021-08-28T00:36:02')
  //   },
  //   {
  //     title: 'Different 1',
  //     status: 'Different',
  //     addedOn: new Date('2021-08-28T00:35:02')
  //   },
  //   {
  //     title: 'Completed last',
  //     status: 'Completed',
  //     addedOn: new Date('2021-08-28T00:46:02')
  //   },
  //   {
  //     title: 'Newer',
  //     status: 'Newer',
  //     addedOn: new Date('2021-08-28T00:45:02')
  //   },
  //   {
  //     title: 'New',
  //     status: 'New',
  //     addedOn: new Date('2021-08-28T00:39:02')
  //   },
  //   {
  //     title: 'Completed 2',
  //     status: 'Completed',
  //     addedOn: new Date('2021-08-28T00:37:15')
  //   },
  //   {
  //     title: 'Completed 1',
  //     status: 'Completed',
  //     addedOn: new Date('2021-08-28T00:37:10')
  //   },
  //   {
  //     title: 'Active 2',
  //     status: 'Active',
  //     addedOn: new Date('2021-08-28T00:37:02')
  //   },
  //   {
  //     title: 'Active 1',
  //     status: 'Active',
  //     addedOn: new Date('2021-08-28T00:36:02')
  //   },
  // ]);
  const [currentFilter, setCurrentFilter] = useState('all');

  const handleInputChange = (e, stateChangeFunction) => stateChangeFunction(e.target.value);

  const addNote = () => {
    if (newNoteTitle ==='' && newNoteStatus === '') {
      alert('Fill all the fields to add a new note');
      return;
    }

    setNotesList(previous => [...previous, {title: newNoteTitle, status: newNoteStatus, addedOn: Date()} ]);
    setNewNoteTitle('');
    setNewNoteStatus('');
  }

  const isActive = (filter) =>  currentFilter === filter;

  return (
    <div className="layout-column align-items-center justify-content-start">
      <section className="layout-row align-items-center justify-content-center mt-30">
        <NotesInput dataTestId={"input-note-name"} placeholder={"Note Title"} value={newNoteTitle} onChange={(e) => handleInputChange(e, setNewNoteTitle)}/>
        <NotesInput dataTestId={"input-note-status"} placeholder={"Note Status"} value={newNoteStatus} onChange={(e) => handleInputChange(e, setNewNoteStatus)}/>
        <SubmitButton dataTestId={"submit-button"} label={"Add Note"} onClick={addNote}/>
      </section>

      <div className="mt-50">
        <ul className="tabs">
          <li className={`tab-item slide-up-fade-in ${isActive('all') && 'active'}`} data-testid="allButton" onClick={() => setCurrentFilter('all')}>All</li>
          <li className={`tab-item slide-up-fade-in ${isActive('active') && 'active'}`}  data-testid="activeButton" onClick={() => setCurrentFilter('active')}>Active</li>
          <li className={`tab-item slide-up-fade-in ${isActive('completed') && 'active'}`}  data-testid="completedButton" onClick={() => setCurrentFilter('completed')}>Completed</li>
        </ul>
      </div>
      <div className="card w-40 pt-30 pb-8">
        <table>
          <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
          </tr>
          </thead>
          <NotesList list={notesList} currentFilter={currentFilter} />
        </table>
      </div>
    </div>
  );
}

export default NotesApp