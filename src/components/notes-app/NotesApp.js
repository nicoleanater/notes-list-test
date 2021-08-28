import React, { useState }  from "react";
import NotesInput from "../notes-input/NotesInput";
import "./index.css";

function NotesApp () {
  const [newNoteTitle, setNewNoteTitle] = useState('');
  const [newNoteStatus, setNewNoteStatus] = useState('');

  const handleInputChange = (e, stateChangeFunction) => stateChangeFunction(e.target.value);
  
  return (
    <div className="layout-column align-items-center justify-content-start">
      <section className="layout-row align-items-center justify-content-center mt-30">
        <NotesInput dataTestId={"input-note-name"} placeholder={"Note Title"} value={newNoteTitle} onChange={(e) => handleInputChange(e, setNewNoteTitle)}/>
        <NotesInput dataTestId={"input-note-status"} placeholder={"Note Status"} value={newNoteStatus} onChange={(e) => handleInputChange(e, setNewNoteStatus)}/>
        <button className="" data-testid="submit-button">Add Note</button>
      </section>

      <div className="mt-50">
        <ul className="tabs">
          <li className="tab-item slide-up-fade-in" data-testid="allButton">All</li>
          <li className="tab-item slide-up-fade-in" data-testid="activeButton">Active</li>
          <li className="tab-item slide-up-fade-in" data-testid="completedButton">Completed</li>
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
          <tbody data-testid="noteList">
            <tr>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default NotesApp