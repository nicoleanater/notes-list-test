import React from 'react';

function SubmitButton ({ dataTestId, label, onClick }) {
	return (
    <button className="" data-testid={dataTestId} onClick={onClick}>{label}</button>
	);
}

export default SubmitButton;