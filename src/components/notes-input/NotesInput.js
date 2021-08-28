import React from 'react';

function NotesInput ({ dataTestId, placeholder, value, onChange }) {
	return (
    <input
      data-testid={dataTestId}
      type="text"
      className="large mx-8"
      placeholder={placeholder}
      value={value}
      onChange={onChange} />
	);
}

export default NotesInput;